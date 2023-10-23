using FlyFast.Configuration;
using FlyFast.Entities;
using FlyFast.Interfaces;
using System.Net;
using System.Net.Mail;

namespace FlyFast.Repository
{
    public class FlightRepository : IFlightRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly EmailConfigurations _emailConfigurations;
        public FlightRepository(ApplicationDbContext context, EmailConfigurations emailConfigurations)
        {

            _context = context;
            _emailConfigurations = emailConfigurations;

        }

        public void BookingTicket(int id, string emailAddress, string name, string phone, int tickets)
        {
            var existingFlight = _context.Flights.FirstOrDefault(f => f.Id == id);
            existingFlight.AvailableSeats = existingFlight.AvailableSeats - tickets;

            var bookingFlight = new Booking
            {
                FlightId = id,
                EmailAddress = emailAddress,
                CustomerName = name,
                Phone = phone,
                SeatNumber = 13,
                NoOfTickets = tickets,
                BookingDate = DateTime.Now,
            };
            _context.Bookings.Add(bookingFlight);
            _context.SaveChanges();
            SendEmailToTheUser(id, tickets, emailAddress, name);
        }

        public Flight GetFlightById(int id)
        {
            return _context.Flights.FirstOrDefault(f => f.Id == id);
        }

        public List<Flight> GetFlights(string departureAirport, string arrivalAirport, DateTime departureDate,
            int numberOfTickets, DateTime? returnDate)
        {
            var flights = _context.Flights.Where(flight =>
                flight.DepartureAirport.ToLower() == departureAirport.ToLower()
                && flight.ArrivalAirport.ToLower() == arrivalAirport.ToLower() && flight.DepartureTime.Date == departureDate.Date
                && numberOfTickets <= flight.AvailableSeats && flight.AvailableSeats != 0).ToList();

            return flights;
        }

        private void SendEmailToTheUser(int flightId, int tickets, string emailAddress, string name)
        {
            var booking = _context.Flights.FirstOrDefault(f => f.Id == flightId);

            var emailBody = @$"<h3>A flight has been booked for you Mr./Ms. {name} </h3>
                <p><b>Airline:</b>{booking?.Airline}</p>
                <p><b>Departure Date:</b>{booking?.DepartureTime}</p>
                <p><b>Departure Airport:</b>{booking?.DepartureAirport}</p>
                <p><b>Arrival Date:</b>{booking?.ArrivalTime}</p>
                <p><b>Arrival Airport:</b>{booking?.ArrivalAirport}</p>
                <p><b>Class Type:</b>{booking?.ClassType}</p>
                <p><b>Ticket Price:</b>{booking?.TicketPrice}{'\u20AC'}</p>
                <p><b>Number Of Tickets:</b>{tickets}</p>
            ";

            var message = new MailMessage();
            message.From = new MailAddress(_emailConfigurations.EmailAddress);
            message.To.Add(emailAddress);
            message.Subject = "New booking flight was created for you";
            message.IsBodyHtml = true;
            message.Body = emailBody;


            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential(_emailConfigurations.EmailAddress, _emailConfigurations.AppPassword),
                EnableSsl = true,
            };

            smtpClient.Send(message);

        }
    }

}

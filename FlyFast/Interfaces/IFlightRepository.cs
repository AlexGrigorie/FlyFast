using FlyFast.Entities;

namespace FlyFast.Interfaces
{
    public interface IFlightRepository
    {
        List<Flight> GetFlights(string departureAirport, string arrivalAirport, DateTime departureDate,
            int numberOfTickets, DateTime? returnDate);
        Flight GetFlightById(int id);
        void BookingTicket(int id, string emailAddress, string name, string phone, int tickets);
    }
}

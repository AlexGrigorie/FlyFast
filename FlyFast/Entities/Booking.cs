namespace FlyFast.Entities
{
    public class Booking
    {
        public int Id { get; set; }
        public int FlightId { get; set; }
        public string CustomerName { get; set; }
        public string EmailAddress { get; set; }
        public string Phone { get; set; }
        public int NoOfTickets { get; set; }
        public int SeatNumber { get; set; }
        public DateTime BookingDate { get; set; }
    }
}

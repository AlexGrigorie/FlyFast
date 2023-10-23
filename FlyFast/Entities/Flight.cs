namespace FlyFast.Entities
{
    public class Flight
    {
        public int Id { get; set; }
        public string Airline { get; set; }
        public string DepartureAirport { get; set; }
        public string ArrivalAirport { get; set; }
        public DateTime DepartureTime { get; set; }
        public DateTime ArrivalTime { get; set; }
        public int AvailableSeats { get; set; }
        public string ClassType { get; set; }
        public decimal TicketPrice { get; set; }
    }
}

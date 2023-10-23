using FlyFast.Entities;
using FlyFast.Repository;
using Microsoft.AspNetCore.Mvc;

namespace FlyFast.Controllers
{
    public class FlightController : BaseApiController
    {
        private readonly ILogger<FlightController> _logger;
        private readonly FlightRepository _flightRepository;

        public FlightController(ILogger<FlightController> logger, FlightRepository flightRepository)
        {
            _logger = logger;
            _flightRepository = flightRepository;
        }

        [HttpGet]
        public IEnumerable<Flight> GetFlights(string departureAirport, string arrivalAirport, DateTime departureDate,
            int numberOfTickets, DateTime? returnDate) => _flightRepository.GetFlights(departureAirport, arrivalAirport, departureDate,
            numberOfTickets, returnDate);
        [HttpGet("{id:int}")]
        public Flight GetFlightById(int id) => _flightRepository.GetFlightById(id);

        [HttpPost]
        public void BookingTicket(int id, string emailAddress, string name, string phone, int tickets)
            => _flightRepository.BookingTicket(id, emailAddress, name, phone, tickets);

    }
}

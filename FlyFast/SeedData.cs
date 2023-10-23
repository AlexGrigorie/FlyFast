using FlyFast.Entities;
using Microsoft.EntityFrameworkCore;

namespace FlyFast
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ApplicationDbContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<ApplicationDbContext>>()))
            {
                if (context.Flights.Any())
                {
                    return;
                }
                else
                {


                    context.Flights.AddRange(
                            new Flight
                            {
                                Airline = "WizzAir",
                                DepartureAirport = "Craiova",
                                ArrivalAirport = "Constanta",
                                DepartureTime = DateTime.Parse("2024-10-01 16:00"),
                                ArrivalTime = DateTime.Parse("2024-10-02 16:00"),
                                AvailableSeats = 90,
                                ClassType = "Economy",
                                TicketPrice = 100,
                            },
                            new Flight
                            {
                                Airline = "Qatar Airways",
                                DepartureAirport = "Doha",
                                ArrivalAirport = "Dubai",
                                DepartureTime = DateTime.Parse("2024-11-15 10:30"),
                                ArrivalTime = DateTime.Parse("2024-11-15 12:30"),
                                AvailableSeats = 120,
                                ClassType = "Business",
                                TicketPrice = 450,
                            },

                            new Flight
                            {
                                Airline = "British Airways",
                                DepartureAirport = "London Heathrow",
                                ArrivalAirport = "New York JFK",
                                DepartureTime = DateTime.Parse("2024-09-20 18:45"),
                                ArrivalTime = DateTime.Parse("2024-09-21 22:15"),
                                AvailableSeats = 200,
                                ClassType = "First Class",
                                TicketPrice = 1500,
                            },

                             new Flight
                             {
                                 Airline = "Air France",
                                 DepartureAirport = "Paris Charles de Gaulle",
                                 ArrivalAirport = "Tokyo Narita",
                                 DepartureTime = DateTime.Parse("2024-12-05 21:15"),
                                 ArrivalTime = DateTime.Parse("2024-12-06 18:30"),
                                 AvailableSeats = 150,
                                 ClassType = "Premium Economy",
                                 TicketPrice = 800,
                             },

                             new Flight
                             {
                                 Airline = "Lufthansa",
                                 DepartureAirport = "Frankfurt",
                                 ArrivalAirport = "Beijing Capital",
                                 DepartureTime = DateTime.Parse("2024-10-10 14:00"),
                                 ArrivalTime = DateTime.Parse("2024-10-11 07:45"),
                                 AvailableSeats = 180,
                                 ClassType = "Economy",
                                 TicketPrice = 600,
                             },

                             new Flight
                             {
                                 Airline = "Emirates",
                                 DepartureAirport = "Dubai",
                                 ArrivalAirport = "Sydney",
                                 DepartureTime = DateTime.Parse("2024-11-30 23:55"),
                                 ArrivalTime = DateTime.Parse("2024-12-01 16:20"),
                                 AvailableSeats = 220,
                                 ClassType = "First Class",
                                 TicketPrice = 2000,
                             },

                                new Flight
                                {
                                    Airline = "Delta Air Lines",
                                    DepartureAirport = "Atlanta",
                                    ArrivalAirport = "Los Angeles",
                                    DepartureTime = DateTime.Parse("2024-09-25 08:15"),
                                    ArrivalTime = DateTime.Parse("2024-09-25 10:45"),
                                    AvailableSeats = 160,
                                    ClassType = "Business",
                                    TicketPrice = 400,
                                },

                                 new Flight
                                 {
                                     Airline = "Singapore Airlines",
                                     DepartureAirport = "Singapore Changi",
                                     ArrivalAirport = "Hong Kong International",
                                     DepartureTime = DateTime.Parse("2024-10-15 17:30"),
                                     ArrivalTime = DateTime.Parse("2024-10-15 19:45"),
                                     AvailableSeats = 180,
                                     ClassType = "Premium Economy",
                                     TicketPrice = 700,
                                 },

                                 new Flight
                                 {
                                     Airline = "American Airlines",
                                     DepartureAirport = "Dallas/Fort Worth",
                                     ArrivalAirport = "Miami",
                                     DepartureTime = DateTime.Parse("2024-09-10 12:00"),
                                     ArrivalTime = DateTime.Parse("2024-09-10 14:30"),
                                     AvailableSeats = 140,
                                     ClassType = "Economy",
                                     TicketPrice = 250,
                                 },

                                 new Flight
                                 {
                                     Airline = "Cathay Pacific",
                                     DepartureAirport = "Hong Kong International",
                                     ArrivalAirport = "Seoul Incheon",
                                     DepartureTime = DateTime.Parse("2024-11-05 19:45"),
                                     ArrivalTime = DateTime.Parse("2024-11-05 22:10"),
                                     AvailableSeats = 160,
                                     ClassType = "Business",
                                     TicketPrice = 550,
                                 });
                }
                if (context.Customers.Any())
                {
                    return;
                }
                else
                {


                    context.Customers.AddRange(
                            new Customer
                            {
                                Name = "Alex Grigorie",
                                Birthday = DateTime.Parse("1998-06-13"),
                                Email = "grigoriealex@yahoo.com",
                                Phone = "1234567"
                            },
                            new Customer
                            {
                                Name = "Alex Grigorie",
                                Birthday = DateTime.Parse("1998-06-13"),
                                Email = "grigoriealex@yahoo.com",
                                Phone = "1234567"
                            },
                            new Customer
                            {
                                Name = "Maria Popescu",
                                Birthday = DateTime.Parse("1990-03-25"),
                                Email = "mariapop@gmail.com",
                                Phone = "9876543"
                            },
                            new Customer
                            {
                                Name = "John Smith",
                                Birthday = DateTime.Parse("1985-11-02"),
                                Email = "john.smith@example.com",
                                Phone = "5678901"
                            },
                            new Customer
                            {
                                Name = "Elena Ionescu",
                                Birthday = DateTime.Parse("1995-09-18"),
                                Email = "elena.ionescu@hotmail.com",
                                Phone = "3456789"
                            },
                            new Customer
                            {
                                Name = "Ahmed Hassan",
                                Birthday = DateTime.Parse("1980-12-07"),
                                Email = "ahmed.hassan@email.com",
                                Phone = "4567890"
                            },
                            new Customer
                            {
                                Name = "Sophie Brown",
                                Birthday = DateTime.Parse("1992-08-30"),
                                Email = "sophie.brown@example.net",
                                Phone = "2345678"
                            },
                            new Customer
                            {
                                Name = "Luca Rossi",
                                Birthday = DateTime.Parse("1999-04-15"),
                                Email = "luca.rossi@domain.com",
                                Phone = "6789012"
                            },
                            new Customer
                            {
                                Name = "Linda Johnson",
                                Birthday = DateTime.Parse("1987-07-22"),
                                Email = "linda.johnson@webmail.org",
                                Phone = "7890123"
                            },
                            new Customer
                            {
                                Name = "Chen Wei",
                                Birthday = DateTime.Parse("1993-01-10"),
                                Email = "chen.wei@example.cn",
                                Phone = "8901234"
                            }
                     );
                }

                context.SaveChanges();
            }
        }
    }
}

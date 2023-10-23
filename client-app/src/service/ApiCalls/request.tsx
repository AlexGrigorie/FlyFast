const api_url = process.env.REACT_APP_API_URL;
const requests = {
  getFlights: (
    departureAirport: string,
    arrivalAirport: string,
    departureDate: string,
    numberOfTickets: number,
    returnDate?: string
  ) =>
    `${api_url}/api/Flight/GetFlights?departureAirport=${departureAirport}&arrivalAirport=${arrivalAirport}
    &departureDate=${departureDate}&numberOfTickets=${numberOfTickets}&returnDate=${returnDate}`,
  getFlightById: (id: any) => `${api_url}/api/Flight/GetFlightById/${id}`,
  BookingTicket: (
    id: any,
    emailAddress: string,
    name: string,
    phone: string,
    tickets: number
  ) =>
    `${api_url}/api/Flight/BookingTicket?id=${id}&emailAddress=${emailAddress}&name=${name}&phone=${phone}&tickets=${tickets}`,
};
export default requests;

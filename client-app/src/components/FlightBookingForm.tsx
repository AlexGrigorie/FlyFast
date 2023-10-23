import React, { useState } from "react";
import InputText from "./InputText";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { BiCalendar } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import Button from "./Button";
import ApiFetch from "../service/ApiCalls/request";
import ShowFlight from "./ShowFlight";

const FlightBookingForm = () => {
  const [data, setData] = useState<any>([]);
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [numberOfTickets, setNumberOfTickets] = useState(0);
  const [ticketType, setTicketType] = useState("oneway");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (
      departureAirport.length === 0 ||
      arrivalAirport.length === 0 ||
      departureDate.length === 0 ||
      numberOfTickets === 0
    ) {
      window.alert("One of your inputs is empty!");
      return;
    }
    try {
      const response = await fetch(
        ApiFetch.getFlights(
          departureAirport,
          arrivalAirport,
          departureDate,
          numberOfTickets,
          returnDate
        )
      );
      const data = await response.json();
      if (data.length === 0) {
        window.alert("We do not have any flight for your selection!");
        return;
      }
      setData(data);
    } catch (error) {
      console.error("Eroare la căutarea zborurilor:", error);
    }
  };
  const handleInputChange = (event: any) => {
    setTicketType(event.target.value);
  };

  return (
    <>
      <div className="bg-white w-[40%] mb-48 rounded-3xl mt-28 relative shadow shadow-gray-600 ml-9">
        <div className="p-5">
          <p className="font-semibold">
            Book Cheap <span className="text-yellow-400">Flights</span>
          </p>
        </div>
        <div className="flex justify-center py-3 bg-black text-white">
          <div className="flex">
            <input
              className="text-white"
              type="radio"
              name="ticket_type"
              value="oneway"
              onChange={handleInputChange}
            />
            <p className="text-sm ml-3">One Way</p>
          </div>
          <div className="flex ml-3">
            <input
              className="text-white"
              type="radio"
              name="ticket_type"
              value="rounndTrip"
              onChange={handleInputChange}
            />
            <p className="text-sm ml-3">Round Trip</p>
          </div>
        </div>
        <div className="p-5">
          <InputText
            type={"text"}
            image={<GiAirplaneDeparture />}
            placeholder={"Enter City"}
            label={"Departure"}
            onChange={(value) => setDepartureAirport(value)}
          />
          <InputText
            type={"text"}
            image={<GiAirplaneArrival />}
            placeholder={"Enter City"}
            label={"Arrival"}
            extraStyle="mt-2"
            onChange={(value) => setArrivalAirport(value)}
          />
          <InputText
            type={"date"}
            image={<BiCalendar />}
            placeholder={"Departure Date"}
            label={"Departure"}
            extraStyle="mt-2"
            onChange={(value) => setDepartureDate(value)}
          />
          {ticketType === "oneway" ? (
            <InputText
              type={"date"}
              image={<BiCalendar />}
              placeholder={"Return Date"}
              label={"Return Date"}
              extraStyle="mt-2"
              onChange={(value) => setReturnDate(value)}
              isDisabled={true}
              colorIsDisabled={"bg-black"}
            />
          ) : (
            <InputText
              type={"date"}
              image={<BiCalendar />}
              placeholder={"Return Date"}
              label={"Return Date"}
              extraStyle="mt-2"
              onChange={(value) => setReturnDate(value)}
            />
          )}

          <InputText
            type={"number"}
            image={<IoPersonSharp />}
            placeholder={"No. Of Tickets"}
            label={"Tickets"}
            extraStyle="mt-2"
            min={"1"}
            onChange={(value) => setNumberOfTickets(parseInt(value, 10))}
          />
        </div>
        <div className="px-5">
          <Button
            onClick={handleSubmit}
            label={"FIND FLIGHTS"}
            extraStyle={"justify-center mb-4"}
          />
        </div>
      </div>
      {data.length !== 0 &&
        data.map((d: any) => (
          <ShowFlight tickets={numberOfTickets} flight={d} key={d.id} />
        ))}
    </>
  );
};

export default FlightBookingForm;

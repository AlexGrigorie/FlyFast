import React from "react";
import { PiArrowFatLinesRightLight } from "react-icons/pi";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

interface ShowFlightProps {
  flight: any;
  tickets: number;
}

const ShowFlight = ({ flight, tickets }: ShowFlightProps) => {
  const navigate = useNavigate();

  const formatDate = (gotDate: string) => {
    const date = new Date(gotDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    return date.toLocaleDateString("en-GB", options);
  };
  return (
    <div
      className="w-100% justify-center p-2 text-center mb-3 bg-white border border-gray-200 rounded-lg shadow sm:p-8
     dark:bg-gray-700 dark:border-gray-700"
      style={{ marginRight: 40, marginLeft: 30 }}
    >
      <h5 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
        Fly fast from anywhere
      </h5>
      <div key={flight.id} className="grid grid-cols-10 gap-0 dark: text-white">
        <div>{flight.airline}</div>
        <div>{formatDate(flight.departureTime)}</div>
        <div>{flight.departureAirport}</div>
        <div className="flex">
          <PiArrowFatLinesRightLight />
          <PiArrowFatLinesRightLight />
          <PiArrowFatLinesRightLight />
        </div>
        <div>{formatDate(flight.arrivalTime)}</div>
        <div>{flight.arrivalAirport}</div>
        <div>{flight.classType}</div>
        <div>
          {flight.ticketPrice}
          {"\u20AC"}
        </div>
        <div className="mr-4">
          <p>No. Of Tickets {tickets}</p>
        </div>
        <Button
          label={"Buy Now"}
          onClick={() => {
            navigate(`/customer-info/${flight.id}?tickets=${tickets}`);
          }}
        />
      </div>
    </div>
  );
};

export default ShowFlight;

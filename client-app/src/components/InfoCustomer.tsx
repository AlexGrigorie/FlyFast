import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import ApiFetch from "../service/ApiCalls/request";
import { PiArrowFatLinesRightLight } from "react-icons/pi";
import ShowMessage from "./ShowMessage";

const InfoCustomer = () => {
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

  const [showMessage, setShowMessage] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const tickets = Number(params.get("tickets"));

  const { id } = useParams();
  const [airline, setAirline] = useState("");
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [classType, setClassType] = useState("");
  const [ticketPrice, setTicketPrice] = useState(0);

  const [emailAddress, setEmailAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (
      emailAddress.length === 0 ||
      name.length === 0 ||
      departureDate.length === 0 ||
      phone.length === 0
    ) {
      window.alert("One of your inputs is empty!");
      return;
    }
    if (emailAddress && emailAddress && phone) {
      const response = await fetch(
        ApiFetch.BookingTicket(id, emailAddress, name, phone, tickets),
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            emailAddress,
            name,
            phone,
            tickets,
          }),
        }
      );

      if (response.ok) {
        setShowMessage(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        window.alert("Something has gone wrong");
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ApiFetch.getFlightById(id));
        const json = await response.json();
        setDepartureAirport(json.departureAirport);
        setArrivalAirport(json.arrivalAirport);
        setDepartureDate(json.departureTime);
        setArrivalDate(json.arrivalTime);
        setClassType(json.classType);
        setTicketPrice(json.ticketPrice);
        setAirline(json.airline);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div
        className="w-full justify-center p-2 text-center mb-3 bg-white border border-gray-200 rounded-lg shadow sm:p-8
     dark:bg-gray-900 dark:border-gray-700"
      >
        <h5 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Your ticket is almost ready!
        </h5>
        <div className="grid grid-cols-10 gap-0  dark: text-white">
          <div>{airline}</div>
          <div>{formatDate(departureDate)}</div>
          <div>{departureAirport}</div>
          <div className="flex">
            <PiArrowFatLinesRightLight />
            <PiArrowFatLinesRightLight />
            <PiArrowFatLinesRightLight />
            <PiArrowFatLinesRightLight />
          </div>
          <div>{formatDate(arrivalDate)}</div>
          <div>{arrivalAirport}</div>
          <div>{classType}</div>
          <div>
            {ticketPrice}
            {"\u20AC"}
          </div>
          <div>{tickets}</div>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Customer Contact
          </h2>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                onChange={(event) => {
                  setEmailAddress(event.target.value);
                }}
                required
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Alexandru Grigorie"
                required
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="0785123540"
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                required
              />
            </div>
            <button
              onClick={handleSubmit}
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      {showMessage && (
        <ShowMessage message={"Your fligh has been booked successfully!"} />
      )}
    </>
  );
};

export default InfoCustomer;

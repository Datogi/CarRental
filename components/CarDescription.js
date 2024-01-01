import React from "react";
import { FaCar, FaGasPump, FaCogs, FaMapMarkerAlt } from "react-icons/fa";

const CarDescription = ({ car }) => {
  return (
    <div className="container mx-auto px-4 mt-8 relative">
      <div className="max-w-screen-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="mb-8 md:mb-0">
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-48 object-contain md:h-64 rounded-lg"
            />
          </div>
          <div className="md:pl-6 mt-4 md:mt-0">
            <h1 className="text-2xl font-bold text-indigo-700 mb-4">
              {car.brand} {car.model}
            </h1>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-2 text-gray-700">
                Car Details
              </h2>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <FaCar className="mr-2" />{" "}
                  <strong className="mr-2">Year:</strong> {car.year}
                </li>
                <li className="flex items-center">
                  <FaCogs className="mr-2" />{" "}
                  <strong className="mr-2">Transmission:</strong>{" "}
                  {car.transmission}
                </li>
                <li className="flex items-center">
                  <FaCar className="mr-2" />{" "}
                  <strong className="mr-2">Doors:</strong> {car.doors}
                </li>
                <li className="flex items-center">
                  <FaCar className="mr-2" />{" "}
                  <strong className="mr-2">Seats:</strong> {car.seats}
                </li>
                <li className="flex items-center ">
                  <FaGasPump className="mr-2" />{" "}
                  <strong className="mr-2">Fuel Type: </strong> {car.fuelType}
                </li>
                <li className="flex items-center">
                  <FaCogs className="mr-2" />{" "}
                  <strong className="mr-2">Engine:</strong> {car.engine}
                </li>
                <li className="flex items-center">
                  <FaCar className="mr-2" />{" "}
                  <strong className="mr-2">Mileage:</strong> {car.mileage} miles
                </li>
                <li className="flex items-center">
                  <FaCogs className="mr-2" />{" "}
                  <strong className="mr-2">Condition:</strong> {car.condition}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2 text-gray-700">
                Rental Information
              </h2>
              <p className="text-gray-600 text-lg">
                <strong className="text-indigo-500">Rental Rate:</strong> $
                {car.rentalRate}/day
              </p>
              <p className="text-gray-600 text-lg">
                <strong className="text-indigo-500">Insurance Included:</strong>{" "}
                {car.insuranceIncluded ? "Yes" : "No"}
              </p>
              <p className="text-gray-600 text-lg flex items-center">
                <span className="font-semibold text-indigo-500">Location:</span>
                <span className="ml-1">{car.location}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDescription;

import React, { useContext } from "react";
import Card from "./Card";
import ItemContext from "@/Context/ItemContext";
import Pagination from "../Pagination";

const Main = ({ carsList }) => {
  console.log(carsList);
  return (
    <div
      id="cars"
      className="mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8"
    >
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Car List
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {carsList.map((car) => (
          <Card key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Main;

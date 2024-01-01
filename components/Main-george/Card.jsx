import Link from "next/link";
import React from "react";

const Card = ({ car }) => {
  return (
    <div
      key={car._id}
      className="group relative bg-slate-200 border-slate-950 shadow-2xl rounded hover:scale-105 duration-200"
    >
      <div className="aspect-w-1 aspect-h-1 h-[140px] w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
        <img
          src={car.image}
          alt={car.brand}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="mt-4 flex justify-between p-2">
        <div>
          <h3 className="text-lg text-gray-900">
            <Link href={`/${car._id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {car.brand}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{car.color}</p>
        </div>
        <p className="text-lg font-medium text-gray-900">{car.rentalRate}$</p>
      </div>
      <div className="w-10 mx-auto">
        <button>
          <img
            src="https://cdn3.iconfinder.com/data/icons/arrow-in-circle/64/Arrow_in_Circle-01-256.png"
            alt="next"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;

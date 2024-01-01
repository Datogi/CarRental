import ItemContext from "@/Context/ItemContext";
import Main from "@/components/Main-george/Main";
import Pagination from "@/components/Pagination";
import PriceInput from "@/components/PriceInput";
import SelectInput from "@/components/SelectInput";
import React, { useContext, useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

const CarsFilter = () => {
  const ctx = useContext(ItemContext);
  const [loading, isLoading] = useState(true);

  const [filters, setFilters] = useState({
    Brand: "",
    Color: "",
    Condition: "",
    Doors: "",
    Location: "",
    Model: "",
    RentalRate: "",
    Seats: "",
    Year: "",
    Min: 0,
    Max: Infinity,
  });
  const filterOptions = [
    {
      value: filters.Brand,
      name: "Brand",
      options: [
        "Chevrolet",
        "Nissan",
        "Volkswagen",
        "Hyundai",
        "BMW",
        "Mercedes-Benz",
        "Audi",
        "Tesla",
        "Kia",
        "Mazda",
      ],
    },
    {
      value: filters.Year,
      name: "Year",
      options: ["2019", "2020", "2021", "2022", "2023"],
    },
    {
      value: filters.Color,
      name: "Color",
      options: ["Red", "White", "Gray", "Black"],
    },
    {
      value: filters.Seats,
      name: "Seats",
      options: ["4", "5"],
    },
    {
      value: filters.Location,
      name: "Location",
      options: ["Kutaisi", "Tbilisi", "Batumi"],
    },
  ];

  const getCars = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/cars");
      const data = await res.json();
      ctx.setCars(data.cars);
      ctx.setFilteredArr(data.cars);

      isLoading(false);
      console.log(ctx);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    ctx.cars.length > 0 && isLoading(false);
    ctx.cars.length <= 0 && getCars();
  }, []);

  useEffect(() => {
    console.log(ctx.cars);
    const filteredData = ctx.cars.filter((car) => {
      console.log(filters.Seats);
      // Check each filter condition and return true if the car matches
      return (
        (filters.Brand === "" || car.brand === filters.Brand) &&
        (filters.Color === "" || car.color === filters.Color) &&
        (filters.Condition === "" || car.condition === filters.Condition) &&
        (filters.Doors === "" || car.doors === filters.Doors) &&
        (filters.Location === "" || car.location === filters.Location) &&
        (filters.Model === "" || car.model === filters.Model) &&
        (filters.RentalRate === "" || car.rentalRate === filters.RentalRate) &&
        (filters.Seats === "" || car.seats * 1 === filters.Seats * 1) &&
        (filters.Year === "" || car.year * 1 === filters.Year * 1) &&
        (filters.Min === 0 || car.rentalRate * 1 >= filters.Min * 1) &&
        (filters.Max === Infinity ||
          !filters.Max ||
          car.rentalRate * 1 <= filters.Max * 1)
      );
    });
    ctx.setFilteredArr(filteredData);
  }, [filters]);

  return (
    <div className="w-screen flex  ">
      {loading ? (
        <div className="flex justify-center items-center  w-screen h-screen">
          <Oval
            height={80}
            width={80}
            color="orange-200"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#2658ceeb"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <>
          <div className="w-1/5  border-r-2 flex  items-center flex-col border-r-gray-300">
            {filterOptions.map((filter) => (
              <SelectInput
                key={filter.name}
                setValue={setFilters}
                value={filter.value}
                name={filter.name}
                options={filter.options}
              />
            ))}
            <PriceInput filters={filters} setFilters={setFilters} />
          </div>
          <div className="w-4/5 ml-5">
            <Main
              carsList={ctx.filteredArr.slice(
                (ctx.page - 1) * 8,
                (ctx.page - 1) * 8 + 8
              )}
            />

            <Pagination />
          </div>
        </>
      )}

      {/* Render your filter input fields here */}
      {/* Example: */}
    </div>
  );
};

export default CarsFilter;

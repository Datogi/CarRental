import React from "react";

const PriceInput = ({ filters, setFilters }) => {
  return (
    <div className="block w-full mb-8">
      <label
        htmlFor="minPrice"
        className="text-lg font-sans font-medium m-3 block"
      >
        Price
      </label>
      <div className="flex mx-5 space-x-2">
        <input
          type="text"
          id="minPrice"
          placeholder="Min"
          value={filters.Min}
          onChange={(e) => {
            setFilters((prev) => ({ ...prev, Min: e.target.value }));
          }}
          className="w-1/2 py-2 px-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          id="maxPrice"
          placeholder="Max"
          value={filters.Max}
          onChange={(e) => {
            setFilters((prev) => ({ ...prev, Max: e.target.value }));
          }}
          className="w-1/2 py-2 px-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default PriceInput;

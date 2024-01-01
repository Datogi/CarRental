import React from "react";

const SelectInput = ({ setValue, name, options }) => {
  return (
    <div className="block w-full mb-8">
      <label htmlFor={name} className="text-lg font-sans font-medium m-3 block">
        {name}
      </label>
      <div className="relative mx-5">
        <select
          onChange={(e) => {
            setValue((prev) => ({ ...prev, [name]: e.target.value }));
          }}
          id={name}
          className="w-full py-2 px-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-500 appearance-none"
        >
          <option value="">Select {name}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectInput;

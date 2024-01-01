import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <Link
      className="border-2 hover:bg-blue-800 hover:border-blue-500 rounded-full px-6 py-2 text-white bg-blue-600 hover:scale-110 transition-transform duration-300"
      href="/CarsFilter"
    >
      იპოვე შენი მანქანა
    </Link>
  );
};

export default Button;

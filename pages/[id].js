import ItemContext from "@/Context/ItemContext";
import CarDescription from "@/components/CarDescription"; // Import the correct CarDescription component
import Link from "next/link";
import { useEffect, useContext, useState } from "react";

function DetailsScreen() {
  const [id, setId] = useState(null);
  const ctx = useContext(ItemContext);
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true); // Corrected the usage of setLoading

  useEffect(() => {
    setId(window.location.href.split("/")[3]);
    console.log(window.location.href.split("/")[3]);

    if (ctx.cars.length > 0) {
      setCar(
        ctx.cars.find((el) => el._id === window.location.href.split("/")[3])
      );
      setLoading(false); // Set loading to false when cars are available
    } else {
      getCars();
    }
  }, [ctx.cars]); // Added ctx.cars as a dependency

  const getCars = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/cars");
      const data = await res.json();
      ctx.setCars(data.cars);
      ctx.setFilteredArr(data.cars);
      console.log(data.cars);
      console.log(ctx.cars);
      setCar(
        ctx.cars.find((el) => el._id === window.location.href.split("/")[3])
      );
      setLoading(false);
      console.log(ctx);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="z-50">
      {loading ? (
        <div>Loading ... </div>
      ) : (
        car && (
          <div>
            {" "}
            <Link
              href="/"
              className="text-black hover:underline absolute left-3 top-4"
            >
              ← Back
            </Link>{" "}
            <CarDescription car={car} />
          </div>
        )
      )}
    </div>
  );
}

export default DetailsScreen;

import { useContext, useEffect, useState } from "react";
import ItemContext from "@/Context/ItemContext";
import { Oval } from "react-loader-spinner";
import Header from "@/components/header-jaba";
import Main from "@/components/Main-george/Main";
import Footer from "@/components/Footer-anri/footer";

export default function Home() {
  const ctx = useContext(ItemContext);
  const [loading, isLoading] = useState(true);

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

  return (
    <div>
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
        <div>
          <Header />
          <Main carsList={ctx.cars.slice(0, 8)} />
          <Footer />
        </div>
      )}
    </div>
  );
}

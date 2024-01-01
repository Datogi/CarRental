import { createContext, useState } from "react";

export const ItemContext = createContext({
  cars: [],
  setCars: () => {},
  filteredArr: [],
  setFilteredArr: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
  page: 1,
  setPage: () => {},
});
export const ItemContextProvider = (props) => {
  const [cars, setCars] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [page, setPage] = useState(1);

  const changeCars = (cars) => {
    setCars(cars);
  };
  const changeFilterArr = (arr) => {
    setFilteredArr(arr);
  };

  const changeAdmin = (status) => {
    setIsAdmin(status);
  };
  const changePage = (page) => {
    setPage(page);
  };
  return (
    <ItemContext.Provider
      value={{
        cars: cars,
        setCars: changeCars,
        filteredArr: filteredArr,
        setFilteredArr: changeFilterArr,
        isAdmin: isAdmin,
        setIsAdmin: changeAdmin,
        page: page,
        setPage: changePage,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};
export default ItemContext;

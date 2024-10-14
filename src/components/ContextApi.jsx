
import React, { useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";
const ApiData = createContext();

const ContextApi = ({ children }) => {
  let [info, setInfo] = useState([]);
  let [loading, setLoading] = useState(true);

  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setInfo(response.data.products);
      console.log(response.data.products);
      

        setLoading(false);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ApiData.Provider value={{ info, loading }}>{children}</ApiData.Provider>
  );
};

export { ContextApi, ApiData };

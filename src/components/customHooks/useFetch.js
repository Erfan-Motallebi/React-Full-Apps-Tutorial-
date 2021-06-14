/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [items, setPeople] = useState([]);

  const fetchData = async () => {
    const data = await fetch(url);
    const result = await data.json();
    setPeople(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { items };
};

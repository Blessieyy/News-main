import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("general");
  const apikey = 'ba70087defb741e09f34a312de19e24a';

  useEffect(() => {
    // Update API URL to fetch based on category
    axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${apikey}`
    ).then(response => {
      setData(response.data.articles); // Set the news articles for the selected category
    }).catch(error => {
      console.error('Error fetching news:', error);
    });
  }, [category]); // Trigger when category changes

  const changeCategory = (newCategory) => {
    setCategory(newCategory); // Update category
  };

  return (
    <NewsContext.Provider value={{ data, changeCategory }}>
      {props.children}
    </NewsContext.Provider>
  );
};

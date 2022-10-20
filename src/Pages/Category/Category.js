import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const news = useLoaderData();
  const a = 1;
  console.log(news);
  return <div> News in this section : {a}</div>;
};

export default Category;

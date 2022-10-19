import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <h2>Dragon News Home: </h2>
      {news.length}
    </div>
  );
};

export default Home;

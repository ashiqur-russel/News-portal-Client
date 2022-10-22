import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaEye, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { Button } from "react-bootstrap";

const News = () => {
  const news = useLoaderData();
  const { title, total_view, details, image_url, rating, category_id } = news;

  return (
    <Card className="mb-5">
      <Card.Img variant="top" src={image_url}></Card.Img>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          {" "}
          <Button variant="outline-secondary">All News in this category</Button>
        </Link>{" "}
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div>
          <FaStar className="text-warning m-2"></FaStar>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className=" m-2"></FaEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default News;

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
const NewsSummary = ({ news }) => {
  console.log(news);

  const { _id, title, total_view, author, details, image_url, published_date } =
    news;
  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            roundedCircle
            className="me-3"
            src={author?.img}
            style={{ height: "60px" }}
          ></Image>
          <div className="m-0 p-0">
            <p>{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url}></Card.Img>
        <Card.Text>
          {details?.length > 200 ? (
            <p>
              {details.slice(0, 259) + "..."}
              <Link to={`/news/${_id}`}>Read More...</Link>{" "}
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default NewsSummary;

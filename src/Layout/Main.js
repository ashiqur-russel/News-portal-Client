import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="2">
            {" "}
            <LeftSideNav></LeftSideNav>{" "}
          </Col>
          <Col lg="7">
            {" "}
            <Outlet></Outlet>
          </Col>
          <Col lg="3"> 2</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;

import React from "react";
import SideNav from "./SideNav";
import Recomondations from "./Recomondations";
import UserFeed from "./UserFeed";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";


const Main = () => {
  return (
    <Container fluid className="Main m-0 p-0 ">
      <Row>
        <Col xl={3} className=" Sidecol p-0 ">
          {" "}
          <SideNav />{" "}
        </Col>
        <Col xl={6} className=" UserFeedcol p-0">
          {" "}
          <UserFeed />{" "}
        </Col>
        <Col xl={3} className=" Recomondationscol p-0">
          {" "}
          <Recomondations />{" "}
        </Col>
      </Row>
    </Container>
  );
};
export default Main;

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./bootstrap.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Activitycard from "./Activitycard";
import Profile from "./Profile";

function BootstrapDashboard() {
  return (
    <Container fluid className="bigcontainer">
      <Row>
        <Col className="d-none d-md-block profile" md={3} xl={2}>
            <Profile />
        </Col>
        <Col className="dashboard card-group" sm={12} md={9} xl={10}>
        
          <Activitycard />
          <Activitycard />
          <Activitycard />
          <Activitycard />
          
        </Col>
      </Row>
    </Container>
  );
}

export default BootstrapDashboard;

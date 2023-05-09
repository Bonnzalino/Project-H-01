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
import AddBtn from './AddBtn';
import Layout from "./Navbar/Layout";

function BootstrapDashboard() {
  return (
    <Layout>
    <Container fluid className="bigcontainer">
      
      <Row>
      <AddBtn />
        <Col className="d-none d-md-block profile" md={3} xl={2}>
            <Profile />
        </Col>
        <Col className="dashboard card-group" sm={12} md={9} xl={10}>
           <h2 className="dashboardTitle d-sm-block d-md-none">Dashboard</h2>
           
          <Activitycard />
          <Activitycard />
          <Activitycard />
          <Activitycard />
          <Activitycard />
          <Activitycard />
          <Activitycard />
          <Activitycard />
          
        </Col>
      </Row>
    </Container>
    </Layout>
  );
}

export default BootstrapDashboard;

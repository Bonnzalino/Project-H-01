import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Activitycard from "./component/Activitycard";
import Profile from "./component/Profile";
import AddBtn from './component/AddBtn';
import Layout from "./Navbar/Layout";
import DashboardLabel from "./component/DasboardLabel";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'

import TrackBar from "./component/TrackingBar";

function Dashboard() {
  const [run, setRun] = useState(0)
  const [walk, setWalk] = useState(0)
  const [hike, setHike] = useState(0)
  const [bike, setBike] = useState(0)
  const [swim, setSwim] = useState(0)
  return (
    <Layout>
    <Container fluid className="bigcontainer">
      
      <Row>
      <AddBtn />
        <Col className="d-none d-md-block profile" md={3} xl={2}>
            <Profile />
        </Col>
        <Col className="dashboard"  sm={12} md={9} xl={10}>
          <DashboardLabel />
            <TrackBar run={run} walk={walk} bike={bike} hike={hike} swim={swim}/>
            <Activitycard setRun={setRun} setWalk={setWalk} setBike={setBike} setHike={setHike} setSwim={setSwim} />
        </Col>
      </Row>
    </Container>
    </Layout>
  );
}

export default Dashboard;
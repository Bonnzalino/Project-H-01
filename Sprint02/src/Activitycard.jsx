import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Activitycard() {
  return (
    <div>
        <Card className="activitycard">
            <Card.Img
              variant="top"
              className="activitypic"
              src="src/images/elder-bicycling.jpeg"
            />
            <Card.Body>
              <Card.Title>Activity Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                <br />
                <br />
                <i className="fa-solid fa-calendar-days fa-2xl acdetail"></i>
                <br />
                <br />
                <i className="fa-solid fa-stopwatch fa-2xl acdetail"></i>
                <br />
                <br />
                <i className="fa-solid fa-route fa-2xl acdetail"></i>
                <br />
                <br />
                <i className="fa-solid fa-gauge-high fa-2xl acdetail"></i>
                <br />
                <br />
                <br />
              </Card.Text>
              <Button variant="outline-primary" className="addactivitybtn">
              <i class="fa-solid fa-plus fa-2xl"></i>
              </Button>
              <Button variant="outline-success" className="editactivitybtn">
                <i className="fa-solid fa-pen-to-square fa-2xl"></i>
              </Button>
              <Button variant="outline-danger" className="deleteactivitybtn">
                <i className="fa-solid fa-trash fa-2xl"></i>
              </Button>
            </Card.Body>
          </Card>
    </div>
  )
}

export default Activitycard



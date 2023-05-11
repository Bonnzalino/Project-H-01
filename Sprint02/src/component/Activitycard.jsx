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
                the bulk of the card's content.  {/* <<<<<<<<<<<<<<<Add description here<<<<<<<<<<<<<<< */}
                <br />
                <br />
                <i className="fa-solid fa-calendar-days fa-2xl acdetail"></i>
                &nbsp; &nbsp;
                Start 19/09/23 {/* <<<<<<<<<<<<<<<Add date here<<<<<<<<<<<<<<< */}
                <br />
                <br />
                <i className="fa-solid fa-flag-checkered fa-2xl acdetail"></i>
                &nbsp; &nbsp;
                End 19/09/23 {/* <<<<<<<<<<<<<<<Add date here<<<<<<<<<<<<<<< */}
                <br />
                <br />
                <i className="fa-solid fa-stopwatch fa-2xl acdetail"></i>
                &nbsp; &nbsp;
                12:02:02 {/* <<<<<<<<<<<<<<<Add duration here<<<<<<<<<<<<<<< */}
                <br />
                <br />
                <i className="fa-solid fa-route fa-2xl acdetail"></i>
                &nbsp; &nbsp;
                12.02km {/* <<<<<<<<<<<<<<<Add distance here<<<<<<<<<<<<<<< */}
                <br />
                <br />
          
                <br />
              </Card.Text>
              <a href='/EditActivity'>
                <Button variant="outline-success" className="editactivitybtn">
                  <i className="fa-solid fa-pen-to-square fa-2xl" />
                </Button>
              </a>
              <Button variant="outline-danger" className="deleteactivitybtn">
                <i className="fa-solid fa-trash fa-2xl"></i>
              </Button>
            </Card.Body>
          </Card>
    </div>
  )
}

export default Activitycard



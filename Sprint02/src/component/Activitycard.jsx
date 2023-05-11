import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from 'react';

const mockCard = [
  {
    type: 'Running',
    description: 'Running in the morning',
    start: '19-04-23:19.01',
    end: '19-04-23:19.11',
    duration: 6000,
    distance: 2000
  },
  {
    type: 'Walking',
    description: 'Walking in the morning',
    start: '19-04-23:19.01',
    end: '19-04-23:19.11',
    duration: 6000,
    distance: 2000
  },
  {
    type: 'Biking',
    description: 'Biking in the morning',
    start: '19-04-23:19.01',
    end: '19-04-23:19.11',
    duration: 6000,
    distance: 2000
  },
  {
    type: 'Hiking',
    description: 'Hiking in the morning',
    start: '19-04-23:19.01',
    end: '19-04-23:19.11',
    duration: 6000,
    distance: 2000
  },
  {
    type: 'Swimming',
    description: 'Swimming in the morning',
    start: '19-04-23:19.01',
    end: '19-04-23:19.11',
    duration: 6000,
    distance: 2000
  }
]

function Activitycard() {

  const [card, setCard] = useState(mockCard)

  return (
     
    <div>
      {card.map((cardd) => (
        <Card className="activitycard">
            <Card.Img
              variant="top"
              className="activitypic"
              src="src/images/elder-bicycling.jpeg"
            />
            <Card.Body>
              <Card.Title className='cardtitle'>{cardd.type}</Card.Title>  
              <Card.Text>
                {cardd.description} {/* <<<<<<<<<<<<<<<Add description here<<<<<<<<<<<<<<< */}
                <br />
                <br />
                <i className="fa-solid fa-calendar-days fa-2xl acdetail"></i>
                &nbsp; &nbsp;
                Start {cardd.start} {/* <<<<<<<<<<<<<<<Add start here<<<<<<<<<<<<<<< */}
                <br />
                <br />
                <i className="fa-solid fa-flag-checkered fa-2xl acdetail"></i>
                &nbsp; &nbsp;
                End {cardd.end} {/* <<<<<<<<<<<<<<<Add end here<<<<<<<<<<<<<<< */}
                <br />
                <br />
                <i className="fa-solid fa-stopwatch fa-2xl acdetail"></i>
                &nbsp; &nbsp;
                {cardd.duration} {/* <<<<<<<<<<<<<<<Add duration here<<<<<<<<<<<<<<< */}
                <br />
                <br />
                <i className="fa-solid fa-route fa-2xl acdetail"></i>
                &nbsp; &nbsp;
                {cardd.distance} {/* <<<<<<<<<<<<<<<Add distance here<<<<<<<<<<<<<<< */}
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
          ))}
          </div>
     
  )
}

export default Activitycard



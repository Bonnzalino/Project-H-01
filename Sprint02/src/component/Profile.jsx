import React from 'react'
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function Profile() {
  return (
    <div> 
        <Card className="profilecard">
            <Card.Img
            variant="top"
            src="src/images/man-profile-cartoon.avif"
            className="profilepic"
            />
            <Card.Body>
            <Card.Title>FullName SurName</Card.Title>
            <Card.Text>
            Height: cm <br />
            Weight: kg <br />
            Age:
            </Card.Text>
            <a href='/EditProfile'><Button variant="secondary" className="editbtn">{" "}
            <i className="fa-solid fa-pen-to-square" /> Edit Profile
            </Button></a>
            <a href='/AddActivity'><Button variant="secondary" className="addbtn">{" "}
            <i className="fa-regular fa-square-plus" />  Add Activity
            </Button></a>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Profile
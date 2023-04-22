import React, {useState, useEffect} from "react";

import "./AddActivity.css";
import Navbar from "./Navbar/Navbar";

const Form = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [data, setData] = useState({activityName:"",distance:"",activityDetail:"",startTime:"", finishTime:"",file:""})
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({...data,[name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    
    setFormErrors(validate(data))
    setIsSubmit(true)
  }
  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(data)
  }
},[formErrors]);

  const validate = (data) => {
    const errors ={}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!data.activityName){
      errors.activityName = "Activity name is required!";
    }
    if (!data.activityDetail){
      errors.activityDetail = "Activity detail is required!";
    }
    if (!data.distance){
      errors.distance = "Distance is required!";
    }
    if (!data.startTime){
      errors.startTime = "Start time is required!";
    }
    if (!data.finishTime){
      errors.finishTime = "Finish time is required!";
    }
    return errors;
  }
  return (
    <>
    <Navbar />
        <div className="add-activity-container">
        <h1>Add Activity</h1>
        <h4>Select an activity</h4>

      <div className="activity-imgs">
        <button onClick={() => setSelectedActivity("Biking")}><img
          src="./icons/bicycle.png"
          alt="biking"
        />
        </button>
        <button onClick={() => setSelectedActivity("Hiking")}>
        <img
          src="./icons/hiking.png"
          alt="hiking"
        />
        </button>
        <button onClick={() => setSelectedActivity("Running")}>
        <img
          src="./icons/running.png"
          alt="running"
        /></button>
        <button onClick={() => setSelectedActivity("Walking")}>
        <img
          src="./icons/walk.png"
          alt="walking"
        />
        </button>
        <button onClick={() => setSelectedActivity("Swimming")}>
        <img
          src="./icons/swimming.png"
          alt="swimming"
        />
        </button>
      </div>
      <div id="error">
      <form action="/">
        <div>
          <label>{selectedActivity}</label><br/>
        </div>
        <p>{formErrors.activityDetail}</p>
        <div>
          <label>Activity detail</label><br/>
          <input type="text" name="activityDetail" value={data.activityDetail} onChange={handleChange}/>
        </div>
        <p>{formErrors.distance}</p>
        <div>
          <label>Distance (km)</label><br/>
          <input type="number" name="distance" value={data.distance} onChange={handleChange}/>
        </div>
        <p>{formErrors.startTime}</p>
        <div>
          <label>Start time</label><br/>
          <input type="datetime-local" name="startTime" value={data.startTime} onChange={handleChange}/>
        </div>
        <p>{formErrors.finishTime}</p>
        <div>
          <label>Finish time</label><br/>
          <input type="datetime-local" name="finishTime" value={data.finishTime} onChange={handleChange}/>
        </div>
        <div id="add-file">
          <label >Attach an image</label><br/>
          <input type="file" name="file" value={data.file} onChange={handleChange}/>
        </div>
        <button className="addNewActivity-btn" type="submit" onSubmit={handleSubmit}> Add New Activity </button>
      </form>
      </div>
      </div>
      </>
  );
};
export default Form;

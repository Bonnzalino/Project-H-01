import React, { useState } from 'react'
import Layout from './Navbar/Layout'
import './EditProfile.css'
// import runicon from './images/runicon.png'
// import goalicon from './images/goalicon.png'
import myPhoto from './images/myPhoto.jpg'

function EditProfile() {
  // const test = 50
  const username = 'Hello'
  const [input, setInput] = useState({})
  const [bmi, setBmi] = useState('')
  const [db, setDb] = useState([])
  const [adviseWeights, setAdviseWeights] = useState('')

  function handlerChange({target}){
    const {name,value} = target
    setInput(prev=>({...prev, [name]:value}))
  }

  function checkInput(){
    let status = true
    for (const data in input){
      if(input[data] === ''){
        status = false
        break
      }
    }
    return status
  }

  function calAdviseWeight(height){
    const adviseWeight = 20*((height/100)**2) 
    setAdviseWeights(adviseWeight.toFixed(0))
  }
  
  function handlerFocus(){
    if(Object.keys(input).length===2 && checkInput()){
      const weight = input.weight
      const height = input.height
      const BMI = weight/(height/100)**2
      setBmi(BMI.toFixed(2))
      calAdviseWeight(height)
    }
  }

  function handlerSubmit(e){
    e.preventDefault()
    const idLatest = db.length===0?1:db[db.length-1].id
    setDb(prev => [...prev,{id:idLatest+1,...input}])
    setInput({})
    console.log(db)
  }


  return (
    <Layout>
      <div className='body-formpage'>
        <div className='form-box'>
          {/* <input type='file' /> */}
          <img className='user-photo' src={myPhoto} style={{width:'150px'}} />
          <h2>{username}</h2>
           <input className='height' 
            name='height' 
            placeholder='height in Cm'
            value={input.height || ''}
            onChange={handlerChange}
            onBlur={handlerFocus}
          />
          <input className='weight'
            name='weight'  
            placeholder='weight in Kg'
            value={input.weight || ''}
            onChange={handlerChange}
            onBlur={handlerFocus}
          />
         
          <p className='BMI'>Your BMI<br/><b>{bmi}</b></p>
          <p>Your advise weight is {adviseWeights} Kg</p>
          {/* <input className='setGoal' /> */}
          {/* <div className='goal-status'>
            <span className='runner-box'>
              <div >
                <img className='runner' src={runicon} style={{}} />
              </div>
              <div className='runner-status'></div>
            </span>
            <span>
              <img className='goal' src={goalicon} />
            </span>
          </div>
          <div className='start-weight'>start {console.log(db)}</div> */}
          <button onClick={handlerSubmit}>Save</button>
        </div>
      </div>
    </Layout>
  )
}

export default EditProfile
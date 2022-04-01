import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "./App.css"
import {ReactComponent as EmailIcon} from "./svgs/email.svg"
import {ReactComponent as PhoneIcon} from "./svgs/phone.svg"
import {ReactComponent as MapIcon} from "./svgs/map.svg"


const Assets = ({random,handleButton}) => {
  return (
    <div className='random'>
<div class="card bg-info" style={{width: "20rem",boxShadow:"10px 10px 10px gray"}}>
     <Stack direction="row" spacing={5}>
      <Avatar alt="Remy Sharp" src={`${random.picture.large}`}  sx={{ width: 76, height: 76 , margin:1}}/>
   <p style={{marginTop:40}}>{random.name.title} {random.name.first} {random.name.last}</p>
    </Stack>

  {/* <img src={`${random.picture.large}`} class="img-circle" alt="Cinque Terre"/> */}
  <div class="card-body">

    <p > <EmailIcon></EmailIcon>  {random.email}</p>
    <p > <PhoneIcon></PhoneIcon> {random.phone}</p>
    <p class="card-text"> <MapIcon></MapIcon> {random.location.city}</p>
    <p class="card-text">Age {random.registered.age}</p>
    <p class="card-text">Date:{random.registered.date}</p>
    

   
  </div>
 
</div>


<button type="button" class="btn btn-primary mt-3" onClick={handleButton}>Random User</button>

    </div>
  )
}

export default Assets

import React, {useEffect, useState} from "react";
import axios from 'axios';
import Assets from "./Assets";
import './App.css';
import Links from "./Links";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  //     okuma     yazma

  const[button,setButton] = useState(true);



  const [users, setUsers] = useState([])

  useEffect(()=>{
   
    fetchData()


  }, [])

  const fetchData =()=>{
    axios.get('https://randomuser.me/api/').then((res)=>{
      setUsers(res.data.results)
 })
  }

  const handleButton =()=>{
  
    fetchData()
  }
  

  return (
    <div className="App" style={{display:"flex"}}>
      
     

      {users.map((random) =>
      
      <>
   
        <Assets random={random} key={random.id.value} handleButton={handleButton}>
  
       </Assets>
        </>
      )}

<Router>
      <div>
    

        
        <Switch>
          <Route path="/assets" component={Assets}>
           
          </Route>
        
        </Switch>
      </div>
    </Router>


    </div>
  );
}
export default App;
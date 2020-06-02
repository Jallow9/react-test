import React , { useState } from "react";
import "./App.css";
import User from "./Users"


function Apps(){
  const [ users, setUsers ] = useState([]);
  // const [ loading, setLoading ] = useState(false);

  const getUsers = () => {
    fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => {
      setUsers(data.results[0])
      // setLoading(true);
    })
    .catch(error => console.error(error.message));
  }

  // if(loading === false) {
  //     return <h5>Loading...</h5>
  // }

  function Button(){
      return <button style={{margin: "20px"}} onClick={getUsers}>Get User!</button>
  } 
  return(
      <div>
          <Button getUsers={getUsers} />
          {
              users.name ? <User users={users} /> : null
          }
      </div>
  )
}

export default Apps
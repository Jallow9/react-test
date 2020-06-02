import React from "react"

function Users(props) {
    const details = props.users;
  
    return (
        <div>
            <img style={{margin: "10px"}} src={details.picture.large} alt=""/>
            <h2>{details.name.first} {details.name.last} </h2>
            <p>{details.email} </p>
            <p>{details.phone} </p>
            <p>{details.location.city} </p>
            <p>{details.location.country}</p>
        </div>
    )
  }

export default Users;
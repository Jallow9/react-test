import React, {useState} from 'react'

function Users(props) {
    const details = props.user;

    return (
        <div>
            <img src={details.picture.large} alt=""/>
            <h2>{details.name.first} {details.name.last} </h2>
            <p>{details.email} </p>
            <p>{details.phone} </p>
            <p>{details.location.city} </p>
            <p>{details.location.country}</p>
        </div>
    )
  }

    function UsersName(props) {
        const details = props.user;

        return (
            <div>
                <li onClick={()=>props.HandleClick(props.index)}>{details.name.first} {details.name.last} </li>
            </div>
        )
    }

  function Button(props){
    return <button onClick={props.getUsers}>Get User!</button>
} 

function ReactTest(){
    const [ users, setUsers ] = useState([]);
    const [user, setUser]=useState(null);
    
    const getUsers = () => {
        fetch("https://randomuser.me/api/?results=5")
        .then(response => response.json())
        .then(data => {
            setUsers(data.results)
            setUser(data.results[0])
            console.log(users)
        })
        .catch(error => console.error(error.message));
    }

    const HandleClick=(id)=>{
        setUser(users[id])
    }
    
    return(
        <div>
            <Button getUsers={getUsers} />
            <ul>
                {
                    users.map( (user, index) =>
                        <UsersName user={user} key={index} index={index} HandleClick={HandleClick}/>
                    ) 
                }
            </ul>
            { user!== null ? <Users user={user}/> : ''}
        </div>
    )
}

export default ReactTest
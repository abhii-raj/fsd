import React from 'react'
import { useState , useEffect } from 'react'
import axios from "axios"
import { use } from 'react'
import "./App.css" 


function App() {
  const [ users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").
    then(
      response =>{
        setUsers(response.data);
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    )
  } , [users]);
  return (
    <div className='app'>{
      users.length ==0?(<h1>Loading....</h1>):
      users.map((user) => (
        <div key = {users.id} className='card'>
        <h1>{user.name}</h1>
        <h2>{user.username}</h2>
        <p>{user.email}</p>
        
        </div>
      ))
      };</div>
  )
}

export default App
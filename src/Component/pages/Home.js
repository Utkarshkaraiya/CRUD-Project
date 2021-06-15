import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"
export const Home = () => {
const [users, setusers] = useState([]);

useEffect(() => {
    loadusers()
    
}, [])
const loadusers= async()=>{
    const result= await axios.get("http://localhost:3003/users");
setusers(result.data.reverse());
}
const deleteUser= async id=>{
await axios.delete(`http://localhost:3003/users/${id}`)
loadusers();
}
    return (
        <div className="container">
          <div className="py-4" >
             <h1>Home Page</h1>
             <table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Phone number</th>
      <th scope="col">Email</th>
      <th scope="col">Hobbies</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
           <tr>
               <th scope="row">{index +1} </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>                
                       <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Update</Link> 
                      
                   <Link class="btn btn-primary" onClick={()=>deleteUser(user.id)}>Delete</Link> 

                </td>

              
           </tr> 
        ))
    }
  </tbody>
</table>
              </div>  
        </div>
    )
}

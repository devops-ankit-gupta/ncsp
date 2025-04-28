
import React, { useState,useEffect } from "react";

import axios from 'axios';
const GetAllUserDetails=()=>{

 

const [user,setUser]=useState([]);
const init=()=>{

  console.log('first');
  axios.get('http://localhost:8080/api/User/all')
.then(response=>{
    console.log('Printing  data', response.data);
    setUser(response.data);
})
.catch(error => {
    console.log('Something went wrong', error);
  }) 

}

useEffect(() => {

  
    init();
   
  }, []);




    return(
    
    <div className="container">
    <h3>Register User List</h3>
    <hr/>
    <div>
    
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
          <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>mobile number</th>
           
          </tr>
        </thead>
        <tbody>
        {
          user.map(user => (
            <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.mobileNumber}</td>
                      
           
          </tr>
          ))
        }
        </tbody>
      </table>
      
    </div>
  </div>
);
}
export default GetAllUserDetails;

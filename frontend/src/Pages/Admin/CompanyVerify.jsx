import React, { useState,useEffect } from "react";

import axios from 'axios';


  
  
const CompanyVerify=()=>{

 

  const [company,setCompany]=useState([]);
  const init=()=>{
  
    console.log('first');
    axios.get('http://localhost:8080/api/Company/getAll')
  .then(response=>{
      console.log('Printing  data', response.data);
      setCompany(response.data);
  })
  .catch(error => {
      console.log('Something went wrong', error);
    }) 
  
  }


  const editcompany=(e,s)=>{
 
console.log(e,s);


axios.get(`http://localhost:8080/api/Company/approve/${e}/${s}`)
.then(response=>{
    console.log('Printing  data', response.data);
   

    window.location.replace("/Admin/dashboard/company-verify");
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
      <h3>Company Details</h3>
      <hr/>
      <div>
  <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Company Name</th>
              <th>Company Mission</th>
              <th>Company Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          
  
  {
        company.map(company => (
           
       <tr key={company.id}>
  <td>{company.companyName}</td>
  <td>{company.companyMission}</td>
  <td>{company.email}</td>
  <td>{company.companyStatus}</td>

   <td>
                                                
     <button style={{marginLeft: "10px"}} button onClick={(e) => editcompany(company.id,company.companyStatus)}className="btn btn-success">Change Status</button>
                                                
      </td>           
  
  </tr>
  
        
  
         
       ))  
         
        }  
  
                </tbody>
        </table>
        
      </div>
    </div>    
    
  );
  }
  export default CompanyVerify;
   
 
  
  
     
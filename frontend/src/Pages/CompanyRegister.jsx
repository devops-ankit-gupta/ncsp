import React,{ useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import UserService from "../services/UserService";
import axios from 'axios';

const CompanyRegister = () => {
    const[companyName, setCompanyName] = useState('');
    const[password, setPassword] = useState('');
    const[companyMission, setCompanyMission] = useState('');
    const[email, setEmail] = useState('');
   
    
    
    
    const {id} = useParams();

    const saveUser = (e) => {
        e.preventDefault();
       
        const company = {companyName, password, companyMission,email,id};
        
         
            //create
            axios.post('http://localhost:8080/api/Company/added',company)
            .then(response => {
                console.log("Company added successfully", response.data);
                alert("data added successfully");
                window.location.replace("/company-login");
            })
            .catch(error => {
                console.log('something went wroing', error);
               window.location.replace("/");

            })
        
    }

   
    return(
        <section className="col-lg-9 col-md-10 mx-auto d-block pt-5">
        <div className="container">
            <div className="row">
                <div className="col-sm d-sm-block">
                <div><h3 className="fw-bold">NCSP</h3>
                <h5 className="px-5">You are just few clicks away from Creating your National Career Service Portal Account</h5>
                </div>
                <img src="./Assets/Images/HomePage/Register.png" alt="" className="img-responsive img-fluid  " />
                </div>
                <div className="col-sm ">
                <form>                       
                        <div><h2 className="fw-bold pb-3">Register</h2></div>
                        <div className=""><h5 className="fw-bold">Manage Your Account Efficiently</h5></div>
                        <div className=""><h6>Lets get you all set up so you can verify personal account and begin setting up your profile</h6></div>
                        <div className="row g-3 pt-3"></div>
                        <div className="col-sm-6">                        
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control"  placeholder=" " type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/><label className="label" required>Company Name</label>
                        </div>                        
                        </div>
                        <div className="col-sm-6">
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control"  placeholder=" " type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><label className="label">Password</label>
                        </div> 
                        </div>

                        <div className="col-sm-6">
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control"  placeholder=" " type="text"  value={companyMission} onChange={(e)=>setCompanyMission(e.target.value)} /><label className="label">Company Mission</label>
                        </div> 
                        </div>
                        <div className="col-sm-6">
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control"  placeholder=" " type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} /><label className="label">email</label>
                        </div> 
                        </div>
                                             

                        


                      

                        
                                             

                       

                      
                    <div className="d-grid gap-2 p-3">
                           <button className="btn btn-success rounded-pill" type="button"  onClick={(e) => saveUser(e)}>Create Account</button>                  
                        </div>                                                              
                     </form>           
                </div>                
            </div>
        </div>
        </section>
    )
}

export default CompanyRegister;
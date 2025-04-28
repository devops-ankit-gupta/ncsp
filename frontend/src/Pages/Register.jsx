import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [currentAddress, setCurrentAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { id } = useParams();

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
        setShowConfirmPassword(!showConfirmPassword);
    };

    const validateInputs = () => {
        if (!firstName.trim()) {
            alert('First Name is required.');
            return false;
        }
        if (!lastName.trim()) {
            alert('Last Name is required.');
            return false;
        }
        const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid Email.');
            return false;
        }
        const mobilePattern = /^[6-9]\d{9}$/;
        if (!mobilePattern.test(mobileNumber)) {
            alert('Please enter a valid 10-digit Mobile Number starting with 6/7/8/9.');
            return false;
        }
        if (!currentAddress.trim()) {
            alert('Current Address is required.');
            return false;
        }
        if (!state.trim()) {
            alert('State is required.');
            return false;
        }
        if (!city.trim()) {
            alert('City is required.');
            return false;
        }
        const pincodePattern = /^[1-9][0-9]{5}$/;
        if (!pincodePattern.test(pincode)) {
            alert('Please enter a valid 6-digit Pincode.');
            return false;
        }
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordPattern.test(password)) {
            alert('Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number.');
            return false;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return false;
        }
        return true;
    };

    const saveUser = async (e) => {
        e.preventDefault();

        if (!validateInputs()) {
            return;
        }

        const role = "APPLICANT";
        const user = { firstName, lastName, email, password, mobileNumber, role, id };

        try {
            const response = await axios.post('http://localhost:8080/api/User/add', user);
            alert('Registration Successful');
            console.log('User added successfully', response.data);
            window.location.replace("/Login");
        } catch (error) {
            alert('Registration failed. Please try again later.');
            console.error('Something went wrong', error);
            window.location.replace("/");
        }
    };

    return (
        <section className="col-lg-9 col-md-10 mx-auto d-block pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm d-sm-block">
                        <h3 className="fw-bold">NCSP</h3>
                        <h5 className="px-5">You are just few clicks away from Creating your National Career Service Portal Account</h5>
                        <img src="./Assets/Images/HomePage/Register.png" alt="" className="img-responsive img-fluid" />
                    </div>
                    <div className="col-sm">
                        <form onSubmit={saveUser}>
                            <h2 className="fw-bold pb-3">Register</h2>
                            <h5 className="fw-bold">Manage Your Account Efficiently</h5>
                            <h6>Let's get you all set up so you can verify personal account and begin setting up your profile</h6>
                            <div className="row g-3 pt-3">
                                {/* First Name */}
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                </div>
                                {/* Last Name */}
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                </div>
                                {/* Email */}
                                <div className="col-sm-6">
                                    <input className="form-control" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                {/* Mobile Number */}
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
                                </div>
                                {/* Address */}
                                <div className="col-12">
                                    <input className="form-control" type="text" placeholder="Current Address" value={currentAddress} onChange={(e) => setCurrentAddress(e.target.value)} required />
                                </div>
                                {/* State */}
                                <div className="col-md-5">
                                    <select className="form-select" value={state} onChange={(e) => setState(e.target.value)} required>
                                        <option value="">Select State</option>
                                        {/* State Options */}
                                        <option value=""> Select State</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        
                                        {/* You can add other states similarly */}
                                    </select>
                                </div>
                                {/* City */}
                                <div className="col-md-4">
                                    <input className="form-control" type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
                                </div>
                                {/* Pincode */}
                                <div className="col-md-3">
                                    <input className="form-control" type="text" placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                                </div>
                                {/* Password */}
                                <div className="col-sm-6">
                                    <input className="form-control" type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                {/* Confirm Password */}
                                <div className="col-sm-6">
                                    <input className="form-control" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                </div>
                                {/* Show/Hide Password */}
                                <div className="col-12">
                                    <input type="checkbox" id="showPasswordCheckbox" onChange={handleCheckboxChange} />
                                    <label htmlFor="showPasswordCheckbox"> &nbsp; Show/Hide Password</label>
                                </div>
                            </div>
                            <div className="d-grid gap-2 p-3">
                                <button className="btn btn-success rounded-pill" type="submit">Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;

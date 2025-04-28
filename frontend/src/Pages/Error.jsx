import React, { useState } from "react";

export default function Error() {
  const [email, setEmail] = useState("");

  const handleStayTuned = () => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert("Please enter your email address!");
      setEmail(""); // clear input
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      setEmail(""); // clear input
    } else {
      alert(`Thank you! We will notify you at ${email}`);
      setEmail(""); // clear input after success
    }
  };

  return (
    <>
      <div className='px-4 pt-5 pb-5 text-center'>
        <h1 className='display-5 fw-bold'>
          We Are Currently Working <br /> On Our New Website
        </h1>
        <div className='col-lg-6 mx-auto'>
          <p className='lead mb-4'>
            Thank You For Being patient. We are doing Some Work on the Site and
            will be back Soon
          </p>
          <div className='input-group'>
            <input
              type='text'
              id='form3Example2'
              className='form-control'
              placeholder='Your Email Id'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className='btn btn-success' type='button' onClick={handleStayTuned}>
              Stay Tuned !!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";

function Header() {



  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand fw-bold mb-2 text-success' href='/'>
            <img
              src='/Assets/Images/HomePage/Logo2.png'
              alt='logo'
              width='30'
              height='30'
              className='d-inline-block align-text-top'
            />
            &nbsp;&nbsp; National Career Service Portal
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse flex-row-reverse'
            id='navbarNav'
          >
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

import React from "react";

export default function Jumbotran() {
  return (
    <>
      <div className='container pt-3'>
        <div className='row featurette'>
          <div className='col-md-7'>
            <h1 className='animated slideInLeft featurette-heading fw-bold'>
              Find The Job <br />
              That Fits Your Life.
              <br />
            </h1>
            <p
              className='animated fadeInUp lead'
              style={{ animationDelay: "0.8s" }}
            >
              Are you Searching for a Job? Here is the chance to find your
              Dream Job. Rojgar : NCSP is one of the top job sites in India,
              with over 1000 companies listing jobs online. Our only mission is
              to help you get your Dream job.
            </p>

            <form
              className='animated fadeInUp'
              style={{ animationDelay: "1.8s" }}
            >
              <div className='row mb-4'>
                <div className='col'>
                  <div className='form-outline'>
                    <input
                      type='text'
                      id='form3Example1'
                      className='form-control'
                      placeholder='Job Title or Company Name'
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className='form-outline'>
                    <input
                      type='text'
                      id='form3Example2'
                      className='form-control'
                      placeholder='Locations'
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className='form-outline'>
                    <button
                      className='btn btn-success'
                      id='button-addon2'
                      type='button'
                    >
                      <i className='fa-solid fa-magnifying-glass'></i>
                    </button>
                    {/* <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button> */}
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className='col-md-5'>
            <img
              src='/Assets/Images/HomePage/intro.png'
              alt='intro-img'
              className='img-responsive img-fluid'
            />
          </div>
        </div>
      </div>
    </>
  );
}

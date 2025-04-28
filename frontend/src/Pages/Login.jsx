import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'; // Optional, for beautiful alerts (npm install react-toastify)
import 'react-toastify/dist/ReactToastify.css';

export default function PractiseLogin() { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();
    const data = { email, password };
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8080/api/User/auth', data);
      console.log(response.data);

      if (response.data && response.data.role) {
        window.localStorage.setItem('user', JSON.stringify(response.data.firstName));
        window.localStorage.setItem('email', JSON.stringify(response.data.email));

        if (response.data.role === "APPLICANT") {
          toast.success("User Logged In Successfully!");
          setTimeout(() => {
            window.location.replace("/user/dashboard");
          }, 1500);
        } else if (response.data.role === "ADMIN") {
          toast.success("ADMIN Logged In Successfully!");
          setTimeout(() => {
            window.location.replace("/Admin/dashboard");
          }, 1500);
        } else {
          toast.error("Unknown role. Please contact support.");
        }
      } else {
        toast.error("Invalid credentials! Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="col-lg-7 col-md-10 mx-auto d-block pt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm d-sm-block">
              <img src="./Assets/Images/HomePage/LoginPage.png" alt="Login" className="img-responsive img-fluid" />
            </div>

            <div className="col-sm">
              <form onSubmit={handleLogin}>
                <div className="float-end pb-5">
                  New User? <Link to="/Register">SignUP</Link>
                </div>

                <div className="pb-4 pt-4">
                  <h2>Welcome Back</h2>
                  <h5>Login to Continue</h5>
                </div>

                <div className="material-textfield mb-3">
                  <input
                    className="input form-control"
                    type="email"
                    required
                    placeholder=""
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                  />
                  <label className="label">UserId or Email</label>
                </div>

                <div className="material-textfield mb-3">
                  <input
                    className="input form-control"
                    type="password"
                    required
                    placeholder=""
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                  />
                  <label className="label">Password</label>
                </div>

                <div className="m-2">
                  <Link to="/ChangePassword">Forgot Password</Link>
                </div>

                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={!email || !password || loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Logging In...
                      </>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <p>Sign in with</p>
                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-outline-success rounded-circle ms-2 me-2">
                      <i className="fa-brands fa-google"></i>
                    </button>
                    <button type="button" className="btn btn-outline-success rounded-circle ms-2 me-2">
                      <i className="fa-brands fa-facebook-f"></i>
                    </button>
                    <button type="button" className="btn btn-outline-success rounded-circle ms-2 me-2">
                      <i className="fa-brands fa-twitter"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

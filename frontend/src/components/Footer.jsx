// 1. Top Imports
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
  // 2. State Variables
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // 3. handleSubscribe Function
  const handleSubscribe = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    } else {
      setError("");
    }

    try {
      const response = await fetch("http://localhost:8080/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Subscribed successfully!");
        setEmail("");
      } else if (response.status === 409) {
        toast.error("This email is already subscribed!");
      } else {
        toast.error("Subscription failed. Please try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Server error. Please try later!");
    }
  };

  

  // 4. Footer JSX
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="pt-1">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              {/* Portal Section */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i> National Career Service Portal
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Rojgar: National Career Service Portal is a one-stop solution
                  providing a wide array of employment and career-related
                  services to the citizens of India.
                </p>
              </div>

              {/* Useful Links */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
                <p><a href="/blog" className="text-reset">Blog</a></p>
                <p><a href="/register" className="text-reset">Register</a></p>
                <p><a href="/jobs" className="text-reset">Search Jobs</a></p>
              </div>

              {/* Newsletter Section */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Subscribe to Newsletter</h6>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={handleSubscribe}
                    >
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                  {error && (
                    <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>
                  )}
                </form>

                {/* Social Media */}
                <div className="mt-3">
                  <a href="https://www.facebook.com/ankit.gupta.mzp1" className="me-4 text-reset">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com/ankitmzp1gupta" className="me-4 text-reset">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="mailto:ankitguptamzp1@gmail.com" className="me-4 text-reset">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="https://www.instagram.com/_devil_tom_/" className="me-4 text-reset">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/devops-ankit-gupta" className="me-4 text-reset">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/devops-ankit-gupta" className="me-4 text-reset">
                    <i className="fab fa-github"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Footer Bottom */}
        <div className="text-center p-2 bg-secondary text-white">
          Designed with ❤ by Ankit Kumar Gupta
        </div>
      </footer>

      {/* Toast Container for Notifications */}
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default Footer;

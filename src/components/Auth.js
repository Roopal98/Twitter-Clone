
import React, { useState } from "react"
import { Col,Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import background from '/Users/khatana/Documents/Twitter/Twitter-Clone/src/twitter.png'
import './Auth.css'

const Auth = () => {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState({ value: "" }); 

    const handleInputChange = (e) => {
        setUserData(() => {
          return {
            ...userData,
            [e.target.name]: e.target.value,
          };
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        var validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        console.log(userData)
        if (userData.username === "" || userData.password === "") {
          setErrorMessage(() => ({
            value: "Empty username/password field",
          }))
        } else if (userData.password.match(validPassword)) {
        
          console.log('success')
          localStorage.setItem("isAuthenticated", "true");
          window.location.pathname = "/home";
        } else {
    
          setErrorMessage(() => ({ value: "Invalid username/password" }));
        }
      };

  return (
      <Row>
        <Col g={0} lg={7} md={6} className='col-item'>
          <div className='main-x'>
               <img src={background} alt="Logo" />
          </div>
        </Col>

      <Col lg={5}  md={6} id='col-item-2' className="d-flex align-items-center justify-content-center col-item">
       <form className="Auth-form">
         <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
           <div className="form-group mt-3">
            <label>Email address</label>
             <input
              type="email"
              name="email"
              onChange={(e) => handleInputChange(e)}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => handleInputChange(e)}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
        {errorMessage.value && (
          <p className="text-danger"> {errorMessage.value} </p>
        )}
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
      </Col>
      </Row>

    // <div className="Auth-form-container">
    //   <Row>
    //   <Col className="d-flex align-items-center justify-content-center">
    //   <div className="login-bg">
    //     <div>Follow your interests.</div>
    //     <div>Hear what people are talking about.</div>
    //     <div>Join the conversation.</div>

    //   </div>
    //   </Col>
    //   <Col className="d-flex align-items-center justify-content-center">
    //   <form className="Auth-form">
    //     <div className="Auth-form-content">
    //       <h3 className="Auth-form-title">Sign In</h3>
    //       <div className="form-group mt-3">
    //         <label>Email address</label>
    //         <input
    //           type="email"
    //           name="email"
    //           onChange={(e) => handleInputChange(e)}
    //           className="form-control mt-1"
    //           placeholder="Enter email"
    //         />
    //       </div>
    //       <div className="form-group mt-3">
    //         <label>Password</label>
    //         <input
    //           type="password"
    //           name="password"
    //           onChange={(e) => handleInputChange(e)}
    //           className="form-control mt-1"
    //           placeholder="Enter password"
    //         />
    //       </div>
    //       <div className="d-grid gap-2 mt-3">
    //         <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
    //           Submit
    //         </button>
    //     {errorMessage.value && (
    //       <p className="text-danger"> {errorMessage.value} </p>
    //     )}
    //       </div>
    //       {/* <p className="forgot-password text-right mt-2">
    //         Forgot <a href="#">password?</a>
    //       </p> */}
    //     </div>
    //   </form>
    //   </Col>
    //   </Row>
      
      
    // </div>
  )
}
export default Auth;
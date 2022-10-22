
import React, { useState } from "react"

const Auth = () => {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState({ value: "" }); 

    const handleInputChange = (e) => {
        setUserData((prevState) => {
          return {
            ...prevState,
            [e.target.name]: e.target.value,
          };
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        let validPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$")
        console.log(userData.password)
        //if username or password field is empty, return error message
        if (userData.username === "" || userData.password === "") {
          setErrorMessage(() => ({
            value: "Empty username/password field",
          }))
        } else if (userData.password=='Roopal') {
          //Signin Success
          console.log('success')
          localStorage.setItem("isAuthenticated", "true");
          window.location.pathname = "/home";
        } else {
          //If credentials entered is invalid
          setErrorMessage(() => ({ value: "Invalid username/password" }));
        }
      };

  return (
    <div className="Auth-form-container">
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
    </div>
  )
}
export default Auth;
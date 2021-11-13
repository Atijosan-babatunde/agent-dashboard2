import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./style.css";


export function NewAccount(){
   const history = useHistory();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://api.goflex.ng/api/user/", loginData)
    .then((res) => {
      window.localStorage.setItem("token", res.data);
      history.push("/dashboard");
  }).catch((error) => {
    console.log(error)
  })
  };
    return(
         <div className="mainn" style={{width: '100%', display: 'flex', background:'#fff'}}>
        <div className="side-image"></div>
        <div className="right">
          <div className="rightCap">
            <img src="img/Logotype.png" alt=""/>

            <h2 className="mb-1">Let's get to know you </h2>
            <span className=" mb-1">Tell us about yourself</span>

                <div className="col-3 mt-1 mb-1">
                 <img src="img/Group 3123.png"  alt=""/>
                </div>
            <form onSubmit={handleSubmit}>
                <div className="inner1 mt-2">
                    <i className="far fa-user"></i>
                    <input
                      type="firstName"
                      placeholder="First Name"
                      className="form-control1"
                      onChange={ handleChange }
                    />
                  </div>
                  <div className="inner1">
                      <i className="far fa-user"></i>
                    <input
                      type="lastName"
                      placeholder="Last Name"
                      className="form-control1"
                      onChange={ handleChange }
                    />
                  </div>
              <div className="inner1">
                <i className="far fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-control1"
                  onChange={ handleChange }
                />
              </div>
              <div className="inner1">
                  <i className="far fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control1"
                  onChange={ handleChange }
                />
              </div>
              <div className="row bottom">
                <div className="col-12">
                  <div className="grow-button text-end">
                    <button className=" grow"><Link className="top-p2" to="/verification">Create Account</Link></button>
                  </div>
                </div>

                
              </div>
            </form>
            <div >
              <p>Already have an Agent Account? <Link className="top-p1" to="/signup">Log In</Link></p>
              </div>
          </div>
          
        </div>
      </div>
    )
}
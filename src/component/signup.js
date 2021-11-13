import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./style.css";



export function SignUpBody(){
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
    axios.post("https://api.goflex.ng/api/obtain/", loginData)
    .then((res) => {
      window.localStorage.setItem("token", res.data);
      history.push("/dashboard");
  }).catch((error) => {
    console.log(error)
  })
  };
    return(
        <div className="form-modal">
           <div id="login-form">
          <div class="mainn" style={{width: '100%', display: 'flex', background:'#fff'}}>
        <div class="side-image"></div>
        <div class="right">
          <div class="rightCap">
            <img src="img/Logotype.png" alt=""/>

            <h2 class="mb-1">Great to see you back </h2>
            <span class=" mb-0">Please sign in to continue</span>
             <form onSubmit={handleSubmit}>
              <div class="inner mt-3">
                <i class="far fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email Address"
                  class="form-control1"
                  name = "email"
                  value={ loginData.email }
                  onChange={ handleChange }
                />
              </div>
              <div class="inner">
                  <i class="far fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  class="form-control1"
                   name = "password"
                  value={ loginData.password }
                  onChange={ handleChange }
                />
              </div>
              <div class="row bottom">
                <div class="col-6">
                  <div class="grow-button text-center ">
                    <button  type="submit" class="grow"><Link class="top-p2" to="/">Log in</Link></button>
                  </div>
                </div>

                <div class="col-6 text-end tot mt-4"><Link class="top-p1" to="/forgetpass">Forgot password ?</Link></div>
              </div>
            </form>
            <div style={{marginTop:'7em'}}>
              <p>Don't have an Agent Account?<Link to="/createaccount"> <span class="top-p1">Create One Now</span></Link></p>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    )
}
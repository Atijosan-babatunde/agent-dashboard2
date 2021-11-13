import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Link} from 'react-router-dom';
import "./style.css";


export function NewPassBody(){

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
    axios.post("https://thawing-shore-17752.herokuapp.com/api/signin", loginData)
    .then((res) => {
      window.localStorage.setItem("token", res.data);
      history.push("/dashboard");
  }).catch((error) => {
    console.log(error)
  })
  };
    return(
        <div class="mainn" style={{width: '100%', display: 'flex', background:'#fff'}}>
        <div class="side-image"></div>
        <div class="right">
          <div class="rightCap">
            <img src="img/Logotype.png" alt=""/>

            <p className="pad1">Great to see you back </p>
            <span className="pad2">Pls sign in to continue</span>
             <form onSubmit={handleSubmit}>
              <div class="inner mb-2">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="New Password"
                  class="form-control1"
                   onChange={ handleChange }
                />
              </div>
              <div class="inner ">
                  <i class="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  class="form-control1"
                   onChange={ handleChange }
                />
              </div>
               <button class="grow"><Link to="/">Log in</Link></button>
            </form>
          </div>
        </div>
       
      </div>
    )
}
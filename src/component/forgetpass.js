import React from 'react';
import { Link } from 'react-router-dom';
import "./forget.css";



export function ForgetPassBody(){
    return(
        <div class="mainn" style={{width: '100%', display: 'flex', background:'#fff'}}>
        <div class="side-image"></div>
        <div class="right">
          <div class="rightCap">
            <img src="img/Logotype.png" alt=""/>

            <p className="pad1">Great to see you back </p>
            <span className="pad2">Pls sign in to continue</span>
            <form>
              <div class="inner">
                <i class="far fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  class="form-control1"
                  id="exampleFormControlInput1"
                />
              </div>
               <button class="grow"><Link to="/newpass">Reset Password</Link></button>
            </form>
          </div>
        </div>
      </div>
    )
}
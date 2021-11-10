import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";



export function SignUpBody(){
    return(
          <div class="mainn" style={{width: '100%', display: 'flex'}}>
        <div class="side-image"></div>
        <div class="right">
          <div class="rightCap">
            <img src="img/Logotype.png" alt=""/>

            <h2 class="mb-1">Great to see you back </h2>
            <span class=" mb-0">Please sign in to continue</span>
            <form>
              <div class="inner mt-3">
                <i class="far fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email Address"
                  class="form-control1"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="inner">
                  <i class="far fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  class="form-control1"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="row bottom">
                <div class="col-6">
                  <div class="grow-button text-center ">
                    <button class="grow"><Link class="top-p2" to="/">Log in</Link></button>
                  </div>
                </div>

                <div class="col-6 text-end tot mt-4"><Link class="top-p1" to="/forgetpass">Forgot password ?</Link></div>
              </div>
            </form>
            <div style={{marginTop:'7em'}}>
              <p>Don't have an Agent Account? <span class="top-p1">Create One Now</span></p>
            </div>
          
        </div>
        </div>
      </div>
    )
}
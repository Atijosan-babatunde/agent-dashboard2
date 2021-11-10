import React from 'react';
import { Link } from 'react-router-dom';
import "./forget.css";


export function NewPassBody(){
    return(
        <div class="mainn" style={{width: '100%', display: 'flex'}}>
        <div class="side-image"></div>
        <div class="right">
          <div class="rightCap">
            <img src="img/Logotype.png" alt=""/>

            <p className="pad1">Great to see you back </p>
            <span className="pad2">Pls sign in to continue</span>
            <form>
              <div class="inner mb-2">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="New Password"
                  class="form-control1"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="inner ">
                  <i class="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  class="form-control1"
                  id="exampleFormControlInput1"
                />
              </div>
               <button class="grow"><Link to="/">Log in</Link></button>
            </form>
          </div>
        </div>
       
      </div>
    )
}
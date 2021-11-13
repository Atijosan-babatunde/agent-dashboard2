import React from "react";

import { Link } from 'react-router-dom';
import "./style.css";



export function EnterDetails(){
    return(
        <div class="mainn" style={{width: '100%', display: 'flex', background:'#ffffff'}}>
        <div class="side-image"></div>
        <div class="right">
          <div class="rightCap">
            <img src="img/Logotype.png" alt=""/>

            <h2 class="mb-1">Enter your account details</h2>
            <span class=" mb-3">We need this to process payments to you</span>

             
            <form>
             <div class="col-md-12 mt-2">
                                            
                                            <select id="selectBank" class="inner1 text-light text-dark">
                                                <option selected><i class="far fa-home-alt"></i>Select Bank</option>
                                                <option>...</option>
                                            </select>
                                        </div>
               
                  <div class="inner1">
                      
                    <input
                      type="lastName"
                      placeholder="# Account Number"
                      class="form-control1"
                      id="exampleFormControlInput1"
                    />
                  </div>
                  <hr/>
                 <div class="col-12">
                  <h3>Additional Details</h3>
                  <span>We need this to confirm your identity</span>
                  <div class="inner1 mt-2">
                    <i class="far fa-shield-check"></i>
                    <input
                      type="firstName"
                      placeholder="BVN"
                      class="form-control1"
                      id="exampleFormControlInput1"
                    />
                  </div>
                   <div class="inner1 mt-2">
                    <i class="far fa-calendar-alt"></i>
                    <input
                      type="firstName"
                      placeholder="Date of Birth (DD/MM/YYYY)"
                      class="form-control1"
                      id="exampleFormControlInput1"
                    />
                  </div>

            
              <div class="row bottom">
                <div class="col-12">
                  <div class="grow-button text-end">
                    <button class=" grow"><Link class="top-p2" to="/">Submit</Link></button>
                  </div>
                </div>

               
              </div>
            </div>
            </form>
           </div>
          </div>
        </div>
     
    )
}
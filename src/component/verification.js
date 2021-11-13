import React from "react";

import { Link } from 'react-router-dom';
import "./style.css";


export function Very(){
    return(
        <div class="mainn" style={{width: '100%', display: 'flex', background:'#ffffff'}}>
        <div class="side-image"></div>
        <div class="right">
          <div class="rightCap">
            <img src="img/Logotype.png" alt=""/>

              <div class="tab-pane mt-0 ms-2 " id="pills-verification" role="tabpanel"
                  aria-labelledby="pills-verification-tab">

                  <div class="container">
                      <h4 class="top-head2 " style={{marginTop:'2em'}}>OTP Verification</h4>
                      <p class="p-top mt-4 ">Please enter the code sent to +234 555 5678</p>

                      <div class="row mt-3">
                          <div class="userInput1">
                              <div class="">
                                  <div class="pass col-12">
                                      <input class="take" type="text" maxlength="1"/>
                                      <input class="take" type="text" maxlength="1"/>
                                      <input class="take" type="text" maxlength="1"/>
                                      <input class="take" type="text" maxlength="1"/>
                                      <input class="take" type="text" maxlength="1"/>
                                      <input class="take" type="text" maxlength="1"/>
                                  </div>
                              </div>
                          </div>
                          <div class=" text-center mt-4">
                            <button type="button" class="btn prevme btn-outline-orange"><Link to="/" className="col-but"><img src="img/roundd.png" alt="" style={{marginRight:'4px'}}/>Resend Code</Link></button>
                       
                            <button class="btn btn-orange nexttab" type="button"><Link to ="/signup" className="col-but2">Continue</Link></button>
                         </div>
                        </div>
                      </div>
                  </div>
              </div>
          
        </div>
      </div>
    )
}
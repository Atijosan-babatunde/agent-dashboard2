import React from 'react';
import { BaseContainer } from '../web/layouts/Containers';
import { Link } from 'react-router-dom';
import "./style.css";


export function SocialBody(){
    return(
         <BaseContainer>
           <div className="top">
             
      <div className="container">
        <div className="row">
          <div  className="col-md-12">
            <div  className="header">
              <div  className="nav">
                <div  className="user text-end">
                  <div  className="mobilenav">
                    <img src="img/bars-solid.svg" id="hamburger" alt="" class="bar"/>
                    <Link to="/"  className="ogo">
                      <img src="img/Logotype.png" alt=""  className="" />
                    </Link>
                  </div>

                  <img src="img/image2.png" alt=""  className="noti" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 clientMain">
            <div id="content" class="app-content">
              <h3>New Client Application</h3>
              <p>Quickly create a new goflex Application for your customer</p>
            </div>

            <div class="trip">
              <div class="tripObj">
                <div class="tripcap">
                  <i class="fas fa-check"></i>
                  <span>Trip Details</span>
                </div>
                <div class="tripcap">
                  <i class="fas fa-check"></i>
                  <span>Customer Infomation</span>
                </div>
                <div class="tripcap active">
                  <h1>3</h1>
                  <span>Share Application Link</span>
                </div>
              </div>
              <div class="socialForm ">
                <h4>
                  share the link below to your customer to complete thier
                  application
                </h4>

                <div class="appLink">
                  <label for="app">Application Link</label>
                  <div class="selectbutton">
                    <input
                      style={{width: '100%'}}
                      type="text"
                      value="https://wearegoinglivesoon.commmmmmmmmmmmmm"
                    />
                  </div>
                  <span>copy</span>
                </div>

                <div class="socialLink">
                  <p>share via:</p>
                  <div>
                    <div class="mainlink">
                      <i class="far fa-envelope"></i> <span>Email</span>
                    </div>
                    <div class="mainlink">
                      <i class="far fa-phone"></i> <span>SMS</span>
                    </div>
                    <div class="mainlink">
                      <i class="fab fa-whatsapp"></i> <span>Whatsapp</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </BaseContainer>
    )
}
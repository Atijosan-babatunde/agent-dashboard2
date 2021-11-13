import React from 'react';
import { BaseContainer } from '../web/layouts/Containers';
import { Link } from 'react-router-dom';
import "./style.css";



export function NewClientBody(){
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
              <h3>New Client Application</h3 >
              <p>Quickly create a new goflex Application for your customer</p>
            </div>

            <div class="trip">
              <div class="tripObj">
                <div class="tripcap active1">
                  <h1>1</h1>
                  <span>Trip Details</span>
                </div>
                <div class="tripcap">
                  <h1>2</h1>
                  <span>Customer Infomation</span>
                </div>
                <div class="tripcap">
                  <h1>3</h1>
                  <span>Share Application Link</span>
                </div>
              </div>
              <div class="tripform1">
                  <div class="select">
                      <label for="selet">BOOKING TYPE</label>
                      <div class="selectbutton">
                        <select name="booking" id="">
                          <option value="">Flight Ticket</option>
                          <option value="">Flight Ticket</option>
                          <option value="">Flight Ticket</option>
                      </select>
                      </div>
                      
                  </div>
                  <div class="select">
                      <label for="selet">FROM</label>
                      <div class="selectbutton">
                        <select name="booking" id="">
                          <option value="">Select City</option>
                          <option value="">Select City</option>
                          <option value="">Select City</option>
                      </select>
                      </div>
                      
                  </div>
                  <div class="select">
                      <label for="selet">DEPATURE DATE</label>
                        <div class="selectbutton">
                          <input type="date"></input>
                        </div>
                  </div>
                                    <div class="select">
                      <label for="selet">COST OF TRIP</label>
                      <div class="selectbutton">
                          <input type="number" placeholder="Enter Amount"></input>
                      </div>

                   
                  </div>
              </div>
              <div class="tripform2">
                  <div class="select">
                      <label for="selet">TRIP TYPE</label>
                      <div class="selectbutton">
                        <select name="booking" id="">
                          <option value="">Round Trip</option>
                          <option value="">Round Trip</option>
                          <option value="">Round Trip</option>
                      </select>
                      </div>
                      
                  </div>
                  <div class="select">
                      <label for="selet">TO</label>
                      <div class="selectbutton">
                        <select name="booking" id="">
                          <option value="">Select City</option>
                          <option value="">Select City</option>
                          <option value="">Select City</option>
                      </select>
                      </div>
                  </div>
                  <div class="select">
                      <label for="selet">RETURING DATE</label>
                      <div class="selectbutton">
                        <input type="date"></input>
                      </div>
                          
                  </div>
                  <button class="grow text-end"><Link style={{color: '#fff'}} to="/newclientreg">continue</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
        </BaseContainer>
    )
}
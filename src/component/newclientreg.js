import React from 'react';
import { BaseContainer } from '../web/layouts/Containers';
import { Link } from 'react-router-dom';
import "./style.css";



export function NewClientRegBody(){
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
                <div class="tripcap">
                  <i class="fas fa-check"></i>
                  <span>Trip Details</span>
                </div>
                <div class="tripcap active">
                  <h1>2</h1>
                  <span>Customer Infomation</span>
                </div>
                <div class="tripcap">
                  <h1>3</h1>
                  <span>Share Application Link</span>
                </div>
              </div>
              <div class="tripForm">
                <div class="row mt-3">
                    <div class="tag-form">
                        <form action="#">
                            <div class="row mb-3">
                                <div class="col-md-6 mt-2">
                                    <label for="inputfirstName" class="form-label ">FIRST
                                        NAME</label>
                                        <div class="selectbutton">
                                            <input type="text" class=" px-3"
                                        placeholder="Enter First Name" />
                                        </div>
                                    
                                </div>
                                <div class="col-md-6 mt-2">
                                    <label for="inputLastName" class="form-label">LAST
                                        NAME</label>
                                        <div class="selectbutton">
                                            <input type="text" class=" px-3"
                                        placeholder="Enter Last Name" />
                                        </div>
                                    
                                </div>
                            </div>
                            <div class="col mt-2 mb-3">
                                <label for="inputAddress" class="form-label mt-3">ADDRESS</label>
                                        <div class="selectbutton">
                                <input type="text" class="selectionbutton px-3" id="inputAddress"
                                    placeholder="Enter Address" />
                                        </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-md-6 mt-2">
                                    <label for="inputCountry" class="form-label mt-3">COUNTRY</label>
                                        <div class="selectbutton">
                                    <select id="inputCountry" class="selectionbutton text-light text-dark">
                                        <option selected>Select Country</option>
                                        <option>...</option>
                                    </select>
                                        </div>
                                </div>
                                <div class="col-md-6 mt-2">
                                    <label for="inputCountry" class="form-label mt-3">CITY</label>
                                        <div class="selectbutton">
                                    <select id="inputCity" class="selectionbutton text-light text-dark">
                                        <option selected>Select City</option>
                                        <option>...</option>
                                    </select>
                                        </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mt-2">
                                    <label for="inputEmail" class="form-label mt-3">CUSTOMER EMAIL</label>
                                        <div class="selectbutton">
                                    <input type="text" class="selectionbutton px-3" id="inputEmail"
                                        placeholder="Enter Email Address"/>
                                        </div>
                                </div>
                                <div class="col-md-6 mt-2">
                                    <label for="inputPhone" class="form-label mt-3">CUSTOMER PHONE
                                        NUMBER</label>
                                        <div class="selectbutton">
                                    <input type="text" class="selectionbutton px-3" id="inputPhone"
                                        placeholder="+234 810 XXX XXXX"/>
                                        </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
          </div>
          <div class=" text-end" style={{margin: '20px'}}>
            <button style={{padding: '10px 20px', margin: '20px', color: '#fff'}}  class="btn btn-orange nexttab" type="button"><Link style={{color: '#fff'}} to="/newclient">Go Back</Link></button>
            <button style={{padding: '10px 20px', margin: '20px', color: '#fff'}}  type="button" class="btn nexttab btn-outline-orange"><Link style={{color: '#fff'}} to="/social">Continue</Link></button>
                
        </div>
        </div>
      </div>
    </div>
      </div>
        </BaseContainer>
    )
}
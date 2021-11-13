import React from 'react';
import { BaseContainer } from '../web/layouts/Containers';
import { Link } from 'react-router-dom';
import "./style.css";


export function UploadD(){
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
                    <img src="img/bars-solid.svg" id="hamburger" alt="" className="bar"/>
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

      <div class="container ">
        <div className="row ">
          <div className="mainTop">
            <div className="ticket">
              <h1>My Account</h1>
              
            </div>
           
          </div>
          <div
            className="col-md-12 ro"
            style={{width:'92%', margin:'auto', padding: '2em'}}
          >
            <div class="container roland">
            <div class="row">
                <div class="" >
                    
                        
                            



                            <div class="tab-content" id="pills-tabContent" style={{height: '800px'}}>
                                <div class="tab-pane mt-3 ms-2 fade show active" id="pills-businessInfo" role="tabpanel"
                                    aria-labelledby="pills-businessInfo-tab">
                                
                                    <div class="row  mb-5 mt-4">
                                        <div class="col-md-12 col-sm-12">
                                            <p><img src="img/danger.png" style={{paddingRight:'10px'}}/>Your business information is unverified. Please update your business information</p>
                                            
                                        </div>
                                       
                                    </div>
                                    
                                    <div class="row">
                                          <div class="col-12">
                                               <div class="row">
                                                <div class="col-md-6">
                                                    <label for="inputCardNumber" class="form-label ">BUSINESS NAME</label>
                                                    <div class="inner1">
                                                        
                                                        <i class="fal fa-wallet"></i>
                                                        <input
                                                          type="firstName"
                                                          placeholder="Business Name"
                                                          class="form-control1"
                                                          id="exampleFormControlInput1"
                                                        />
                                                      </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputCardNumber" class="form-label ">RC NAME</label>
                                                    <div class="inner1">
                                                       
                                                        <i class="fal fa-wallet"></i>
                                                      <input
                                                        type="lastName"
                                                        placeholder="RC Name"
                                                        class="form-control1"
                                                        id="exampleFormControlInput1"
                                                      />
                                                    </div>
                                                </div>
                                                </div>
                                           </div>
                                    
                                    </div>
                                

                                    <h5 class="mb-3 mt-5">Company Documents</h5>


                                    <div class="row">

                                         <div class="col-md-6">
                                              
                                            <div class="row">
                                                <div class="col-12">
                                                  <div class="grow-button ">
                                                    <button class=" grow6 mt-3"><Link class="top-p2" to="/"><span class="top-pp1">Document 123478.jpg<i class="fal fa-times"></i></span></Link></button>
                                                  </div>
                                                </div>
                                          </div>
                                    
                                    </div>







                                          <div class="col-md-6">
                                              
                                            <div class="row bottom">
                                                <div class="col-12">
                                                  <div class="grow-button ">
                                                    <button class=" grow6 mt-3"><Link class="top-p2" to="/"><span class="top-p1"><i class="fal fa-upload"></i>Upload Company Document</span></Link></button>
                                                  </div>
                                                </div>
                                          </div>
                                         </div> 


                                          

                                    


                                       

                                   
                                </div>

                                <div class="row bottom">
                                    <div class="col-12">
                                      <div class="grow-button text-end ">
                                        <button class="grow"><Link class="top-p2" to="/">Update</Link></button>
                                      </div>
                                    </div>
                    
                                    
                                  </div>
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
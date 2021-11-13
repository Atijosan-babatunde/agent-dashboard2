import React from 'react';
import { BaseContainer } from '../web/layouts/Containers';
import { Link } from 'react-router-dom';
import "./style.css";


export function FirstPage(burgerStatus, SetBurgerStatus){
  
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
                    <img src="img/bars-solid.svg" id="hamburger" alt="" class="bar" />
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
      
           <div className="container">
        <div className="row">
          <div
            className="col-md-12"
            style={{marginTop: '6.1em', paddingLeft: '2em',paddingRight: '2em', marginBottom: '1em'}}
          >
            <div id="content" className="app-content">
              <h1 className="page-header mb-2 mt-3">
                Hey there, <span>Micheal </span>
              </h1>
              <p>Here's a quick overview of what is going on</p>

              <div className="col-md-12 mb-3">
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="card mb-2" style={{border:'none'}}>
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <h5 className="small-card-header mb-3">
                              TOTAL CUSTOMERS
                            </h5>
                            <p className="small-card-para mb-2">40,689</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="card mb-2" style={{border:'none'}}>
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <h5 className="small-card-header mb-3">
                              TICKETED CUSTOMERS
                            </h5>
                            <p className="small-card-para mb-2">40,689</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="card mb-2" style={{border:'none'}}>
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <h5 className="small-card-header mb-3">
                              PENDING APPLICATIONS
                            </h5>
                            <p className="small-card-para mb-2">40,689</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-header" style={{background:'none'}}>
                  QUICK LINKS
                </div>
                <div className="container mb-4" style={{background:'none'}}>
                  <div className="row quickbutton">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                      <div className="card r1">
                        <div className="">
                          <div className="quick">
                            <div className="text-center mb-2">
                              <img src="img/r1.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h2 className="card-head">New-Client Application</h2>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                      <div className="card r3">
                        <div className="">
                          <div className="quick">
                            <div className="text-center mb-1">
                              <img src="img/r3.jpg" alt="edd" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h2 className="card-head">Customer Service</h2>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                      <div className="card r2">
                        <div className="">
                          <div className="quick">
                            <div className="text-center mb-1">
                              <img src="img/r2.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h2 className="card-head">Campaign Monitoring</h2>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                      <div className="card r4">
                        <div className="">
                          <div className="quick">
                            <div className="text-center mb-2">
                              <img src="img/r4.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h2 className="card-head">Ticketed Customers</h2>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h1 className="card-header mb-2 mt-3" style={{background:'none'}}>RECENT TICKETS REQUEST</h1>
                <div className="card-body">
                  <div id="flip-scroll">
                    <table
                      id="datatableDefault"
                      className="table text-nowrap w-200"
                    >
                    

                      <thead style={{borderBottomColor: 'none'}}>
                        <tr className="table" style={{background: '#f1f2f4'}}>
                          <th width="1%">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                              disabled
                            />
                          </th>
                          <th className="payment-inner-p" width="12%">Date</th>
                          <th className="payment-inner-p" width="12%">
                            Customer Name
                          </th>
                          <th className="payment-inner-p" width="12%">
                            Ticket Price
                          </th>
                          <th className="payment-inner-p" width="12%">Trip Type</th>
                          <th className="payment-inner-p" width="12%">Status</th>
                          <th className="payment-inner-p" width="5%">
                    <i className="far fa-eye"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td width="1%">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                              disabled
                            />
                          </td>
                          <td className="payment-month">6 Jan 2021</td>
                          <td className="payment-month">Cynthia Okafor</td>
                          <td className="payment-month">&#8358;500,000</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">
                    <i className="far fa-eye"></i>
                          </td>
                        </tr>
                        <tr>
                          <td width="1%">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                              disabled
                            />
                          </td>
                          <td className="payment-month">6 Jan 2021</td>
                          <td className="payment-month">Cynthia Okafor</td>
                          <td className="payment-month">&#8358;500,000</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">
                    <i className="far fa-eye"></i>
                          </td>
                        </tr>

                        <tr>
                          <td width="1%">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                              disabled
                            />
                          </td>
                          <td className="payment-month">6 Jan 2021</td>
                          <td className="payment-month">Cynthia Okafor</td>
                          <td className="payment-month">&#8358;500,000</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">
                    <i className="far fa-eye"></i>
                          </td>
                        </tr>
                        <tr>
                          <td width="1%">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                              disabled
                            />
                          </td>
                          <td className="payment-month">6 Jan 2021</td>
                          <td className="payment-month">Cynthia Okafor</td>
                          <td className="payment-month">&#8358;500,000</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">
                    <i className="far fa-eye"></i>
                          </td>
                        </tr>
                        <tr>
                          <td width="1%">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                              disabled
                            />
                          </td>
                          <td className="payment-month">6 Jan 2021</td>
                          <td className="payment-month">Cynthia Okafor</td>
                          <td className="payment-month">&#8358;500,000</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">
                    <i className="far fa-eye"></i>
                          </td>
                        </tr>
                        <tr>
                          <td width="1%">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                              disabled
                            />
                          </td>
                          <td className="payment-month">6 Jan 2021</td>
                          <td className="payment-month">Cynthia Okafor</td>
                          <td className="payment-month">&#8358;500,000</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">
                    <i className="far fa-eye"></i>
                          </td>
                        </tr>
                        <tr>
                          <td width="1%">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                              disabled
                            />
                          </td>
                          <td className="payment-month">6 Jan 2021</td>
                          <td className="payment-month">Cynthia Okafor</td>
                          <td className="payment-month">&#8358;500,000</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">
                    <i className="far fa-eye"></i>
                          </td>
                        </tr>
                        <tr>
                          <td width="1%">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                              disabled
                            />
                          </td>
                          <td className="payment-month">6 Jan 2021</td>
                          <td className="payment-month">Cynthia Okafor</td>
                          <td className="payment-month">&#8358;500,000</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">Multi City</td>
                          <td className="payment-month">
                         <i className="far fa-eye"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="pages">
                    <p className="down">row per page 10</p>
                    <p className="down">1-10 of 276</p>
                    <div className="pagebutton">
                      <i className="fas fa-chevron-left"></i>
                      <i className="fas fa-chevron-right"></i>
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
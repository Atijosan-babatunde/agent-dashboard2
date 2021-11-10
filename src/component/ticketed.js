import React from 'react';
import { BaseContainer } from '../web/layouts/Containers';
import { Link } from 'react-router-dom';
import "./style.css";


export function ThirdPage(){
     return(
         <BaseContainer>
            <div  className="top">
      <div  className="container">
        <div  className="row">
          <div  className="col-md-12">
            <div  className="header">
              <div  className="nav">
                <div  className="user text-end">
                  <div  className="mobilenav">
                    <img
                      src="img/bars-solid.svg" alt=""
                      id="hamburger"
                       className="bar"
                    />
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

      <div  className="container">
        <div  className="row">
          <div  className="mainTop">
            <div  className="ticket mb-0">
              <h1>Ticketed Customers</h1>
              <p>Here's a quick overview of all ticketed customers</p>
            </div>
          </div>
        <div  className="row">
          <div
             className="col-md-12 ro"
            style={{width:'90%', margin:'auto', padding: '2em'}}
          >

           <div  className="row">
                <div  className="col-12">
                  <div  className="searchContainer1 mb-4">
                    <i  className="fa fa-search searchIcon"></i>
                    <input
                       className="searchBox1"
                      type="search"
                      name="search"
                      placeholder=" customer search"
                    />
                  </div>
                </div>
              </div>
            <table id="datatableDefault"  className="table text-nowrap w-200">
             

              <thead style={{borderBottomColor: "none"}}>
                <tr  className="table" style={{background: "#f1f2f4"}}>
                  <th width="1%">
                    <input
                       className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      disabled
                    />
                  </th>
                  <th  className="payment-inner-p" width="12%">Date</th>
                  <th  className="payment-inner-p" width="12%">Customer Name</th>
                  <th  className="payment-inner-p" width="12%">Ticket Price</th>
                  <th  className="payment-inner-p" width="12%">Trip Type</th>
                  <th  className="payment-inner-p" width="12%">Status</th>
                  <th  className="payment-inner-p" width="5%">Action</th>
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
                  <td  className="payment-month">6 Jan 2021</td>
                  <td  className="payment-month">Cynthia Okafor</td>
                  <td  className="payment-month">&#8358;500,000</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">
                    <i  className="far fa-eye"></i>
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
                  <td  className="payment-month">6 Jan 2021</td>
                  <td  className="payment-month">Cynthia Okafor</td>
                  <td  className="payment-month">&#8358;500,000</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">
                    <i  className="far fa-eye"></i>
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
                  <td  className="payment-month">6 Jan 2021</td>
                  <td  className="payment-month">Cynthia Okafor</td>
                  <td  className="payment-month">&#8358;500,000</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">
                    <i  className="far fa-eye"></i>
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
                  <td  className="payment-month">6 Jan 2021</td>
                  <td  className="payment-month">Cynthia Okafor</td>
                  <td  className="payment-month">&#8358;500,000</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">
                    <i  className="far fa-eye"></i>
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
                  <td  className="payment-month">6 Jan 2021</td>
                  <td  className="payment-month">Cynthia Okafor</td>
                  <td  className="payment-month">&#8358;500,000</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">
                    <i  className="far fa-eye"></i>
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
                  <td  className="payment-month">6 Jan 2021</td>
                  <td  className="payment-month">Cynthia Okafor</td>
                  <td  className="payment-month">&#8358;500,000</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">
                    <i  className="far fa-eye"></i>
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
                  <td  className="payment-month">6 Jan 2021</td>
                  <td  className="payment-month">Cynthia Okafor</td>
                  <td  className="payment-month">&#8358;500,000</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">
                    <i  className="far fa-eye"></i>
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
                  <td  className="payment-month">6 Jan 2021</td>
                  <td  className="payment-month">Cynthia Okafor</td>
                  <td  className="payment-month">&#8358;500,000</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">Multi City</td>
                  <td  className="payment-month">
                    <i  className="far fa-eye"></i>
                  </td>
                </tr>
              </tbody>
            </table>

             <div  className="pages">
            <p>row per page 10</p>
            <p>1-10 of 276</p>
            <div  className="pagebutton">
              <i  className="fas fa-chevron-left"></i>
              <i  className="fas fa-chevron-right"></i>
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
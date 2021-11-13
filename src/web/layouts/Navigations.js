import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Header = () => {
 
    return(
        <div className="side-menu" id="side-menu">
        <div className="brand-name">
          <div className="logo">
            <Link to="/" className="brand-logo">
              <img src="asset/img/Logotype.png" alt="" className="logo" />
            </Link>
          </div>
          <div className="profile-details">
            <div className="text">
              <p className="profile-mail">MY ACCOUNT</p>
            </div>
          </div>
         
          <ul>
            <li className="menu-item">
              <Link to="/" className="menu-link active">
                <span className="icon"><i className="fa fa-envelope"></i></span>
                <span className="menu-text">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/client" className="menu-link">
                <span className="icon"><i className="fa fa-user"></i></span>
                <span className="menu-text">Client Applications</span>
              </Link>
            </li>
            <li>
              <Link to="/ticketed" className="menu-link">
                <span className="icon"><i className="fa fa-envelope"></i></span>
                <span className="menu-text">Ticketed Customers</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="menu-link">
                <span className="icon"><i className="fa fa-user"></i></span>
                <span className="menu-text">Campaigns</span>
              </Link>
            </li>
            <div className="profile-details">
              <div className="text">
                <p className="profile-mail">MORE</p>
              </div>
            </div>
            <li>
              <Link to="/transaction" className="menu-link">
                <span className="icon"><i className="fa fa-user"></i></span>
                <span className="menu-text"> Payouts</span>
              </Link>
            </li>
            <li>
              <Link to="/accountt" className="menu-link">
                <span className="icon"><i className="fa fa-user"></i></span>
                <span className="menu-text">My Account</span>
              </Link>
            </li>
            <li>
              <Link to="/faq" className="menu-link">
                <span className="icon"><i className="fa fa-user"></i></span>
                <span className="menu-text">FAQs</span>
              </Link>
            </li>
            <li>
              <Link to="/livechat" className="menu-link">
                <span className="icon"><i className="fa fa-user"></i></span>
                <span className="menu-text">Live Chat</span>
              </Link>
            </li>
            <li>
              <Link to="/signup" className="menu-link-out">
                <span className="icon-out"><i className="fa fa-sign-out"></i></span>
                <span className="menu-text">Logout</span>
              </Link>
            </li>
          </ul>
         
       
       


      
             
     

      
    </div>
     </div>
     
      
       
      
             
    )
}

    
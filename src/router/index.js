import React from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';


import Landing from '../page/Landing';
import Client from '../page/Client';
import Ticketed from '../page/Ticketed';
import Account from '../page/Account';
import Faq from '../page/Faq';

import NewClientReg from '../page/NewClientReg';
import Social from '../page/Social';
import SignUp from '../page/SignUp';
import NewClientBody from '../page/NewClient';
import ForgetPass from '../page/ForgetPass';
import NewPass from '../page/NewPass';
import CreateAccount from '../page/CreateAccount';
import Verification from '../page/Verification';
import UploadDocument from '../page/UploadDocument';
import DocumentUploaded from '../page/DocumentUploaded';
import EnterAccountDetails from '../page/EnterAccountDetails';
import UploadBusinessInformation from '../page/UploadBusinessInformation';
import UploadBusinessDocument from '../page/UploadBusinessDocument';
function Approuter(){
    const history = createBrowserHistory();
    
    return(
        <Router history = {history}>
            <Switch>
               <Route exact path ='/' component={Landing}/>
               <Route path ='/client/' exact component ={Client}/>
               <Route path ='/ticketed/' exact component ={Ticketed}/>
               <Route path ='/accountt/' exact component ={Account}/>
               <Route path ='/faq/' exact component ={Faq}/>
               <Route path ='/newclient/'exact component ={NewClientBody}/>
               <Route path ='/newclientreg/' exact component ={NewClientReg}/>
                <Route path ='/social/' exact component ={Social}/>
                <Route path ='/signup/' exact component ={SignUp}/>
                <Route path ='/forgetpass/' exact component ={ForgetPass}/>
                <Route path ='/newpass/' exact component ={NewPass}/>
                <Route path ='/createaccount/' exact component ={CreateAccount}/>
                <Route path ='/verification/' exact component ={Verification}/>
                <Route path ='/uploaddocument/' exact component ={UploadDocument}/>
                <Route path ='/documentuploaded/' exact component ={DocumentUploaded}/>
                <Route path ='/enteraccountdetails/' exact component ={EnterAccountDetails}/>
                <Route path ='/uploadbusinessinformation/' exaxt component ={UploadBusinessInformation}/>
                <Route path ='/uploadbusinessdocument/' exaxt component ={UploadBusinessDocument}/>
            </Switch>
        </Router>
    )
}

export default Approuter
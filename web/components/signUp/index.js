import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submit,destroy } from 'redux-form';
import { ToastContainer, toast } from 'react-toastify';
import { Tabs, Tab } from 'react-web-tabs';
import { history } from '../../history/history';

import 'react-toastify/dist/ReactToastify.css';
import 'react-web-tabs/dist/react-web-tabs.css';
import SignUp from './signUp'
import Login from './login';

const Signup_Login = props => {
    const [tabId, handleTabId] = useState("signup");
    const [activeSignUp , handleActiveSignUp] = useState("active_tab_btn");
    const [activeLogin , handleActiveLogin] = useState("");


    const onLoginSubmit = (values) => {
        if(values.hasOwnProperty('email') && values.hasOwnProperty('password')){
        login(values)
        }
        else if(Object.keys(values).length !=0 &&  !toast.isActive("1")){
            toast.error("All Fields Are Mandatory", {
                position:toast.POSITION.BOTTOM_CENTER,
                autoClose:2000,
                hideProgressBar:true,
                toastId:"1"
              });
        }
    }

    const onSignUpSubmit = (values) => {
        if(Object.keys(values).length ===0 &&  !toast.isActive("1")){
            toast.error("Please provide input for SIGN UP", {
                position:toast.POSITION.BOTTOM_CENTER,
                autoClose:2000,
                hideProgressBar:true,
                toastId:"1"
             });
             return;
        }
        else if(values.hasOwnProperty('name')  && values.hasOwnProperty('email') && values.hasOwnProperty('mobile') && values.hasOwnProperty('password')){
           signUp(values);
        }
        else if(Object.keys(values).length !=0 &&  !toast.isActive("1")){
            toast.error("All Fields Are Mandatory", {
                 position:toast.POSITION.BOTTOM_CENTER,
                 autoClose:2000,
                 hideProgressBar:true,
                 toastId:"1"
              });
              return;
        }
    }

    const signUp = async values=>{
        let loginBtton = document.getElementById('login-tab');
        localStorage.setItem('user',JSON.stringify(values));
        toast.success("Thank you for registering, please login to continue.", {
            position:toast.POSITION.TOP_CENTER,
            autoClose:2000,
            hideProgressBar:true,
            toastId:"1"
         });
         setTimeout(()=>{ 
             loginBtton.click();
             props.destroyForm('signup');
            }, 2000);
    }

    const login = async values=>{
        let user = JSON.parse(localStorage.getItem('user'));
        if(!user){
            toast.success("user not found.", {
                position:toast.POSITION.TOP_CENTER,
                autoClose:2000,
                hideProgressBar:true,
                toastId:"1"
             });   
        }
        else if(user.userEmail === values.userEmail && user.password === values.password){
            history.push('/file-structure');
        }
        else {
            toast.success("Invalid credentials.", {
                position:toast.POSITION.TOP_CENTER,
                autoClose:2000,
                hideProgressBar:true,
                toastId:"1"
             });
        }
    }


   const handleActiveTab = tabId =>{
        handleTabId(tabId);
       if(tabId === "signup"){
        handleActiveSignUp("active_tab_btn");
        handleActiveLogin("");
       }
       else {
        handleActiveLogin("active_tab_btn");
        handleActiveSignUp("")
       }
    }

    const get= ()=> {
        return;
    }


    return (
        <div>
            <div className="login_wrapper">
                <div className="login_bg" >
                </div>
                <div className="login_form_wrapper">
                    <div className="login_form">
                        <h2>WELCOME TO <span>REACT TASK</span></h2>
                        <Tabs
                            defaultTab="signup"
                            onChange={(tabId) => { handleActiveTab(tabId) }}
                        >
                            <SignUp
                                onSubmit={ onSignUpSubmit}
                            />
                            <Login
                                onSubmit={ onLoginSubmit}
                            />
                            <div className="tab_wrapper">
                                <Tab
                                    className={`common_tab ${activeSignUp}`}
                                    tabFor="signup"
                                    onClick={activeSignUp? props.submitSignUpForm: get}
                                >
                                    SIGN UP
                            </Tab>
                                <Tab
                                    className={`common_tab ${activeLogin}`}
                                    tabFor="login"
                                    onClick={activeLogin? props.submitLoginForm: get}
                                >
                                    LOGIN
                            </Tab>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        submitLoginForm: () => submit('login'),
        submitSignUpForm: () => submit('signup'),
        destroyForm: destroy
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Signup_Login);
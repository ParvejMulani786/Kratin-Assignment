import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import loginBack from "../../../assets/loginBack.jpg";
import logInpic from "../../../assets/h1.jpeg";
import LOGO from "../../../assets/logo.png";



export default function LogIn(){
    let nav=useNavigate();
    let [username,setUsername]=useState("");
    let [password,setPassword]=useState("");
    let [msg,setMsg]=useState();

    const config={
        headers: {'Access-Control-Allow-Origin': '*'}

    }
    function handler()
    {
        if(username!="" && password!="")
        {
        axios.post("https://localhost:7058/api/User/"+username+"/"+password,config).then((response)=>
        {
            
            let user=response.data;
            alert("Logged In Successfully !!")
           
          nav("../Dashboard/profile",{state:user});
            
               
            
        }).catch((res)=>
        {
            setMsg("Invalid username/password")
        })
      }
      else{
        alert("Please Enter Credentials")
      }

    }


    return(
        <>
      <div style={{backgroundImage:`url(${loginBack})`,backgroundRepeat:'no-repeat',width:'100%'}}>
     <section class="h-100 gradient-form" style={{backgroundColor: "green"}} />
     
  <div class="container py-4 h-80">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-8">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-5">
              <div class="card-body p-md-5 mx-md-6">

                <div class="text-center">
                  <img src={LOGO}
                    style={{width: "200px" ,alt:"logo", paddingBottom:"25px"}} />
                  <h4 class=" mb-100 pb-2"><u>User Login</u></h4>
                </div>

                <form>
                  <b><p>Please login to your account</p></b>

                  <div class="form-outline  mb-4">
                  <label  for="user">Username</label>

                    <input type="email" id="user" 
                      placeholder="Enter Username" onBlur={(e)=>(setUsername(e.target.value))} required/>
                  </div>

                  <div class="form-outline mb-4">
                  <label  for="pass">Password</label>

                    <input type="password" id="pass"  placeholder="Enter Password"
                    onBlur={(e)=>(setPassword(e.target.value))} required/>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-4" type="button"
                    onClick={handler}>Login</button>
                    <a class="text-muted" href="#!">Forgot password?</a>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <button type="button" class="btn btn-outline-danger">Create new</button>
                  </div>

                </form>

              </div>
            </div>
            <div style={{paddingLeft:"12px"}} class="col-lg-6 d-flex align-items-center" >
            
            <img src={logInpic} style={{width:"390px"}}/>
            
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<section/>
<div/>
  
     </>
        
    );
}
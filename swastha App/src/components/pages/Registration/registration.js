import React, { useEffect, useState } from 'react';
import axios from "axios";
import registerImg from '../../../assets/register2.jpg';
import { useNavigate } from 'react-router-dom';
// import './registration.css';


export default function Registration(props){
    const nav=useNavigate();
    const[user,setUser]=useState({
        firstName:"",
        lastName:"",
        age:"",
        contact:"",
        gender:"",
        street:"",
        state:"",
        city:"",
        pincode:"",
        userName:"",
        password:""

    });

    
    function register(e)
    {
        e.preventDefault();
        console.log(user);

        if(user.firstName && user.lastName && user.age && user.contact && user.gender && user.street && user.state
            && user.city && user.pincode && user.userName && user.password )
            {
                axios.post("https://localhost:7058/api/User",user).then((response)=>
            {
              alert("Registered Successfully!");
              nav("/")
    
            })

            }
            else{
                alert("Please Enter All Credentials")
            }
        }   
 
    return(
<>

<div className='registration'>
<section class="h-80 bg-dark">
  <div class="container py-3 h-80">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
              <img src={registerImg} width="100%" 
                alt="Sample photo" style={{paddingLeft:"25px", paddingTop:"65px"}}
                 />
            </div>
            <div class="col-xl-6">
            
              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase"> Registration Form</h3>
                <form onSubmit={register}>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <label  for="form3Example1m">First name </label><br/>
                      <input type="text" id="form3Example1m" onBlur={(e)=> setUser({...user, firstName:e.target.value})} />
                      
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <label  for="form3Example1n">Last name</label><br/>
                      <input type="text" id="form3Example1n" onBlur={(e)=> setUser({...user, lastName:e.target.value})}  />
                      
                    </div>
                  </div>
                </div>

                

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <label  for="age">Age</label><br/>
                      <input type="text" id="age"  onBlur={(e)=> setUser({...user, age:e.target.value})} />
                      
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <label  for="contact">Contact</label><br/>
                      <input type="text" id="contact" onBlur={(e)=>setUser({...user, contact:e.target.value})} />
                      
                    </div>
                  </div>
                </div>

                

                

                <div  style={{paddingLeft:"3.125rem"}} class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 class="mb-0 me-4">Gender: </h6>

                  <div class="form-check form-check-inline mb-0 me-4">
                  <label class="form-check-label" for="femaleGender">Female</label>
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                       onClick={() => setUser({...user, gender:"Female"})}  />
                    
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                  <label class="form-check-label" for="maleGender">Male</label>
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="male" onClick={() => setUser({...user, gender:"Male"})} />
                    
                  </div>

                  <div class="form-check form-check-inline mb-0">
                  <label class="form-check-label" for="otherGender">Other</label>
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="other"  onClick={() => setUser({...user, gender:"Other"})}  />

                  </div>

                
                </div>
               
                

                <div class="form-outline col-md-10 mb-4">
                    Address:
                <label  for="form3Example8">Street </label><br/>
                  <input type="text" id="form3Example8" onBlur={(e)=>setUser({...user, street:e.target.value})} />
                 
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">

                    <select class="select" onChange={(e)=>setUser({...user, state:e.target.value})}>
                      <option value="1">State</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Banglore">Banglore</option>
                    </select>

                  </div>
                  <div class="col-md-6 mb-4">

                    <select class="select" onChange={(e)=>setUser({...user, city:e.target.value})} >
                      <option value="1">City</option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Banglore">Banglore</option>
                      <option value="Nagpur">Nagpur</option>
                    </select>

                  </div>
                </div>

                <div class="form-outline mb-4">
                <label  for="form3Example9">Pincode</label><br/>
                  <input type="text" id="form3Example9"  onBlur={(e)=> setUser({...user, pincode:e.target.value})} />
                  
                </div>

               

                <div class="form-outline mb-4">
                <label  for="form3Example99">userName</label><br/>
                  <input type="text" id="form3Example99" onBlur={(e)=> setUser({...user, userName:e.target.value})} />
                 
                </div>

                <div class="form-outline mb-4">
                <label  for="form3Example97">Password</label><br/>
                  <input type="password" id="form3Example97"  onBlur={(e)=> setUser({...user, password:e.target.value})}/>
                  
                </div>

                <div class="d-flex justify-content-end pt-3">
                  {/* <button type="button" class="btn btn-light btn-lg">Reset all</button> */}
                  <button type="submit" class="btn btn-warning btn-lg ms-2">Submit form</button>
                 
                </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>

</div>
</>
        
    )
}





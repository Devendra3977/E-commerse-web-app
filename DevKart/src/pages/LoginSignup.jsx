import React, { useState } from 'react'
import BASE_URL from '../config/api'

const LoginSignup = () => {

  const [state, setState] = useState("SignUp");
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }


  const login = async ()=>{
    console.log("Login function executed", formData);
     let responseData;
    await fetch(`${BASE_URL}/login`,{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        'Content-Type':"application/json",
      },
      body: JSON.stringify(formData)
    }).then((response)=> response.json()).then((data)=>{responseData = data});

    if(responseData.success){
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace('/')
    }
    else{
      alert(responseData.error)
    }
  }

   const signup = async ()=>{
    console.log("signup function executed", formData)
    let responseData;
    await fetch(`${BASE_URL}/signup`,{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        'Content-Type':"application/json",
      },
      body: JSON.stringify(formData)
    }).then((response)=> response.json()).then((data)=>{responseData = data});

    if(responseData.success){
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace('/')
    }
    else{
      alert(responseData.error)
    }
  }

  return (
     <section className='w-full h-[100vh] lg:h-[90vh] bg-pink-200 lg:mt-20 flex justify-center items-center'>
     {/* sign up form */}
      <div className='w-[90%] lg:w-[40%] bg-white py-5 px-6 lg:px-10'>
        <h1 className='text-3xl font-semibold mb-8'>{state}</h1>
        <div>
          {state === "SignUp" ? <input type='text' name="username" value={formData.username} onChange={changeHandler} placeholder='Enter Name...' className='w-full border border-gray-400 py-4 px-4 mb-4 focus:outline-pink-300'/>:<></>}
          <input type='email' name='email' value={formData.email} onChange={changeHandler} placeholder='Enter Email...' className='w-full border border-gray-400 py-4  mb-4 px-4 focus:outline-pink-300'/>
          <input type='password' name='password' value={formData.password} onChange ={changeHandler} placeholder='Create Password...' className='w-full border border-gray-400  mb-4 py-4 px-4 focus:outline-pink-300'/>
        </div>
        <button 
        onClick={()=>{state == "Login" ? login() : signup()}}
        className='w-full py-4 px-4 mb-4 bg-red-500 text-white cursor-pointer hover:bg-red-400 active:bg-red-400'>
          Continue
        </button>
        <div className='flex justify-between items-center mb-4'>
          {state == "SignUp" ? <p>Already have an Account ? <span className='cursor-pointer text-red-500 font-semibold' onClick={()=>setState("Login")}>Login Here</span></p> :
          <p>Don't have an Account ? <span className='cursor-pointer text-red-500 font-semibold' onClick={()=>setState("SignUp")}>SignUp Here</span></p>}
        </div>
        <div className='flex justify-start items-center gap-3'>
          <input type='checkbox' id='' name=''/>
          <p>By continuing, I agree to the terms od use & privacy policy.</p>
        </div>
      </div>
     </section>
  )
}

export default LoginSignup

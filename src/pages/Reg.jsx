import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { userRegister } from '../ApiServices/allApis'
import { toast } from 'react-toastify'
function Reg() {
    const [userData,setUserData]=useState({
        email:"",username:"",password:"",first_name:"",last_name:''
    })
    const nav=useNavigate()

    const handleRegister=async()=>{
        console.log(userData)
        const {username,email,password,first_name,last_name}=userData
        if(!username || !email || !password || !first_name || !last_name){
            toast.warning("Enter Valid Inputs")
        }
        else{
            const result=await userRegister(userData)
            if(result.status==201){
                toast.success("Mechanic Registration Successfull")
                setUserData({
                    email:"",username:"",password:"",first_name:"",last_name:''
                })
                nav('/')
            }
            else{
                console.log(result)
                toast.error("Registration Failed")
            }
        }
    }
  return (
    <>
        <div className='w-100 justify-content-center align-items-center d-flex' style={{height:'90vh'}}>
            <div className='w-50 bg-light p-5 border shadow'>
                <h2>Mechanic Registration</h2>
                <form action="">
                <input type="text" onChange={(e)=>{setUserData({...userData,first_name:e.target.value})}} id="f" placeholder='Enter First Name' className='form-control my-3' />
                    <input type="text" onChange={(e)=>{setUserData({...userData,last_name:e.target.value})}} id="l" placeholder='Enter Last Name' className='form-control my-3' />
                    <input type="text" onChange={(e)=>{setUserData({...userData,username:e.target.value})}} placeholder='Enter Username' id='u' className='form-control my-3' />
                    <input type="email" onChange={(e)=>{setUserData({...userData,email:e.target.value})}} placeholder='Enter Email ID' id='e' className='form-control my-3' />
                    <input type="password" onChange={(e)=>{setUserData({...userData,password:e.target.value})}} id="p" placeholder='Enter Password' className='form-control my-3' />
                    <div className='d-flex justify-content-between'>
                        <button type='button' className='btn btn-success' onClick={handleRegister}>Register</button>
                        <Link className='btn btn-warning' to={'/'}>Already a User? Sign In</Link>

                    </div>
                </form> 

            </div>

        </div>
    </>
  )
}

export default Reg
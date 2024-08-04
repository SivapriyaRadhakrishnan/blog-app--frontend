import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SigIn = () => {

    const navigate=useNavigate()
    const[input,setInput]=new useState(
        {"email":"","password":""}
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(input)
        axios.post("http://localhost:3030/signIn",input).then(
            (response)=>{
                    console.log(response.data)
                    if (response.data.status=="INCORRECT PASSWORD") {
                        alert("INCORRECT PASSWORD")
                    } else if(response.data.status=="INVALID EMAIL ID"){
                        alert("INVALID EMAIL ID")
                    }else{
                        let token=response.data.token
                        let userId=response.data.userId
                        console.log(userId)
                        console.log(token)
                        sessionStorage.setItem("userId",userId)                 
                        sessionStorage.setItem("token",token)    
                        navigate("/createPost")             
                     }
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
   

  return (
    <div>
        <div className="container">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Email Id</label>
                        <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control"  name='password' value={input.password} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue}  className="btn btn-success">SignIn</button>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <a href="/signUp" className="btn btn-secondary">new users click here</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SigIn
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewMy = () => {
    const [data,setData]=useState([])
    const [userId,setuserId]=useState({"userId":sessionStorage.getItem("userId")})
    const fetchData=()=>{
        axios.post("http://localhost:3030/viewmy",userId,{headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}}).then(
            (response)=>{
                setData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">                          (value,index)=>{
                                return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div class="card" >  <img src="..." class="card-img-top" alt="..." />
                                            <div class="card-body">zx                                 </div>
                                </div>
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewMy

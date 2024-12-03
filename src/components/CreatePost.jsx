import axios from 'axios'
import React, { useState } from 'react'

const CreatePost = () => {
  const [input,setInput]=useState(
    {
        "userId":sessionStorage.getItem("userId"),
        "Message":""
    }
)
const inputHandler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(input)
    axios.post("http://localhost:3030/create",input,{headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}}).then(
        (response)=>{
            if (response.data.status=="success") {
                alert("Posted successfully")
            } else {
                alert("Something went wrong")
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
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-2">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">POST A MESSAGE</label>
                        <textarea name="Message" value={input.Message} onChange={inputHandler} id="" className="form-control"></textarea>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>POST</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CreatePost
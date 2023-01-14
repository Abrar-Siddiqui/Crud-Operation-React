import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateData = () => {
  const navigate = useNavigate()
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[phone,setPhone] = useState('')
  const HandlerSubmit = (e) => {
    e.preventDefault()
    axios.post('https://63c12eb47165626718749d59.mockapi.io/crud',{
      e_name:name,
      e_mail:email,
      e_phone:phone
    }).then(()=>{
      navigate('/')
    })    
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-5 m-auto card py-4 px-3 my-5 shadow-lg border border-0 bg-light'>
        <h3 className='text-center rounded shadow-lg py-3'>Register Form</h3>
        <form onSubmit={HandlerSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder='Name..' onChange={(e)=>setName(e.target.value)} value={name} />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='E-mail..' onChange={(e)=>setEmail(e.target.value)} value={email} />
            </div>
            <div className="mb-3">
              <input type="number" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder='Mobile No.' onChange={(e)=>setPhone(e.target.value)} value={phone} />
            </div>
            <div className='text-center mb-3'>
              <input type="submit" className='form-control btn btn-primary' value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateData
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const UpdateData = () => {
  const navigate = useNavigate()
  const[id,setId] = useState(0)
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[phone,setPhone] = useState('')
  useEffect(()=>{
    setId(localStorage.getItem('id'))
    setName(localStorage.getItem('name'))
    setEmail(localStorage.getItem('email'))
    setPhone(localStorage.getItem('Phone'))
  },[])
  const handlerupdate = (e) =>{
    e.preventDefault()
    axios.put(`https://63c12eb47165626718749d59.mockapi.io/crud/${id}`,{
      e_name:name,
      e_mail:email,
      e_phone:phone
    })
    .then(()=>{
      navigate('/')
    })
  }
  return (
    <div>
      <div className='container'>
      <div className='row'>
        <div className='col-lg-5 m-auto card py-4 px-3 my-5 shadow-lg border border-0 bg-light'>
        <h3 className='text-center rounded shadow-lg py-3'>Update Form</h3>
        <form onSubmit={handlerupdate}>
            <div className="mb-3">
              <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} id="exampleInputName" aria-describedby="nameHelp" placeholder='Name..'  />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='E-mail..' />
            </div>
            <div className="mb-3">
              <input type="number" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} id="exampleInputName" aria-describedby="nameHelp" placeholder='Mobile No.' />
            </div>
            <div className='text-center mb-3'>
              <input type="submit" className='form-control btn btn-primary' value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
export default UpdateData
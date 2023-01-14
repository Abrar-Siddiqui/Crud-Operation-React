import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  
    const [data,setData] = useState([])
    function getData(){
        axios.get('https://63c12eb47165626718749d59.mockapi.io/crud')
        .then((res)=>{
            setData(res.data);
        })
    }
    useEffect(()=>{
        getData()
    },[])
    const HanderDelete = (id) =>{
        axios.delete(`https://63c12eb47165626718749d59.mockapi.io/crud/${id}`)
        .then(()=>{
            getData()
        })
    }
    const setDataStorage = (id,name,email,phone) =>{
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('email',email);
        localStorage.setItem('Phone',phone)
    }
  return (
    <>
    <div className='container my-4'>
        <div className='row'>
            <div className='col-lg-7 m-auto shadow-lg border border-1'>
            <table className="table ">
                <thead>
                    <tr className='text-center'>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">E-Mail</th>
                    <th scope="col">Phone No.</th>
                    <th scope="col"></th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {
                        data.map((item,i)=>{
                            return(
                                <tr key={i} className="text-center">
                                    <th>{i+1}</th>
                                    <th>{item.e_name}</th>
                                    <th>{item.e_mail}</th>
                                    <th>{item.e_phone}</th>
                                    <th>
                                        <Link to="/update">
                                            <button className='btn btn-warning' onClick={()=>setDataStorage(item.id,item.e_name,item.e_mail,item.e_phone)}>Edit</button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button className='btn btn-danger' onClick={()=>{if(window.confirm("Are You Sure for Delete Data..")){HanderDelete(item.id)}}}>Del</button>
                                    </th>
                                   
                                </tr>
                                    
                            )
                        })
                    }
                   
                </tbody>
            </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
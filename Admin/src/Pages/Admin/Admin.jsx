import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes ,Route } from 'react-router-dom'
import Addproduct from '../../Components/Addproduct/Addproduct'
import Listproduct from '../../Components/Listproduct/Listproduct'

const Admin = () => {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Addproduct/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/listproduct' element={<Listproduct/>}/>
      </Routes>
    </div>
  )
}

export default Admin

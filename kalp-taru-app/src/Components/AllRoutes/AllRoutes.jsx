import React from 'react'
import { Route,Routes } from 'react-router-dom'
import BestSellers from '../Pages/BestSellers'
import CoustomerService from '../Pages/CoustomerService'
import Electronics from '../Pages/Electronics'
import Fashion from '../Pages/Fashion'
import Home from '../Pages/Home'
import HomeAndKitchen from '../Pages/HomeAndKitchen'
import Login from '../Pages/Login'
import Mobiles from '../Pages/Mobiles'
import PageNotFound from '../Pages/PageNotFound'
import Pay from '../Pages/Pay'
import Prime from '../Pages/Prime'
import TodaysDeals from '../Pages/TodaysDeals'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bestsellers" element={<BestSellers/>} />
        <Route path="/mobiles" element={<Mobiles/>} />
        <Route path="/todaysdeals" element={<TodaysDeals/>} />
        <Route path="/coustomerservice" element={<CoustomerService/>} />
        <Route path="/electronics" element={<Electronics/>} />
        <Route path="/prime" element={<Prime/>} />
        <Route path="/fashion" element={<Fashion/>} />
        <Route path="/pay" element={<Pay/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/homeandkitchen" element={<HomeAndKitchen/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes

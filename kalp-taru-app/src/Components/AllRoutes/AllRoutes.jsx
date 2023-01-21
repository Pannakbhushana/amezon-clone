import React from 'react'
import { Route,Routes } from 'react-router-dom'
import BestSellers from '../Pages/BestSellers'
import BestSellersSinglePage from '../Pages/BestSellersSinglePage'
import Cart from '../Pages/Cart'

import Electronics from '../Pages/Electronics'
import ElectronicsSinglePage from '../Pages/ElectronicsSinglePage'
import Fashion from '../Pages/Fashion'
import FashionSinglePage from '../Pages/FashionSinglePage'
import Home from '../Pages/Home'
import HomeAndKitchen from '../Pages/HomeAndKitchen'
import HomeAndKitchenSinglePage from '../Pages/HomeAndKitchenSinglePage'

import Mobiles from '../Pages/Mobiles'
import MobilesSinglePage from '../Pages/MobilesSinglePage'
import PageNotFound from '../Pages/PageNotFound'

import SignUp from '../Pages/SignUp'
import TodaysDeals from '../Pages/TodaysDeals'
import TodaysDealsSinglePage from '../Pages/TodaysDealsSinglePage'
import UserLogin from '../Pages/UserLogin'
import PrivateRoute from './PrivateRoute'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/bestsellers" element={<PrivateRoute><BestSellers/></PrivateRoute>} />
        <Route path="/bestsellers/:id" element={<PrivateRoute><BestSellersSinglePage/></PrivateRoute>} />

        <Route path="/mobiles" element={<PrivateRoute><Mobiles/></PrivateRoute>} />
        <Route path="/mobiles/:id" element={<PrivateRoute><MobilesSinglePage/></PrivateRoute>} />

        <Route path="/todaysdeals" element={<PrivateRoute><TodaysDeals/></PrivateRoute>} />
        <Route path="/todaysdeals/:id" element={<PrivateRoute><TodaysDealsSinglePage/></PrivateRoute>} />

        <Route path="/electronics" element={<PrivateRoute><Electronics/></PrivateRoute>} />
        <Route path="/electronics/:id" element={<PrivateRoute><ElectronicsSinglePage/></PrivateRoute>} />

        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />   
        <Route path="/fashion" element={<PrivateRoute><Fashion/></PrivateRoute>} /> 
        <Route path="/fashion/:id" element={<PrivateRoute><FashionSinglePage/></PrivateRoute>} /> 

        <Route path="/signup" element={<SignUp/>} />
        <Route path="/userlogin" element={<UserLogin/>} />
        <Route path="/homeandkitchen" element={<PrivateRoute><HomeAndKitchen/></PrivateRoute>} />
        <Route path="/homeandkitchen/:id" element={<PrivateRoute><HomeAndKitchenSinglePage/></PrivateRoute>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes

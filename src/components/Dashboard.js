import React from 'react';
import SideBarDashboard from './SideBarDashboard.js';
import Header from './Header.js';
import Footer from './Footer.js';
import "../../src/App.scss";
import ShowBrands from '../pages/ShowBrands.js';
import ShowProducts from '../pages/ShowProducts.js';
import ShowUsers from '../pages/ShowUsers.js';
import HomeDashboard from '../pages/HomeDashboard.js';
import { Route, Routes } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container-fluid">
        <Header />
    <div className='ContenedorSideBar flex'>
        <SideBarDashboard />
        <div className='container-fluid'>
        <Routes exact element={<Dashboard />} >
            <Route path="/" exact element={<HomeDashboard /> } />
            <Route path="/marcas" exact element={<ShowBrands />} />
            <Route path="/productos" exact element={<ShowProducts />} />
            <Route path="/usuarios" exact element={<ShowUsers />} />
          </Routes>
        </div>
    </div>
        <Footer />    
    </div>
  )
}

export default Dashboard
import React from 'react';
import SideBarDashboard from './SideBarDashboard.js';
import "../../src/App.scss";
import ShowBrands from '../pages/ShowBrands.js';
import ShowProducts from '../pages/ShowProducts.js';
import ShowUsers from '../pages/ShowUsers.js';
import HomeDashboard from '../pages/HomeDashboard.js';
import { Route, Routes } from 'react-router-dom';
import ShowCategorys from '../pages/ShowCategorys.js';
import Header from "./Header.js";
import Cookies from "universal-cookie";

function Dashboard() {
  const cookies = new Cookies()
  return (
    <div className="container-fluid p-0">
      <Header />
      <h4>Usuario:{cookies.get("user")} </h4>

      <div className='ContenedorSideBar flex'>
          <SideBarDashboard />
        <div className='container-fluid'>
          <Routes exact element={<Dashboard />} >
            <Route path="/" exact element={<HomeDashboard /> } />
            <Route path="/marcas" exact element={<ShowBrands />} />
            <Route path="/productos" exact element={<ShowProducts />} />
            <Route path="/usuarios" exact element={<ShowUsers />} />
            <Route path="/categorias" exact element={<ShowCategorys />} />
          </Routes>
        </div>
      </div>    
    </div>
  )
}

export default Dashboard
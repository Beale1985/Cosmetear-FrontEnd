import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"

function SideBarDashboard() {
  return (
    <div className='sidebarDashboard'>
        <ul>
            <li>
                <Link to="/dashboard"><FaIcons.FaHome className='me-2'/>Dashboard</Link>
            </li>
            <li>
                <Link to="/dashboard/marcas"><FaIcons.FaCopyright className='me-2'/>Marcas</Link>
            </li>
            <li>
                <Link to="/dashboard/productos"><FaIcons.FaShoppingCart className='me-2'/>Productos</Link>
            </li>
            <li>
                <Link to="/dashboard/usuarios"><FaIcons.FaUserAlt className='me-2'/>Usuarios</Link>
            </li>
            <li>
                <Link to="/dashboard/categorias"><FaIcons.FaUserAlt className='me-2'/>Categorías</Link>
            </li>
        </ul>
    </div>
  )
}

export default SideBarDashboard
import React from 'react';
import { Link } from 'react-router-dom';

function Product({ id, name, category, use, sub_category, logo_image }) {

  return (
    <div className='card p-1 mb-5 bg-body rounded' style={{boxShadow: '1px 2px 9px #C5B4A3',height:"90%"}}> 
      <figure className='m-0'>
        <div className='contenedor d-flex justify-content-center' key={ id }>
          <Link to={`/busqueda/productos/detalle/${id}`}>
            <img className='imagenMarca' src={logo_image} alt={name} />
              <div className='capa'>
                <h3>Ver producto</h3>
              </div>
          </Link>  
        </div>
      </figure> 

      <hr className='m-1'/>
      
      <div className='card-body text-center p-1'>
            <h4 className='card-title'>{name}</h4>
            <p className='card-text text-secondary m-2'>Categoría: {category}</p>
            <p className='card-text text-secondary m-2'>Uso: {use}</p>
            <p className='card-text text-secondary m-2'>Sub Categoría: {sub_category}</p>
      </div>
    </div> 
  )
}

export default Product
import React from 'react';
import { Link } from 'react-router-dom';

function Brand({name, origin, cruelty_free, cruelty_free_certificate, logo_image, webpage,id, vegan}) {
  return (
    <div className='card p-1 mb-5 bg-body rounded' style={{boxShadow: '1px 2px 9px #C5B4A3',height:"90%"}}>
      <figure className='m-0'>
      <div className='contenedor d-flex justify-content-center' >
        <a href={ webpage } target="_blank" rel="noopener noreferrer">
          <img src={logo_image} alt={name}/>
            <div className='capa'>
              <h3>Sitio Web</h3>
            </div>
        </a>  
      </div>
      </figure>

      <hr className='m-1'/>

      <div className='card-body text-center p-1'>
        {/* <h4 className='card-title'>{name}</h4> */}
        <p className='card-text text-secondary m-2'>Origen: {origin}</p>
        <p className='card-text text-secondary m-2'>Cruelty free: {cruelty_free}</p>
        <p className='card-text text-secondary m-2'>Cruelty free Certificado: {cruelty_free_certificate}</p>
        <p className='card-text text-secondary m-2'>Vegano: {vegan}</p>
        <div className='row'>
          <div className='col'>
            <Link to={`/busqueda/marcas/${id}`} className='btn btn-secondary rounded-2' > Detalle</Link>
          </div>
          <div className='col'>
            <Link to={`/busqueda/productos/${id}`} className='btn btn-secondary rounded-2' > Productos</Link>
          </div>       
        </div>
      </div> 
    </div> 
  )
}

export default Brand
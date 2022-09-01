import React from 'react';
import { Link } from 'react-router-dom';

function Product({ name, idproduct, idbrand, origen, cruelty_free, cruelty_free_certificate, vegano }) {
  return (
    <div className='card shadow p-3 mb-5 bg-body rounded'>
        <div className='card-body text-center'>
            <h2 className='card-title'>{idbrand}</h2>
            <h4 className='card-title'>{name}</h4>
            <p className='card-text text-secondary'>Origen: {origen}</p>
            <p className='card-text text-secondary'>Cruelty free: {cruelty_free}</p>
            <p className='card-text text-secondary'>Cruelty free Certificado: {cruelty_free_certificate}</p>
            <p className='card-text text-secondary'>Vegano: {vegano}</p>
            <br />
            <Link to={`/busqueda/productos/detalle/${idproduct}`} className='btn btn-secondary rounded-2' > Detalle</Link>
        </div> 
    </div> 
  )
}

export default Product
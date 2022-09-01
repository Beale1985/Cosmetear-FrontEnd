import React from 'react';
import { Link } from 'react-router-dom';

function Brand({name, origen, cruelty_free, cruelty_free_certificate, imagen_logo, webpage,idbrand, vegano}) {
  return (
    <div className='card shadow p-3 mb-5 bg-body rounded'>
        <img src={ imagen_logo } alt='Imagen Marca' width={"50%"} className=" mx-auto" />
        <div className='card-body text-center'>
            <h4 className='card-title'>{name}</h4>
            <p className='card-text text-secondary'>Origen: {origen}</p>
            <p className='card-text text-secondary'>Cruelty free: {cruelty_free}</p>
            <p className='card-text text-secondary'>Cruelty free Certificado: {cruelty_free_certificate}</p>
            <p className='card-text text-secondary'>Vegano: {vegano}</p>
            <a href={ webpage } target="_blank" rel="noopener noreferrer" className='btn btn-secondary rounded-2'>
                Página Web
            </a><br />
            <br />
            <Link to={`/busqueda/marcas/${idbrand}`} className='btn btn-secondary rounded-2' > Detalle</Link><br />
            <br />
            <Link to={`/busqueda/productos/${idbrand}`} className='btn btn-secondary rounded-2' > Ver Productos</Link>
        </div> 
    </div> 
  )
}

export default Brand
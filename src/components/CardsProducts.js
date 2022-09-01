import {React, useEffect, useState} from 'react';
import Product from './Product.js';
import Brand from './Brand.js';
import { useParams, useNavigate } from "react-router-dom";

function CardsProducts() {

  const [products, setProduct] = useState([]);
  const {id} = useParams() 
  const navigate =useNavigate() 

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const productosFiltradosMarca = products.filter(brand => {
    return brand.idbrand == id
  })

  return (
    <div className='conteiner-fluid contenedorDeBusquedas'><br/>

    <h2>{id}</h2>

      <div className='row p-2'>
        {
          productosFiltradosMarca.map(product => (
            <div className='col-md-3' key={product.idproduct}>
              <Product 
                  name={product.name}
                  idproduct={product.idproduct}
                  origen={product.origen}
                  cruelty_free={product.cruelty_free}
                  cruelty_free_certificate={product.cruelty_free_certificate}
                  vegano={product.vegano}
              />
            </div>
          ))
        }
      </div>
      <button type="reset" className="btn btn-primary" onClick={() => navigate(-1)}>Volver</button>
      </div>
  )
}

export default CardsProducts
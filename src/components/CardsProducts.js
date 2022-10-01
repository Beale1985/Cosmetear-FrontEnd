import {React, useEffect, useState} from 'react';
import Product from './Product.js';
import { useParams, useNavigate } from "react-router-dom";
import Header from './Header';

function CardsProducts() {

  const [products, setProduct] = useState([]);
  const {id} = useParams() 
  const navigate =useNavigate() 

  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const productosFiltradosMarca = products.filter(brand => 
    brand.idbrand == id
  )

  return (
    <div>
      <Header />
    <div className="conteiner-fluid m-3"><br/>
      <div className='row p-2'>
        {
          productosFiltradosMarca.map(product => (
            <div className='col-md-3' key={product.id}>
              <Product
                  logo_image={product.Brand.logo_image}
                  name={product.name}
                  idbrand={product.idbrand}
                  id={product.id}
                  use={product.Use.name}
                  category={product.Category.name}
                  sub_category={product.SubCategory.id}
              />
            </div>
          ))
        }
      </div>
      <button type="reset" className="btn btn-secondary" style={{boxShadow: '1px 2px 9px #C5B4A3'}} onClick={() => navigate(-1)}>Volver</button>
      </div>
      </div>
  )
}

export default CardsProducts
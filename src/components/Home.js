import { React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SlideShowBrands from "./SlidesShowBrands.js"

const Home = () => {

  const [cruelty_free_certificate, setCrueltyFreeCertificateBrands] = useState([]);

  useEffect(() => {
    axios
        .get("http://localhost:8000/crueltyfreecertificate")
        .then((response) => {
        setCrueltyFreeCertificateBrands(response.data);
    })
        .catch((error) => {
        console.log(error);
    });
}, []
);

    return(
        <main>
          <header>    
            <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{zIndex: 2000}}>
                <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarExample01">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item me-3 me-lg-0 text-white">
                            <a style={{textDecoration: 'none', color:"white", fontWeight: 'bold'}} href="/">HOME</a>
                        </li>
                    </ul>
                  </div>
                </div>
              </nav>
            <div id="intro" className="bg-image shadow-2-strong">
              <div className="mask h-100" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                <div className="container d-flex align-items-center justify-content-center text-center h-100">
                  <div className="text-white">
                      <img src={"https://i.postimg.cc/jS25tX8G/Logo-Cosmetear.png"} alt="Logo" style={{width: "300px"}}/><br/>
                      <br/>
                        <h1 className="mb-3">Los productos que buscás en un sólo lugar.</h1>
                        <h4 className="mb-4">Cosmetiemos Juntos</h4>
                        <h5 className="mb-4">¿Qué tipo de búsqueda querés realizar?</h5>
                          <a className="btn btn-outline-light btn-lg m-2" href="/busqueda/marcas/" role="button"
                            rel="nofollow">Búsqueda por Marca</a>
                            <a className="btn btn-outline-light btn-lg m-2" href="/busqueda/categorias/" role="button"
                            rel="nofollow">Búsqueda por Categorías</a>
                  </div>
                </div>
              </div>
            </div>
          </header>
            <div className="container mt-5 ">
                <section>
                  <div className="row align-items-center justify-content-around">
                    <div className="col-3 p-0" style={{backgroundColor: "rgba(255, 255, 255, 0.9)"}}>
                      <div className="bg-image hover-overlay ripple shadow-2-strong" data-mdb-ripple-color="light" style={{boxShadow: '2px 4px 18px #C5B4A3'}}>
                        <SlideShowBrands />
                          <a href="#!">
                            <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                          </a>
                      </div>
                    </div>
                    <div className="col-md-7 gx-2 mb-2">
                      <h4><strong>Todas las marcas</strong></h4>
                          <p className="text-muted mb-2">
                            En Cosmetear vas a poder encontrar todas las marcas dedicadas al cuidado de la
                            piel. Además podrás conocer cuales son Cruelty Free y sus certificaciones.
                          </p>
                          <p className="mb-1"><strong>Productos</strong></p>
                          <p className="text-muted mt-1">
                            Si estás buscando un producto, realizá una búsqueda por productos y empezá a 
                            filtrar por lo que estás necesitando.
                          </p>
                    </div>
                  </div>
                </section>
      
            <hr className="my-5" />
          
            <section className="text-center">
                <h4 className="mb-5"><strong>Marcas Cruelty Free Certificated</strong></h4>
                <div className="row">
                  {
                    cruelty_free_certificate.map((brand) =>  
                  <div className="col-lg-4 col-md-12 mb-4" key={brand.id} >
                  <div className="card" style={{boxShadow: '2px 4px 18px #C5B4A3'}}>
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src={brand.logo_image} alt={brand.name} className="img-fluid" />
                    </div>
                      <div className="card-body">
                        <h5 className="card-title">{brand.name}</h5>
                          <p className="card-text">
                            La marca tiene una certificación {brand.cruelty_free_certificate}
                          </p>
                          <Link to={`/busqueda/marcas/${brand.id}`} className='btn btn-secondary rounded-2'> Detalle</Link><br />
                      </div>
                  </div>
                  </div>
                  )}
                </div>
              </section> 
      </div>
  </main>
)
}

export default Home
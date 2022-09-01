import {React, useEffect, useState} from 'react';
import Brand from './Brand.js';

function CardsBrands() {

  const [brands, setBrand] = useState([]);
  const [search, setSearch] = useState("");
  const [cruelty_free, setCrueltyFree] = useState("");
  const [cruelty_free_certificate, setCrueltyFreeCertificate] = useState("");
  const [vegano, setVegano] = useState("");

    const searcher = (e) => {
        setSearch(e.target.value)
      }
    
    const cruelty_free_searcher = (e) => {
      setCrueltyFree(e.target.checked)
    }

    const cruelty_free_certificate_searcher = (e) => {
      setCrueltyFreeCertificate(e.target.checked)
    }

    const vegano_searcher = (e) => {
      setVegano(e.target.checked)
    }

  useEffect(() => {
    fetch("http://localhost:8000/brands")
      .then((response) => response.json())
      .then((data) => {
        setBrand(data);
      })
      .catch((error) => console.error(error));
  }, []);

  let result =[]

  const tipo = typeof cruelty_free
  
  console.log (tipo)

  //Busquedas por marcas y filtros (funciona la logica pero es un desastre el código)

  if(!search && !cruelty_free && !cruelty_free_certificate && !vegano) {
    result = brands
  } else if (!search && cruelty_free && !cruelty_free_certificate && !vegano){
    result = brands.filter( (dato) =>
    dato.cruelty_free === "Si"
    )
  } else if (!search && cruelty_free && cruelty_free_certificate && !vegano){
    result = brands.filter( (dato) =>
    dato.cruelty_free === "Si" && dato.cruelty_free_certificate !== "No"
    )
  } else if (!search && cruelty_free && cruelty_free_certificate && vegano){
    result = brands.filter( (dato) =>
    dato.cruelty_free === "Si" && dato.cruelty_free_certificate !== "No" && dato.vegano === "Si"
    )
  } else if (!search && !cruelty_free && !cruelty_free_certificate && vegano){
    result = brands.filter( (dato) =>
    dato.vegano === "Si"
    )
  } else if (!search && cruelty_free && !cruelty_free_certificate && vegano){
    result = brands.filter( (dato) =>
    dato.cruelty_free === "Si" && dato.vegano === "Si"
    )
  } else if (!search && !cruelty_free && cruelty_free_certificate && !vegano){
    result = brands.filter( (dato) =>
    dato.cruelty_free_certificate !== "No"
    )
  } else if (!search && !cruelty_free && cruelty_free_certificate && vegano){
    result = brands.filter( (dato) =>
    dato.cruelty_free_certificate !== "No" && dato.vegano === "Si"
    )
  } else if (search && !cruelty_free && !cruelty_free_certificate && !vegano){
    result = brands.filter( (dato) =>
    dato.name.toUpperCase().includes(search.toLocaleUpperCase())
    )
  } else if (search && cruelty_free && !cruelty_free_certificate && !vegano){
    result = brands.filter( (dato) =>
    dato.cruelty_free === "Si" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
    )
  } else if (search && cruelty_free && cruelty_free_certificate && !vegano){
    result = brands.filter( (dato) =>
    dato.cruelty_free === "Si" && dato.cruelty_free_certificate !== "No" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
    )
  } else if (search && cruelty_free && cruelty_free_certificate && vegano){
    result = brands.filter( (dato) =>
    dato.cruelty_free === "Si" && dato.vegano === "Si" && dato.cruelty_free_certificate !== "No" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
    )
  } else if (search && !cruelty_free && cruelty_free_certificate && !vegano){
    result = brands.filter( (dato) =>
    dato.cruelty_free_certificate !== "No" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
    )
  } else if (search && !cruelty_free && cruelty_free_certificate && vegano){
    result = brands.filter( (dato) =>
    dato.cruelty_free_certificate !== "No" && dato.vegano === "Si" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
    )
  } else if (search && cruelty_free && cruelty_free_certificate && !vegano){
    result = brands.filter( (dato) =>
    dato.cruelty_free === "Si" && dato.cruelty_free_certificate !== "No" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
    )
  } else if (search && !cruelty_free && !cruelty_free_certificate && vegano){
    result = brands.filter( (dato) =>
    dato.vegano === "Si" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
    )
  } else if (search && !cruelty_free && cruelty_free_certificate && vegano){
    result = brands.filter( (dato) =>
    dato.cruelty_free_certificate !== "No" && dato.vegano === "Si" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
    )
  } else if (search && cruelty_free && cruelty_free_certificate && vegano){
    result = brands.filter( (dato) =>
    dato.cruelty_free === "Si" && dato.cruelty_free_certificate !== "No" && dato.vegano === "Si" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
    )
  }
  // if (search) {
  //   result = brands.filter( (dato) =>
  //   dato.name.toUpperCase().includes(search.toLocaleUpperCase())
  //    )
  //    if (cruelty_free == true && cruelty_free_certificate == true && vegano == true) {
  //     result = brands.filter( (dato) =>
  //     dato.cruelty_free == "Si" && dato.cruelty_free_certificate !== "No" && dato.vegano == "Si" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
  //      )
  //   }
  //   if (cruelty_free == true && cruelty_free_certificate == true){
  //     result = brands.filter( (dato) =>
  //     dato.cruelty_free == "Si" && dato.cruelty_free_certificate !== "No" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
  //      )
  //   }
  //   if (cruelty_free == true && vegano == true){
  //     result = brands.filter( (dato) =>
  //     dato.cruelty_free == "Si" && dato.vegano == "Si" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
  //      )
  //   }
  //   if (cruelty_free_certificate == true && vegano == true){
  //     result = brands.filter( (dato) =>
  //     dato.cruelty_free_certificate !== "No" && dato.vegano == "Si" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
  //      )
  //   }
  //   if (cruelty_free == true){
  //     result = brands.filter( (dato) =>
  //     dato.cruelty_free == "Si" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
  //      )
  //   }
  //   if (cruelty_free_certificate == true){
  //     result = brands.filter( (dato) =>
  //     dato.cruelty_free_certificate !== "No" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
  //      )
  //   }
  //   if (vegano == true){
  //     result = brands.filter( (dato) =>
  //     dato.vegano == "Si" && dato.name.toUpperCase().includes(search.toLocaleUpperCase())
  //      )
  //   }
  // } 
  // else if (cruelty_free == true && cruelty_free_certificate == true && vegano == true) {
  //   result = brands.filter( (dato) =>
  //   dato.cruelty_free == "Si" && dato.cruelty_free_certificate !== "No" && dato.vegano == "Si"
  //    )
  // }
  // else if (cruelty_free == true && cruelty_free_certificate == true) {
  //   result = brands.filter( (dato) =>
  //   dato.cruelty_free == "Si" && dato.cruelty_free_certificate !== "No"
  //    )
  // }
  // else if (cruelty_free == true && vegano == true) {
  //   result = brands.filter( (dato) =>
  //   dato.cruelty_free == "Si" && dato.vegano == "Si"
  //    )
  // }
  // else if (cruelty_free_certificate == true && vegano == true) {
  //   result = brands.filter( (dato) =>
  //   dato.cruelty_free_certificate !== "No" && dato.vegano == "Si"
  //    )
  // }
  // else if (cruelty_free == true) {
  //   result = brands.filter( (dato) =>
  //   dato.cruelty_free == "Si"
  //    )
  // }
  // else if (cruelty_free_certificate == true) {
  //   result = brands.filter( (dato) =>
  //   dato.cruelty_free_certificate !== "No"
  //    )
  // }
  // else if (vegano == true) {
  //   result = brands.filter( (dato) =>
  //   dato.vegano == "Si"
  //    )
  // }

  return (
    <div className='conteiner-fluid contenedorDeBusquedas'><br/>
      <div className="container shadow mb-3 rounded col-6 pt-2 contenedorDeInputsBusquedas">
                <input className="form-control shadow w-55 m-auto rounded text-center" onChange={searcher} value={search} type="search" placeholder="Busqueda por Marca" aria-label="Search" />
                <form name='checkboxFiltrados' encType='text/plain'>
                <div className="d-flex p-2 bd-highlight justify-content-center">
                    <div className="form-check form-check-inline content-">
                        <input className="form-check-input" type="checkbox" onClick={cruelty_free_searcher} value={cruelty_free} />
                        <label className="form-check-label">Cruelty Free</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" onClick={cruelty_free_certificate_searcher} value={cruelty_free_certificate} />
                        <label className="form-check-label">Cruelty Free Certificado</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" onClick={vegano_searcher} value={vegano} />
                        <label className="form-check-label">Vegano</label>
                    </div>
                </div>
                </form>
          </div>
    
      <div className='row p-2'>
        {
          result.map(brand => (
            <div className='col-md-3' key={brand.idbrand}>
              <Brand  name={brand.name}
                  origen={brand.origen}
                  cruelty_free={brand.cruelty_free}
                  cruelty_free_certificate={brand.cruelty_free_certificate}
                  vegano={brand.vegano}
                  imagen_logo={brand.imagen_logo}
                  webpage={brand.webpage}
                  idbrand={brand.idbrand}
              />
            </div>
          ))
        }
      </div>
      </div>
  )
}

export default CardsBrands
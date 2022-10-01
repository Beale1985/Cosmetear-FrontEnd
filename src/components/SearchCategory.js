import {React, useState, useEffect, useMemo} from 'react';
import Header from "./Header.js"
import Product from "./Product.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchCategory = () => {

        // const [products, setProduct] = useState([]);
        const [todos, setTodos] = useState([]);
        const [searchTerm, setSearchTerm] = useState("");
        const [searchBrand, setSearchBrand] = useState("");
        const [categorys, setCategorys] = useState([]);
        const [selectedCategory, setSelectedCategory] = useState([]);
        const [uses, setUses] = useState([]);
        const [selectedUse, setSelectedUse] = useState([]);
        const [subcategorys, setSubCategorys] = useState([]);
        const [selectedSubCategory, setSelectedSubCategory] = useState([]);

        const category_searcher = (e) => {
            contenedorRoutesCategorys.style.display="block"
            setSelectedCategory(e.target.value)
            setCurrentPage(1)
          }
        
        const use_searcher = (e) => {
            contenedorRoutesUses.style.display="block"
            setSelectedUse(e.target.value)
        }

        const subCategory_searcher = (e) => {
            contenedorRoutesSubCategorys.style.display="block"
            setSelectedSubCategory(e.target.value)
        }

        const BackCategorys = (e) => {
            contenedorCategorias.style.display="block"
            contenedorRoutesCategorys.style.display="none"
            contenedorUso.style.display="none"
            contenedorSubCategorias.style.display="none"
            contenedor_sin_categorias.style.display="none"
            setSelectedCategory ("")
            setSelectedUse ("")
            setSelectedSubCategory("")
        }

        const BackUses = (e) => {
            contenedorUso.style.display="block"
            contenedor_sin_categorias.style.display="none"
            contenedorSubCategorias.style.display="none"
            contenedorRoutesSubCategorys.style.display="none"
            setSelectedUse ("")
            setSelectedSubCategory("")
        }

        //Set de la paginación
        const [currentPage, setCurrentPage] = useState(1);
        const [totalTodos, setTotalTodos] = useState(0);
        const todosPerPage = 8;

        const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
            pageNumbers.push(i);
            }

            const contenedorCategorias = document.getElementById("contenedor_de_categorias");
            const contenedorUso = document.getElementById("contenedor_uso");
            const contenedorSubCategorias = document.getElementById("contenedor_de_sub_categoria");
            const contenedorRoutesCategorys = document.getElementById("routesSearchCategorys");
            const contenedorRoutesUses = document.getElementById("routesSearchUses");
            const contenedorRoutesSubCategorys = document.getElementById("routesSearchSubCategorys");
            const botonCategorias = document.getElementById("botonCategorias");
            const botonZonadeAplicacion = document.getElementById("botonZonadeAplicacion");
            const contenedor_sin_categorias = document.getElementById("contenedor_sin_categorias");
            

    const todosData = useMemo(() => {
        let computedTodos = todos;
        

        if (searchTerm) {
            computedTodos = computedTodos.filter(
                todo =>
                todo.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (searchBrand) {
            computedTodos = computedTodos.filter(
                todo =>
                todo.Brand.name.toLowerCase().includes(searchBrand.toLowerCase())
            );
        }

        if (selectedCategory.includes("Limpiador")){
            setUses([{
                id: 0,
                name: "Facial"},
                { 
                id:1,
                name: "Corporal"
            }]) 
            contenedorCategorias.style.display="none"
            contenedorUso.style.display="block"
            computedTodos = computedTodos.filter(
                    todo =>
                    todo.Category.name === selectedCategory
            );
            if (selectedUse.includes("Facial")){
                setSubCategorys([{
                    id: 0,
                    name: "Gel de Limpieza"},
                    { 
                    id:1,
                    name: "Emulsión/Leche de Limpieza"
                },
                    { 
                    id:2,
                    name: "Agua Micelar"
                },
                    { 
                    id:3,
                    name: "Espuma"
                },
                    { 
                    id:4,
                    name: "Bálsamos"
                },
                    { 
                    id:5,
                    name: "Bifásicos"
                },
                { 
                    id:6,
                    name: "En Polvo"
                }]) 
                contenedorUso.style.display="none"
                contenedorSubCategorias.style.display="block"
                botonZonadeAplicacion.style.display="block"
                botonCategorias.style.display="none"
                computedTodos = computedTodos.filter(
                    todo =>
                todo.Use.name === selectedUse
            )
                if (selectedSubCategory.length > 0){
                    computedTodos = computedTodos.filter(
                        todo =>
                    todo.SubCategory.name === selectedSubCategory
                    )
                }
            }
            if (selectedUse.includes("Corporal")){
                contenedorUso.style.display="block"
                
                computedTodos = computedTodos.filter(
                    todo =>
                todo.Use.name === selectedUse
                )
            }
            
        }

        if (selectedCategory.includes("SCRUB") ){
            setUses([{
                id: 0,
                name: "Facial"},
                { 
                id:1,
                name: "Corporal"
            },
            { 
                id:1,
                name: "Labios"
            }]) 
            contenedorCategorias.style.display="none"
            contenedorUso.style.display="block"
            computedTodos = computedTodos.filter(
                    todo =>
                    todo.Category.name === selectedCategory
            );
            if (selectedUse.length > 0){
                computedTodos = computedTodos.filter(
                    todo =>
                    todo.Use.name === selectedUse
            );
            }
        }

        if (selectedCategory.includes("Hidratante") ){
            setUses([{
                id: 0,
                name: "Facial"},
                { 
                id:1,
                name: "Corporal"
            },
            { 
                id:2,
                name: "Facial y Corporal"
            },
            { 
                id:3,
                name: "Manos"
            }]) 
            contenedorCategorias.style.display="none"
            contenedorUso.style.display="block"
            computedTodos = computedTodos.filter(
                    todo =>
                    todo.Category.name === selectedCategory
            );
            if (selectedUse.length > 0){
                computedTodos = computedTodos.filter(
                    todo =>
                    todo.Use.name === selectedUse
            );
            }
        }

        if (selectedCategory.includes("Tónico") ){
            setSubCategorys([{
                id: 0,
                name: "Agua de Rosas"},
                { 
                id:1,
                name: "Manzanilla"
            },
                { 
                id:2,
                name: "Cetella Asiática"
            },
                { 
                id:3,
                name: "Niacinamida"
            }])
            contenedorCategorias.style.display="none"
            contenedorUso.style.display="none"
            contenedorSubCategorias.style.display="block"
            botonCategorias.style.display="block"
            botonZonadeAplicacion.style.display="none"
            computedTodos = computedTodos.filter(
                todo =>
                todo.Category.name === selectedCategory
        );
            if (selectedSubCategory.length > 0){
                computedTodos = computedTodos.filter(
                    todo =>
                    todo.SubCategory.name === selectedSubCategory
            );
        }
        }

        if (selectedCategory.includes("SERUM") ){
            setSubCategorys([{
                id: 0,
                name: "Hidratante"},
                { 
                id:1,
                name: "Antioxidante"
            },
                { 
                id:2,
                name: "Niacinamida al 10% ó más"
            }])
            contenedorCategorias.style.display="none"
            contenedorUso.style.display="none"
            contenedorSubCategorias.style.display="block"
            botonCategorias.style.display="block"
            botonZonadeAplicacion.style.display="none"
            computedTodos = computedTodos.filter(
                todo =>
                todo.Category.name === selectedCategory
        );
            if (selectedSubCategory.length > 0){
                computedTodos = computedTodos.filter(
                    todo =>
                    todo.SubCategory.name === selectedSubCategory
            );
        }
        }

        if (selectedCategory.includes('Contorno de Ojos') || 
            selectedCategory.includes('Esencia') ||
            selectedCategory.includes('Labios')){
            contenedorCategorias.style.display="none"
            contenedorUso.style.display="none"
            contenedorSubCategorias.style.display="none"
            botonCategorias.style.display="none"
            contenedor_sin_categorias.style.display="block"
            botonZonadeAplicacion.style.display="none"
            computedTodos = computedTodos.filter(
                todo =>
                todo.Category.name === selectedCategory
        );
        }

    setTotalTodos(computedTodos.length);

    //Current Page slice
    return computedTodos.slice(
        (currentPage - 1) * todosPerPage,
        (currentPage - 1) * todosPerPage + todosPerPage
    );
    }, [todos, currentPage, searchTerm, searchBrand, selectedCategory, selectedUse, selectedSubCategory]);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        fetch("/uses")
          .then((response) => response.json())
          .then((data) => {
            setUses(data);
          })
          .catch((error) => console.error(error));
      }, []);

  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("/categorys")
      .then((response) => response.json())
      .then((data) => {
        setCategorys(data);
      })
      .catch((error) => console.error(error));
  }, []);

  

  useEffect(() => {
    fetch("/subcategorys")
      .then((response) => response.json())
      .then((data) => {
        setSubCategorys(data);
      })
      .catch((error) => console.error(error));
  }, []);

    return(
        <div>
            <Header />
            <div className="conteiner-fluid m-3">
                <div className="container mb-3 rounded col-8 contenedorDeInputsBusquedas justify-content-center" style={{boxShadow: '2px 4px 18px #C5B4A3', backgroundColor: "#D5CCC4"}}>
                <label htmlFor="search" className="form-label" />
                    <input style={{boxShadow: '2px 4px 18px #C5B4A3', width: "50%"}}
                    type="text"
                    className="form-control m-auto text-center"
                    id="search"
                    placeholder="Buscar por Marca"
                    value={searchBrand}
                    onChange={(e) => {
                    setSearchBrand(e.target.value);
                    setCurrentPage(1);
                    }}
                />
                <label htmlFor="search" className="form-label" />
                    <input style={{boxShadow: '2px 4px 18px #C5B4A3', width: "50%"}}
                    type="text"
                    className="form-control m-auto text-center"
                    id="search"
                    placeholder="Buscar por Producto"
                    value={searchTerm}
                    onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                    }}
                />

                <div id="contenedor_sin_categorias" style={{display:"none"}} className="container text-center contenedorDeInputsBusquedas">
                    <button onClick={BackCategorys} className='btn btn-secondary rounded-2 m-2'>Volver a Categorías</button>
                </div>
                <div id="contenedor_de_categorias" className="container text-center contenedorDeInputsBusquedas">
                
                <hr className='mt-3 mb-1'/>

                <h3 className='m-1'>Categorías</h3>
                { 
                categorys.map(category => (
                    <div className="form-check form-check-inline p-1"  key={category.id}>
                        <button onClick={category_searcher} value={category.name} className='btn btn-secondary rounded-2'>{category.name}</button>  
                    </div>
                ))
                }
                </div>
            <div id="contenedor_uso" style={{display:"none"}} className="container text-center contenedorDeInputsBusquedas">
                <h3>Zona de aplicación</h3>
            { 
                uses.map(use => (
                    <div className="form-check form-check-inline p-1"  key={use.id}>
                        <button onClick={use_searcher} value={use.name} className='btn btn-secondary rounded-2'>{use.name}</button>  
                    </div>
                ))
            }
            <div className="form-check form-check-inline p-1">
            <button onClick={BackCategorys} className='btn btn-secondary rounded-2'>Volver a Categorías</button>
            </div>
            </div>
            <div id="contenedor_de_sub_categoria" style={{display:"none"}} className="container text-center contenedorDeInputsBusquedas">
                <h3>Sub Categoría</h3>
            { 
                subcategorys.map(subCategorys => (
                    <div className="form-check form-check-inline p-1"  key={subCategorys.id}>
                        <button onClick={subCategory_searcher} value={subCategorys.name} className='btn btn-secondary rounded-2'>{subCategorys.name}</button>  
                    </div>
                ))
            }
            <div className="form-check form-check-inline p-1">
            <button id='botonCategorias' onClick={BackCategorys} className='btn btn-secondary rounded-2'>Volver a Categorías</button>
            <button id='botonZonadeAplicacion' onClick={BackUses} className='btn btn-secondary rounded-2'>Volver a Zona de Aplicación</button>
            </div>
            </div>
            </div>
            <Container>
                <Row>
                    <Col>
                <h3 className='text-center' id='routesSearchCategorys' style={{display:"none"}}>{selectedCategory}</h3>
                    </Col>
                    <Col>
                <h3 className='text-center' id='routesSearchUses' style={{display:"none"}}>{selectedUse}</h3>
                    </Col>
                    <Col>
                <h3 className='text-center' id='routesSearchSubCategorys' style={{display:"none"}}>{selectedSubCategory}</h3>
                    </Col>
                </Row>
            </Container>

            <nav>
                <ul className="pagination justify-content-center">
                    {pageNumbers.map((number) => (
                        <li key={number} className="page-item">
                            <button onClick={() => paginate(number)} className="page-link text-black">
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className='row p-2'>
            {
                todosData.map(product => (
                    <div className='col-md-3' key={product.id}>
                        <Product 
                            logo_image={product.Brand.logo_image}
                            name={product.name}
                            idbrand={product.idbrand}
                            id={product.id}
                            use={product.Use.name}
                            category={product.Category.name}
                            sub_category={product.SubCategory.name}
                        />
                    </div>
                ))
            }
            </div>
        </div>
        </div>
    )
}

export default SearchCategory
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Brand from './Brand.js';
import Header from "./Header.js";

function CardsBrands() {
    //Set de todas las marcas
    const [todos, setTodos] = useState([]);

    //Set del parámetro de Búsqueda
    const [searchTerm, setSearchTerm] = useState("");
    
    //Set de los filtros por checkbox
    const [cruelty_free, setCrueltyFree] = useState("");
    const [cruelty_free_certificate, setCrueltyFreeCertificate] = useState("");
    const [vegan, setVegan] = useState("");
    const [origenArgentino, setOrigenArgentino] = useState("");
    const [importado, setImportado] = useState("");
    const [todosOrigenes, setTodosOrigenes] = useState("");
  
    //Set de cuando los checkbox de los filtros están activos o no
    const cruelty_free_searcher = (e) => {
        setCrueltyFree(e.target.checked)
        setCurrentPage(1)
    }

    const cruelty_free_certificated_searcher = (e) => {
        setCrueltyFreeCertificate(e.target.checked)
        setCurrentPage(1)
    }

    const vegan_searcher = (e) => {
        setVegan(e.target.checked)
        setCurrentPage(1)
    }

    const origenArgentino_searcher = (e) => {
        setOrigenArgentino(e.target.checked)
        setImportado (false)
        setTodosOrigenes (false)
        setCurrentPage(1)
    }

    const importado_searcher = (e) => {
        setImportado(e.target.checked)
        setOrigenArgentino (false)
        setTodosOrigenes (false)
        setCurrentPage(1)
    }

    const todosOrigenes_searcher = (e) => {
        setTodosOrigenes(e.target.checked)
        setOrigenArgentino (false)
        setImportado (false)
        setCurrentPage(1)
    }
  
    //Set de la paginación
    const [currentPage, setCurrentPage] = useState(1);
    const [totalTodos, setTotalTodos] = useState(0);
    const todosPerPage = 8;

    //fetch de la Api
    useEffect(() => {
        axios
            .get("/brands")
            .then((response) => {
            setTodos(response.data);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []
    );

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
        pageNumbers.push(i);
    }

    const todosData = useMemo(() => {
        let computedTodos = todos;

    if (searchTerm) {
        computedTodos = computedTodos.filter(
            todo =>
            todo.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    if (cruelty_free === true) {
        computedTodos = computedTodos.filter(
            todo =>
            todo.cruelty_free === "Si"
        );
    }

    if (cruelty_free_certificate === true) {
        computedTodos = computedTodos.filter(
            todo =>
            todo.cruelty_free_certificate !== "No"
        );
    }

    if (vegan === true) {
        computedTodos = computedTodos.filter(
            todo =>
            todo.vegan === "Si"
        );
    }

    if (origenArgentino === true) {
        computedTodos = computedTodos.filter(
            todo =>
            todo.origin === "Argentina"
        );
    }

    if (importado === true) {
        computedTodos = computedTodos.filter(
            todo =>
            todo.origin !== "Argentina"
        );
    }

    if (todos === true) {
        computedTodos = computedTodos.filter(
            todo =>
            todo.origin !== ""
        );
    }

    setTotalTodos(computedTodos.length);

    //Current Page slice
    return computedTodos.slice(
        (currentPage - 1) * todosPerPage,
        (currentPage - 1) * todosPerPage + todosPerPage
    );
    }, [todos, currentPage, searchTerm, cruelty_free, cruelty_free_certificate, vegan, origenArgentino, importado, todosOrigenes]);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
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
                            value={searchTerm}
                            onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                    <form className="mt-1" name='checkboxFiltrados' encType='text/plain'>
                        <div className="d-flex p-2 bd-highlight justify-content-center">
                            <div className="form-check form-check-inline content-">
                                <input className="form-check-input" 
                                    type="checkbox" 
                                    onClick={cruelty_free_searcher}
                                    value={cruelty_free} 
                                />
                                <label className="form-check-label">Cruelty Free</label>
                            </div>
                        <div className="form-check form-check-inline">
                                <input className="form-check-input" 
                                    type="checkbox" 
                                    onClick={cruelty_free_certificated_searcher}
                                    value={cruelty_free_certificate} 
                                />
                                <label className="form-check-label">Cruelty Free Certificado</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" 
                            type="checkbox" 
                            onClick={vegan_searcher}
                            value={vegan} 
                            />
                            <label className="form-check-label">Vegano</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <p>Origen:</p>
                        </div>
                        <div className="form-check form-check-inline text-left p-0">
                                <ul style={{listStyle: "none"}} >
                                    <li>
                                    <input type="radio" name="origin" value={origenArgentino} onClick={origenArgentino_searcher}/> Argentina  
                                    </li>
                                    <li>
                                    <input type="radio" name="origin" value={importado} onClick={importado_searcher}/> Importado
                                    </li>
                                    <li>
                                    <input type="radio" name="origin" value={todosOrigenes} defaultChecked onClick={todosOrigenes_searcher}/> Todos
                                    </li>                               
                                </ul>
                        </div>
                    </div>
                </form>
            </div>

        <nav>
            <ul className="pagination justify-content-center mt-4">
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
        todosData.map((brand) => {
            return (
                <div className='col-md-3' key={brand.id}>
                    <Brand  
                        name={brand.name}
                        origin={brand.origin}
                        cruelty_free={brand.cruelty_free}
                        cruelty_free_certificate={brand.cruelty_free_certificate}
                        vegan={brand.vegan}
                        logo_image={brand.logo_image}
                        id={brand.id}
                        webpage={brand.webpage}
                    />
                </div>
            );
        })}
        </div>
    </div>
    </div>
  );
}

export default CardsBrands
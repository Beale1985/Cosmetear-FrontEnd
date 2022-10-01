import axios from "axios";
import {useState, useEffect, useMemo} from "react";
import { Link } from 'react-router-dom';
import { FaPenSquare } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";

const URI = "http://localhost:8000/brands/";

const ShowBrands = () => {
    const [todos, setTodos] = useState([]);

    useEffect( () => {
        getBrands()
    },[])

    const getBrands = async () => {
        const res = await axios.get(URI)
        setTodos(res.data)
    }

    const deleteBrand = async (id) => {
        await axios.delete(`${URI}${id}`)
        getBrands()
    }

    //Set de la paginación
    const [currentPage, setCurrentPage] = useState(1);
    const [totalTodos, setTotalTodos] = useState(0);
    const todosPerPage = 8;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
        pageNumbers.push(i);
    }

    const todosData = useMemo(() => {
        let computedTodos = todos;

    setTotalTodos(computedTodos.length);

    return computedTodos.slice(
        (currentPage - 1) * todosPerPage,
        (currentPage - 1) * todosPerPage + todosPerPage
    );
    }, [todos, currentPage]);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div className="container-fluid contenedorDashboard">
            <div className="row">
                <div className="col text-center">
                    <Link to="/marcas/crear" className="btn btn-primary mt-2 mb-2">Ingresar Nueva Marca</Link>

                    <nav>
                        <ul className="pagination justify-content-center">
                            {pageNumbers.map((number) => (
                                <li key={number} className="page-item text-white">
                                    <button onClick={() => paginate(number)} className="page-link text-black">
                                        {number}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Marca</th>
                                <th>Origen</th>
                                <th>Cruelty Free</th>
                                <th style={{width: '200px'}}>Cruelty Free Certificado</th>
                                <th>Vegano</th>
                                <th>Editar/Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                             todosData.map ((brand) =>{ 
                                return( 
                                <tr key={brand.id}>
                                    <td> { brand.id } </td>
                                    <td> { brand.name } </td>
                                    <td> { brand.origin } </td>
                                    <td> { brand.cruelty_free } </td>
                                    <td> { brand.cruelty_free_certificate } </td>
                                    <td> { brand.vegan } </td>
                                    <td>
                                        <Link to={`/marcas/editar/${brand.id}`} ><FaPenSquare style={{color: 'blue', fontSize: '40px'}} /></Link>
                                        <button onClick={ ()=>deleteBrand(brand.id) } style={{backgroundColor:"transparent", border:"none"}}><BsFillTrashFill style={{color: 'white', fontSize: '36px', backgroundColor: "red", padding: "5px", borderRadius:"5px"}} /></button>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ShowBrands
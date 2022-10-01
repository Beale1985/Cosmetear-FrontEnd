import axios from "axios";
import {useState, useEffect, useMemo} from "react";
import { Link } from 'react-router-dom';
import { FaPenSquare } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { RiFileSearchFill } from "react-icons/ri";

const URI = "http://localhost:8000/products/";

const ShowProducts = () => {
    const [todos, setTodos] = useState([]);

    useEffect( () => {
        getProducts()
    },[])

    const getProducts = async () => {
        const res = await axios.get(URI)
        setTodos(res.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${URI}${id}`)
        getProducts()
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

    // const [products, setProduct] = useState([])
    // useEffect( () => {
    //     getProducts()
    // },[])

    // const getProducts = async () => {
    //     const res = await axios.get(URI)
    //     setProduct(res.data)
    // }

    // const deleteProduct = async (id) => {
    //     await axios.delete(`${URI}${id}`)
    //     getProducts()
    // }

    return(
        <div className="container-fluid contenedorDashboard">
            <div className="row">
                <div className="col text-center">
                    <Link to="/productos/crear" className="btn btn-primary mt-2 mb-2">Ingresar Nuevo Producto</Link>

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
                                <th>Nombre</th>
                                <th>Categoría</th>
                                <th>Uso</th>
                                <th>Ver</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            { todosData.map ( (product) =>(
                                <tr key={product.id}>
                                    <td> { product.id } </td>
                                    <td> { product.Brand.name } </td>
                                    <td> { product.name } </td>
                                    <td> { product.Category.name } </td>
                                    <td> { product.Use.name } </td>
                                    <td>
                                        <Link to={`/busqueda/productos/detalle/${product.id}`} ><RiFileSearchFill style={{color: 'blue', fontSize: '50px'}} /></Link>
                                    </td>
                                    <td>
                                        <Link to={`/productos/editar/${product.id}`} ><FaPenSquare style={{color: 'blue', fontSize: '45px'}} /></Link>
                                    </td>
                                    <td>
                                        <button onClick={ ()=>deleteProduct(product.id) } style={{backgroundColor:"transparent", border:"none"}}><BsFillTrashFill style={{color: 'white', fontSize: '40px', backgroundColor: "red", padding: "10px", borderRadius:"5px"}} /></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ShowProducts
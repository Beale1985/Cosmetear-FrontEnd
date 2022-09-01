import axios from "axios";
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { FaPenSquare } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";

const URI = "http://localhost:8000/products/";

const ShowProducts = () => {
    const [products, setProduct] = useState([])
    useEffect( () => {
        getProducts()
    },[])

    const getProducts = async () => {
        const res = await axios.get(URI)
        setProduct(res.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${URI}${id}`)
        getProducts()
    }

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center">
                    <Link to="/productos/crear" className="btn btn-primary mt-2 mb-2">Ingresar Nuevo Producto</Link>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Marca</th>
                                <th>Nombre</th>
                                <th>Origen</th>
                                <th>Cruelty Free</th>
                                <th style={{width: '200px'}}>Cruelty Free Certificado</th>
                                <th>Vegano</th>
                                <th>Editar/Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            { products.map ( (product) =>(
                                <tr key={product.idproduct}>
                                    <td> { product.idproduct } </td>
                                    <td> { product.idbrand } </td>
                                    <td> { product.name } </td>
                                    <td> { product.origen } </td>
                                    <td> { product.cruelty_free } </td>
                                    <td> { product.cruelty_free_certificate } </td>
                                    <td> { product.vegano } </td>
                                    <td>
                                        <Link to={`/productos/editar/${product.idproduct}`} ><FaPenSquare style={{color: 'blue', fontSize: '45px'}} /></Link>
                                        <button onClick={ ()=>deleteProduct(product.idproduct) } style={{backgroundColor:"transparent", border:"none"}}><BsFillTrashFill style={{color: 'white', fontSize: '40px', backgroundColor: "red", padding: "10px", borderRadius:"5px"}} /></button>
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
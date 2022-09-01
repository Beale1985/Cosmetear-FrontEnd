import axios from "axios";
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { FaPenSquare } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";

const URI = "http://localhost:8000/brands/";

const ShowBrands = () => {
    const [brands, setBrand] = useState([])
    useEffect( () => {
        getBrands()
    },[])

    const getBrands = async () => {
        const res = await axios.get(URI)
        setBrand(res.data)
    }

    const deleteBrand = async (id) => {
        await axios.delete(`${URI}${id}`)
        getBrands()
    }

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center">
                    <Link to="/marcas/crear" className="btn btn-primary mt-2 mb-2">Ingresar Nueva Marca</Link>
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
                            { brands.map ( (brand) =>(
                                <tr key={brand.idbrand}>
                                    <td> { brand.idbrand } </td>
                                    <td> { brand.name } </td>
                                    <td> { brand.origen } </td>
                                    <td> { brand.cruelty_free } </td>
                                    <td> { brand.cruelty_free_certificate } </td>
                                    <td> { brand.vegano } </td>
                                    <td>
                                        <Link to={`/marcas/editar/${brand.idbrand}`} ><FaPenSquare style={{color: 'blue', fontSize: '40px'}} /></Link>
                                        <button onClick={ ()=>deleteBrand(brand.idbrand) } style={{backgroundColor:"transparent", border:"none"}}><BsFillTrashFill style={{color: 'white', fontSize: '36px', backgroundColor: "red", padding: "5px", borderRadius:"5px"}} /></button>
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

export default ShowBrands
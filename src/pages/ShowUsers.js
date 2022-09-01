import axios from "axios";
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { FaPenSquare } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";

const URI = "http://localhost:8000/users/";

const ShowUsers = () => {
    const [users, setUser] = useState([])
    useEffect( () => {
        getUsers()
    },[])

    const getUsers = async () => {
        const res = await axios.get(URI)
        setUser(res.data)
    }

    const deleteUser = async (iduser) => {
        axios.delete(`${URI}${iduser}`)
        getUsers()
    }

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center">
                <Link to="/usuarios/crear" className="btn btn-primary mt-2 mb-2">Ingresar Nuevo Usuario</Link>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Nacimiento</th>
                                <th>Email</th>
                                <th>Contraseña</th>
                                <th>Admin</th>
                                <th>Editar/Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map ( (user) =>(
                                <tr key={user.iduser}>
                                    <td> { user.iduser } </td>
                                    <td> { user.name } </td>
                                    <td> { user.lastName } </td>
                                    <td> { user.fechaDeNacimiento } </td>
                                    <td> { user.email } </td>
                                    <td> { user.password } </td>
                                    <td> { user.admin } </td>
                                    <td>
                                        <Link to={`/usuarios/editar/${user.iduser}`} ><FaPenSquare style={{color: 'blue', fontSize: '45px'}} /></Link>
                                        <button onClick={ ()=>deleteUser(user.iduser) } style={{backgroundColor:"transparent", border:"none"}} ><BsFillTrashFill style={{color: 'white', fontSize: '40px', backgroundColor: "red", padding: "10px", borderRadius:"5px"}} /></button>
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

export default ShowUsers
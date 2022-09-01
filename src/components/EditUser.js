import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import md5 from "md5";

const URI = "http://localhost:8000/users";

const EditUsers = () => {
    const [name, setName] = useState (" ")
    const [lastName, setLastName] = useState (" ")
    const [fechaDeNacimiento, setFechaDeNacimiento] = useState (" ")
    const [email, setEmail] = useState (" ")
    const [password, setPassword] = useState (" ")
    const [admin, setAdmin] = useState (" ")
    const navigate =useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+ "/" +id, {
            name: name,
            lastName:lastName,
            fechaDeNacimiento:fechaDeNacimiento,
            email:email,
            password:md5(password),
            admin:admin,
        })
        navigate('/dashboard/usuarios')
    }

    useEffect ( ()=>{
        getUserById()
    },[])

    const getUserById = async () => {
        const res = await axios.get(URI+ "/" +id)
        setName(res.data.name)
        setLastName(res.data.lastName)
        setFechaDeNacimiento(res.data.fechaDeNacimiento)
        setEmail(res.data.email)
        setPassword(res.data.password)
        setAdmin(res.data.admin)
    }
    
    return (
        <div>
            <h1>Vista Editar</h1>
            <form onSubmit={update} >
            <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        value={name}
                        onChange={ (e)=> setName(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input
                        value={lastName}
                        onChange={ (e)=> setLastName(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Fecha de Nacimiento</label>
                    <input
                        value={fechaDeNacimiento}
                        onChange={ (e)=> setFechaDeNacimiento(e.target.value)}
                        type="date"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        value={email}
                        onChange={ (e)=> setEmail(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        value={password}
                        onChange={ (e)=> setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Administrador</label>
                    <input
                        value={admin}
                        onChange={ (e)=> setAdmin(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <button type="submit" className="btn btn-primary">Editar Usuario</button>
                <br />
                <br />
                <button type="reset" className="btn btn-primary" onClick={() => navigate(-1)}>Volver</button>

            </form>
        </div>
    )
}

export default EditUsers;
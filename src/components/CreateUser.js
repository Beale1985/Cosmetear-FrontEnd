import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import md5 from "md5";

const URI = "http://localhost:8000/users";

const CreateUser = () => {
    const [name, setName] = useState (" ")
    const [lastName, setLastName] = useState (" ")
    const [fechaDeNacimiento, setFechaDeNacimiento] = useState (" ")
    const [email, setEmail] = useState (" ")
    const [password, setPassword] = useState (" ")
    const [admin, setAdmin] = useState (" ")
    const navigate =useNavigate()

    

    const storeUsers = async (e) => {
        e.preventDefault ()
        await axios.post(URI,
            {
                name: name,
                lastName:lastName,
                fechaDeNacimiento:fechaDeNacimiento,
                email:email,
                password:md5(password),
                admin:admin,
            })
            navigate("/dashboard/usuarios")
    }

    return (
        <div>
            <h1>Vista Crear</h1>
            <form onSubmit={storeUsers} >
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

                <button type="submit" className="btn btn-primary">Ingresar Usuario</button>
                <br />
                <br />
                <button type="reset" className="btn btn-primary">Resetear</button>
                <br />
                <br />
                <button type="reset" className="btn btn-primary" onClick={() => navigate(-1)}>Volver</button>

            </form>
        </div>
    )
}

export default CreateUser;
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/categorys";

const CreateCategory = () => {
    const [name, setName] = useState (" ")
    const navigate =useNavigate()

    const storeCategorys = async (e) => {
        e.preventDefault ()
        await axios.post(URI,
            {
                name: name,
            })
            navigate("/dashboard/categorias")
    }

    return (
        <div className="conteiner-fluid">
            <h1 className="text-center">Ingresar Nueva Categoría</h1>
            <form onSubmit={storeCategorys} id="formCrearMarca" >
                <div className="mb-3 text-center">
                    <label className="form-label">Nombre</label>
                    <input
                        value={name}
                        onChange={ (e)=> setName(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <button type="submit" className="btn btn-primary">Cargar</button>
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

export default CreateCategory;
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/brands";

const CreateBrand = () => {
    const [name, setName] = useState (" ")
    const [instagram, setInstagram] = useState (" ")
    const [webpage, setWebpage] = useState (" ")
    const [imagen_logo, setImagenlogo] = useState (" ")
    const [origen, setOrigen] = useState (" ")
    const [cruelty_free, setCrueltyfree] = useState (" ")
    const [cruelty_free_certificate, setCrueltyfreecertificate] = useState (" ")
    const [vegano, setVegano] = useState (" ")
    const [observaciones, setObservaciones] = useState (" ")
    const navigate =useNavigate()

    const storeBrands = async (e) => {
        e.preventDefault ()
        await axios.post(URI,
            {
                name: name,
                instagram:instagram,
                webpage:webpage,
                imagen_logo:imagen_logo,
                origen:origen,
                cruelty_free:cruelty_free,
                cruelty_free_certificate:cruelty_free_certificate,
                vegano:vegano,
                observaciones:observaciones
            })
            navigate("/dashboard/marcas")
    }

    return (
        <div className="conteiner-fluid">
            <h1 className="text-center">Ingresar Nueva Marca</h1>
            <form onSubmit={storeBrands} id="formCrearMarca" >
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

                <div className="mb-3 text-center">
                    <label className="form-label">Instagram</label>
                    <input
                        value={instagram}
                        onChange={ (e)=> setInstagram(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}}
                    />
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Sitio Oficial</label>
                    <input
                        value={webpage}
                        onChange={ (e)=> setWebpage(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Logo</label>
                    <input
                        value={imagen_logo}
                        onChange={ (e)=> setImagenlogo(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Origen</label>
                    <input
                        value={origen}
                        onChange={ (e)=> setOrigen(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Cruelty Free</label>
                    <input
                        value={cruelty_free}
                        onChange={ (e)=> setCrueltyfree(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Cruelty Free certificate</label>
                    <input
                        value={cruelty_free_certificate}
                        onChange={ (e)=> setCrueltyfreecertificate(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Vegano</label>
                    <input
                        value={vegano}
                        onChange={ (e)=> setVegano(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Observaciones</label>
                    <textarea
                        value={observaciones}
                        onChange={ (e)=> setObservaciones(e.target.value)}
                        className="form-control"
                        style={{width:"50%", height:"100px", margin: "auto", border: "2px solid black", rows:"4", cols:"50"}} 
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

export default CreateBrand;
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/brands";

const EditBrands = () => {
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
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+ "/" +id, {
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
        navigate('/dashboard/marcas')
    }

    useEffect ( ()=>{
        getBrandById()
    },[])

    const getBrandById = async () => {
        const res = await axios.get(URI+ "/" +id)
        setName(res.data.name)
        setInstagram(res.data.instagram)
        setWebpage(res.data.webpage)
        setImagenlogo(res.data.imagen_logo)
        setOrigen(res.data.origen)
        setCrueltyfree(res.data.cruelty_free)
        setCrueltyfreecertificate(res.data.cruelty_free_certificate)
        setVegano(res.data.vegano)
        setObservaciones(res.data.observaciones)
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
                    <label className="form-label">Instagram</label>
                    <input
                        value={instagram}
                        onChange={ (e)=> setInstagram(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Sitio Oficial</label>
                    <input
                        value={webpage}
                        onChange={ (e)=> setWebpage(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Logo</label>
                    <input
                        value={imagen_logo}
                        onChange={ (e)=> setImagenlogo(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Origen</label>
                    <input
                        value={origen}
                        onChange={ (e)=> setOrigen(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Cruelty Free</label>
                    <input
                        value={cruelty_free}
                        onChange={ (e)=> setCrueltyfree(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Cruelty Free certificate</label>
                    <input
                        value={cruelty_free_certificate}
                        onChange={ (e)=> setCrueltyfreecertificate(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Vegano</label>
                    <input
                        value={vegano}
                        onChange={ (e)=> setVegano(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Observaciones</label>
                    <textarea
                        value={observaciones}
                        onChange={ (e)=> setObservaciones(e.target.value)}
                        className="form-control"
                        style={{width:"50%", height:"100px", margin: "auto", border: "2px solid black", rows:"4", cols:"50"}} 
                    />
                </div>

                <button type="submit" className="btn btn-primary">Editar</button>
                <br />
                <br />
                <button type="reset" className="btn btn-primary" onClick={() => navigate(-1)}>Volver</button>

            </form>
        </div>
    )
}

export default EditBrands;
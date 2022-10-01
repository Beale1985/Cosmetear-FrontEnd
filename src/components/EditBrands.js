import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/brands";

const EditBrands = () => {
    const [name, setName] = useState (" ")
    const [instagram, setInstagram] = useState (" ")
    const [webpage, setWebpage] = useState (" ")
    const [logo_image, setLogoImage] = useState (" ")
    const [origin, setOrigin] = useState (" ")
    const [cruelty_free, setCrueltyfree] = useState (" ")
    const [cruelty_free_certificate, setCrueltyfreecertificate] = useState (" ")
    const [vegan, setVegan] = useState (" ")
    const [observations, setObservations] = useState (" ")
    const navigate =useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+ "/" +id, {
            name: name,
            instagram:instagram,
            webpage:webpage,
            logo_image:logo_image,
            origin:origin,
            cruelty_free:cruelty_free,
            cruelty_free_certificate:cruelty_free_certificate,
            vegan:vegan,
            observations:observations
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
        setLogoImage(res.data.logo_image)
        setOrigin(res.data.origin)
        setCrueltyfree(res.data.cruelty_free)
        setCrueltyfreecertificate(res.data.cruelty_free_certificate)
        setVegan(res.data.vegan)
        setObservations(res.data.observations)
    }
    
    
    return (
        <div>
            <h1>Modificar Marca</h1>
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
                        value={logo_image}
                        onChange={ (e)=> setLogoImage(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Origen</label>
                    <input
                        value={origin}
                        onChange={ (e)=> setOrigin(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Cruelty Free</label>
                    <select
                        value={cruelty_free}
                        onChange={ (e)=> setCrueltyfree(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}}
                    > 
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No especifica">No Especifica</option>
                    </select>
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
                        value={vegan}
                        onChange={ (e)=> setVegan(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Observaciones</label>
                    <textarea
                        value={observations}
                        onChange={ (e)=> setObservations(e.target.value)}
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
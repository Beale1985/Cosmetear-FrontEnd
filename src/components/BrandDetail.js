import React from 'react';
import { useEffect, useState} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Header from './Header';

const URI = "/brands";

function BrandDetail() {
    const [logo_image, setLogoImage] = useState (" ")
    const [webpage, setWebPage] = useState (" ")
    const [instagram, setInstagram] = useState (" ")
    const [origin, setOrigin] = useState (" ")
    const [cruelty_free, setCrueltyFree] = useState (" ")
    const [cruelty_free_certificate, setCrueltyFreeCertificate] = useState (" ")
    const [vegan, setVegan] = useState (" ")
    const [observations, setObservations] = useState (" ")

    const {id} = useParams();
    const navigate =useNavigate()

    useEffect ( ()=>{
        getUserById()
    },[])

    const getUserById = async () => {
        const res = await axios.get(URI+ "/" +id)
        setLogoImage(res.data.logo_image)
        setWebPage(res.data.webpage)
        setInstagram(res.data.instagram)
        setOrigin(res.data.origin)
        setCrueltyFree(res.data.cruelty_free)
        setCrueltyFreeCertificate(res.data.cruelty_free_certificate)
        setVegan(res.data.vegan)
        setObservations(res.data.observations)
    }
    if (observations === ""){
        document.getElementById("observations").style.display="none"
    }

  return (
    <div>
        <Header />
    <div className='container-fluid text-center contenedorDeBusquedas'>
        <div className='card tarjeta_marca col-md-4 mx-auto text-center mb-2 mt-3 rounded' style={{boxShadow: '1px 2px 9px #C5B4A3'}}>
                <img src={ logo_image } alt='Imagen Marca' width={"40%"} className=" mx-auto Imagen_Logo_tarjeta_marcas" />
            <div className='card-body'>
                <p className='card-text text-secondary'>Origen: {origin}</p>
                <p className='card-text text-secondary'>Instagram: {instagram}</p>
                <p className='card-text text-secondary'>Cruelty free: {cruelty_free}</p>
                <p className='card-text text-secondary'>Cruelty free Certificado: {cruelty_free_certificate}</p>
                <p className='card-text text-secondary'>Vegano: {vegan}</p>
                <p className='card-text text-secondary' id='observations'>Observaciones: {observations}</p>
                    <a href={ webpage } target="_blank" rel="noopener noreferrer" className='btn btn-secondary rounded-2'>
                        Página Web
                    </a>
            <br />
            <br />
                <Link to={`/busqueda/productos/${id}`} className='btn btn-secondary rounded-2'> Ver Productos</Link>
            </div> 
        </div>
            <button type="reset" className="btn btn-secondary col-md-1 m-3" style={{boxShadow: '1px 2px 9px #C5B4A3'}} onClick={() => navigate(-1)}>Volver</button> 
    </div>
    </div>
  )
}

export default BrandDetail
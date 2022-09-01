import React from 'react';
import { useEffect, useState} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header.js";
import Footer from "./Footer.js";

const URI = "http://localhost:8000/brands";

function BrandDetail() {
    const [imagen_logo, setImagenLogo] = useState (" ")
    const [idbrand, setIdbrand] = useState (" ")
    const [name, setName] = useState (" ")
    const [webpage, setWebPage] = useState (" ")
    const [instagram, setInstagram] = useState (" ")
    const [origen, setOrigen] = useState (" ")
    const [cruelty_free, setCrueltyFree] = useState (" ")
    const [cruelty_free_certificate, setCrueltyFreeCertificate] = useState (" ")
    const [vegano, setVegano] = useState (" ")
    const [observaciones, setObservaciones] = useState (" ")

    const {id} = useParams();
    const navigate =useNavigate()

    useEffect ( ()=>{
        getUserById()
    },[])

    const getUserById = async () => {
        const res = await axios.get(URI+ "/" +id)
        setImagenLogo(res.data.imagen_logo)
        setIdbrand(res.data.idbrand)
        setName(res.data.name)
        setWebPage(res.data.webpage)
        setInstagram(res.data.instagram)
        setOrigen(res.data.origen)
        setCrueltyFree(res.data.cruelty_free)
        setCrueltyFreeCertificate(res.data.cruelty_free_certificate)
        setVegano(res.data.vegano)
        setObservaciones(res.data.observaciones)
    }

  return (
    <div className='container-fluid' >
        <Header />
    <div className='card tarjeta_marca col-md-4 mx-auto' >
        <img src={ imagen_logo } alt='Imagen Marca' width={"40%"} className=" mx-auto Imagen_Logo_tarjeta_marcas" />
        <div className='card-body'>
            <h4 className='card-title'>{name}</h4>
            <p className='card-text text-secondary'>Origen: {origen}</p>
            <p className='card-text text-secondary'>Instagram: {instagram}</p>
            <p className='card-text text-secondary'>Cruelty free: {cruelty_free}</p>
            <p className='card-text text-secondary'>Cruelty free Certificado: {cruelty_free_certificate}</p>
            <p className='card-text text-secondary'>Vegano: {vegano}</p>
            <p className='card-text text-secondary'>Observaciones: {observaciones}</p>
            <a href={ webpage } target="_blank" rel="noopener noreferrer" className='btn btn-secondary rounded-0'>
                Página Web
            </a><br />
            <br />
            <Link to={`/busqueda/productos/${idbrand}`} className='btn btn-secondary rounded-2' > Ver Productos</Link>
        </div> 
    </div>
    <button type="reset" className="btn btn-primary" onClick={() => navigate(-1)}>Volver</button> 
    <Footer />
    </div>
  )
}

export default BrandDetail
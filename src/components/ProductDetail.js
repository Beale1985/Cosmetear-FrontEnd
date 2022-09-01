import React from 'react';
import { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header.js";
import Footer from "./Footer.js";

const URI = "http://localhost:8000/products";

function ProductDetail() {
    const [origen, setOrigen] = useState (" ")
    const [name, setName] = useState (" ")
    const [format, setFormat] = useState (" ")
    const [description, setDescription] = useState (" ")
    const [inci, setInci] = useState (" ")
    const [category, setCategory] = useState (" ")
    const [extra_category, setExtraCategory] = useState (" ")
    const [use, setUse] = useState (" ")
    const [subcategory, setSubCategory] = useState (" ")
    const [extra_sub_category, setExtraSubCategory] = useState (" ")
    const [extra_sub_category_2, setExtraSubCategory2] = useState (" ")
    const [color, setColor] = useState (" ")
    const [type_of_skin, setTypeOfSkin] = useState (" ")
    const [sensible_skin, setSensibleSkin] = useState (" ")
    const [fps, setFps] = useState (" ")
    const [hipoalergico, setHipoalrgico] = useState (" ")
    const [testeado_dermatologicamente, setTesteadoDermatologicamente] = useState (" ")
    const [tacc, setTacc] = useState (" ")
    const [parabenos, setParabenos] = useState (" ")
    const [fragancy, setFragancy] = useState (" ")
    const [alchool, setAlchool] = useState (" ")
    const [cruelty_free, setCrueltyFree] = useState (" ")
    const [cruelty_free_certificate, setCrueltyFreeCertificate] = useState (" ")
    const [vegano, setVegano] = useState (" ")
    const [kids, setKids] = useState (" ")

    const {id} = useParams();
    const navigate =useNavigate()

    useEffect ( ()=>{
        getProductById()
    },[])

    const getProductById = async () => {
        const res = await axios.get(URI+ "/" +id)
        setOrigen(res.data.origen)
        setName(res.data.name)
        setFormat(res.data.format)
        setDescription(res.data.description)
        setInci(res.data.inci)
        setCategory(res.data.category)
        setExtraCategory(res.data.extra_category)
        setUse(res.data.use)
        setSubCategory(res.data.extra_sub_category)
        setExtraSubCategory(res.data.extra_sub_category)
        setExtraSubCategory2(res.data.extra_sub_category_2)
        setColor(res.data.color)
        setTypeOfSkin(res.data.type_of_skin)
        setSensibleSkin(res.data.sensible_skin)
        setFps(res.data.fps)
        setHipoalrgico(res.data.hipoalergico)
        setTesteadoDermatologicamente(res.data.testeado_dermatologicamente)
        setTacc(res.data.tacc)
        setParabenos(res.data.parabenos)
        setFragancy(res.data.fragancy)
        setAlchool(res.data.alchool)
        setCrueltyFree(res.data.cruelty_free)
        setCrueltyFreeCertificate(res.data.cruelty_free_certificate)
        setVegano(res.data.vegano)
        setKids(res.data.kids)        
    }

  return (
    <div className='container-fluid' >
        <Header />
    <div className='card tarjeta_marca col-md-12 mx-auto' >
        <div className='card-body'>
            <h4 className='card-title'>{name}</h4>
            <p className='card-text text-secondary'>Origen: {origen}</p>
            <p className='card-text text-secondary'>Presentación: {format}</p>
            <p className='card-text text-secondary'>Cruelty free: {cruelty_free}</p>
            <p className='card-text text-secondary'>Cruelty free Certificado: {cruelty_free_certificate}</p>
            <p className='card-text text-secondary'>Vegano: {vegano}</p>
            <p className='card-text text-secondary'>Contiene: {inci}</p>
            <p className='card-text text-secondary'>Descripción: {description}</p>
        </div> 
    </div>
    <br/>
    <button type="reset" className="btn btn-primary" onClick={() => navigate(-1)}>Volver</button> 
    <Footer />
    </div>
  )
}

export default ProductDetail
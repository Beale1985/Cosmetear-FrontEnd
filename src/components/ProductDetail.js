import React from 'react';
import { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from './Header';

const URI = "http://localhost:8000/products";

function ProductDetail() {
    const [name, setName] = useState (" ")
    const [format, setFormat] = useState (" ")
    const [description, setDescription] = useState (" ")
    const [inci, setInci] = useState (" ")
    const [category, setCategory] = useState (" ")
    const [use, setUse] = useState (" ")
    const [sub_category, setSubCategory] = useState (" ")
    const [color, setColor] = useState (" ")
    const [type_of_skin, setTypeOfSkin] = useState (" ")
    const [sensible_skin, setSensibleSkin] = useState (" ")
    const [fps, setFps] = useState (" ")
    const [hypoallergenic, setHypoallergenic] = useState (" ")
    const [dermatologically_tested, setDermatologically_tested] = useState (" ")
    const [tacc, setTacc] = useState (" ")
    const [parabens, setParabens] = useState (" ")
    const [fragancy, setFragancy] = useState (" ")
    const [alchool, setAlchool] = useState (" ")
    const [kids, setKids] = useState (" ")
    const [logo_brand, setLogoBrand] = useState (" ")

    const {id} = useParams();
    const navigate =useNavigate()

    useEffect ( ()=>{
        getProductById()
    },[])

    const getProductById = async () => {
        const res = await axios.get(URI+ "/" +id)
        setName(res.data.name)
        setFormat(res.data.format)
        setDescription(res.data.description)
        setInci(res.data.inci)
        setCategory(res.data.Category.name)
        setUse(res.data.Use.name)
        setSubCategory(res.data.SubCategory.name)
        setColor(res.data.color)
        setTypeOfSkin(res.data.type_of_skin)
        setSensibleSkin(res.data.sensible_skin)
        setFps(res.data.fps)
        setHypoallergenic(res.data.hypoallergenic)
        setDermatologically_tested(res.data.dermatologically_tested)
        setTacc(res.data.tacc)
        setParabens(res.data.parabens)
        setFragancy(res.data.fragancy)
        setAlchool(res.data.alchool)
        setKids(res.data.kids)
        setLogoBrand(res.data.Brand.logo_image)        
    }

    if (type_of_skin === "No Corresponde"){
        document.getElementById("tipoDePiel").style.display="none"        
    }

    if (sub_category === "No tiene"){
        document.getElementById("subCategory").style.display="none"        
    }

    if (color === "No Corresponde"){
        document.getElementById("color").style.display="none"        
    }

    if (fps === "No Corresponde"){
        document.getElementById("fps").style.display="none"        
    }

    if (sensible_skin === "No Corresponde"){
        document.getElementById("pielSensible").style.display="none"        
    }

    if (hypoallergenic === "No Corresponde"){
        document.getElementById("hipoalergico").style.display="none"        
    }

    if (dermatologically_tested === "No Corresponde"){
        document.getElementById("testeadoDermatologicamente").style.display="none"        
    }

    if (tacc === "No Corresponde"){
        document.getElementById("tacc").style.display="none"        
    }

    if (parabens === "No Corresponde"){
        document.getElementById("parabenos").style.display="none"        
    }

    if (fragancy === "No Corresponde"){
        document.getElementById("fragancy").style.display="none"        
    }

    if (alchool === "No Corresponde"){
        document.getElementById("alchool").style.display="none"        
    }

    if (kids === "No Corresponde"){
        document.getElementById("kids").style.display="none"        
    }

  return (
    <div>
        <Header />
    <div className="conteiner-fluid m-3 text-center">
    <div className='card p-1 mb-1 bg-body rounded m-auto' style={{boxShadow: '1px 2px 9px #C5B4A3', width:"70%"}} >
        <div className='card-body text-center p-1'>
            <img src={ logo_brand } alt='Imagen Marca' width={"15%"} className=" mx-auto" />

            <hr className='m-1'/>
            
            <h3 className='card-title'>{name}</h3>
            <p className='card-text text-secondary'>Categoría: {category}</p>
            <p className='card-text text-secondary'>Uso: {use}</p>
            <p className='card-text text-secondary' id='subCategory'>Sub Categoría: {sub_category}</p>
            <p className='card-text text-secondary'>Presentación: {format}</p>
            <p className='card-text text-secondary' id='color'>Color: {color}</p>
            <p className='card-text text-secondary' id='tipoDePiel'>Apto para tipo de piel: {type_of_skin}</p>
            <p className='card-text text-secondary' id='pielSensible'>Apto para piel Sensible: {sensible_skin}</p>
            <p className='card-text text-secondary' id='fps'>Contiene FPS: {fps}</p>
            <p className='card-text text-secondary'id='hipoalergico'>Hipoalergenico: {hypoallergenic}</p>
            <p className='card-text text-secondary'id='testeadoDermatologicamente'>Testeado dermatológicamente: {dermatologically_tested}</p>
            <p className='card-text text-secondary' id='tacc'>Contiene TACC: {tacc}</p>
            <p className='card-text text-secondary' id='parabenos'>Contiene Parabenos: {parabens}</p>
            <p className='card-text text-secondary'id='fragancy'>Contiene Fragancia: {fragancy}</p>
            <p className='card-text text-secondary'id='alchool'>Contiene Alchool: {alchool}</p>
            <p className='card-text text-secondary'id='kids'>Apto para Niños: {kids}</p>
            <p className='card-text text-secondary'>Contiene: {inci}</p>
            <p className='card-text text-secondary'>Descripción: {description}</p>
        </div> 
    </div>
    <br/>
    <button type="reset" className="btn btn-secondary" onClick={() => navigate(-1)}>Volver</button> 
    </div>
    </div>
  )
}

export default ProductDetail
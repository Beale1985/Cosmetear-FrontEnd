import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/products";

const CreateProduct = () => {
    const [idbrand, setIdbrand] = useState (" ")
    const [origen, setOrigen] = useState (" ")
    const [name, setName] = useState (" ")
    const [format, setformat] = useState (" ")
    const [description, setDescription] = useState (" ")
    const [inci, setInci] = useState (" ")
    const [category, setCategory] = useState (" ")
    const [extra_category, setExtracategory] = useState (" ")
    const [use, setUse] = useState (" ")
    const [sub_category, setSubcategory] = useState (" ")
    const [extra_sub_category, setExtrasubcategory] = useState (" ")
    const [extra_sub_category_2, setExtrasubcategory2] = useState (" ")
    const [color, setColor] = useState (" ")
    const [type_of_skin, setTypeofskin] = useState (" ")
    const [sensible_skin, setSensibleskin] = useState (" ")
    const [fps, setFps] = useState (" ")
    const [hipoalergico, setHipoalergico] = useState (" ")
    const [testeado_dermatologicamente, setTesteadodermatologicamente] = useState (" ")
    const [tacc, setTacc] = useState (" ")
    const [parabenos, setParabenos] = useState (" ")
    const [fragancy, setFragancy] = useState (" ")
    const [alchool, setAlchool] = useState (" ")
    const [cruelty_free, setCrueltyfree] = useState (" ")
    const [cruelty_free_certificate, setCrueltyfreecertificate] = useState (" ")
    const [vegano, setVegano] = useState (" ")
    const [kids, setKids] = useState (" ")
    const navigate =useNavigate()

    const storeProducts = async (e) => {
        e.preventDefault ()
        await axios.post(URI,
            {
                idbrand:idbrand,
                origen:origen,
                name: name,
                format:format,
                description:description,
                inci:inci,
                category:category,
                extra_category:extra_category,
                use:use,
                sub_category:sub_category,
                extra_sub_category:extra_sub_category,
                extra_sub_category_2:extra_sub_category_2,
                color:color,
                type_of_skin:type_of_skin,
                sensible_skin:sensible_skin,
                fps:fps,
                hipoalergico:hipoalergico,
                testeado_dermatologicamente:testeado_dermatologicamente,
                tacc:tacc,
                parabenos:parabenos,
                fragancy:fragancy,
                alchool:alchool,
                cruelty_free:cruelty_free,
                cruelty_free_certificate:cruelty_free_certificate,
                vegano:vegano,
                kids:kids
            })
            navigate("/dashboard/productos")
    }

    return (
        <div className="conteiner-fluid">
            <h1 className="text-center">Vista Crear Producto</h1>
            <form onSubmit={storeProducts} >

            <div className="mb-3 text-center">
                    <label className="form-label">Marca</label>
                    <input
                        value={idbrand}
                        onChange={ (e)=> setIdbrand(e.target.value)}
                        type="number"
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
                    <label className="form-label">Presentacion</label>
                    <input
                        value={format}
                        onChange={ (e)=> setformat(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Descripcion</label>
                    <input
                        value={description}
                        onChange={ (e)=> setDescription(e.target.value)}
                        type="textarea"
                        className="form-control"
                        style={{width:"50%", height:"150px", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">INCI</label>
                    <input
                        value={inci}
                        onChange={ (e)=> setInci(e.target.value)}
                        type="textarea"
                        className="form-control"
                        style={{width:"50%", height:"150px", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Categoria</label>
                    <select
                        value={category}
                        onChange={ (e)=> setCategory(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Limpiador">Limpiador</option>
                        <option value="SCRUB">SCRUB</option>
                        <option value="Hidratante">Hidratante</option>
                        <option value="Tonico">Tonico</option>
                        <option value="SERUM">SERUM</option>
                        <option value="Contorno de Ojos">Contorno de Ojos</option>
                        <option value="Renovadores y Exfoliantes">Renovadores y Exfoliantes</option>
                        <option value="Protector Solar">Protector Solar</option>
                        <option value="Mascarillas">Mascarillas</option>
                        <option value="Aampollas">Aampollas</option>
                        <option value="Aampollas Y Cápsulas">Aampollas y Cápsulas</option>
                        <option value="Esencia">Esencia</option>
                        <option value="Aceite">Aceite</option>
                        <option value="Labios">Labios</option>
                    </select>
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Categoria Extra</label>
                    <input
                        value={extra_category}
                        onChange={ (e)=> setExtracategory(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Uso</label>
                    <select
                        value={use}
                        onChange={ (e)=> setUse(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Facial">Facial</option>
                        <option value="Manos">Manos</option>
                        <option value="Corporal">Corporal</option>
                        <option value="Labios">Labios</option>
                        <option value="Facial Y Corporal">Facial y Corporal</option>
                    </select>
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Sub Categoria</label>
                    <input
                        value={sub_category}
                        onChange={ (e)=> setSubcategory(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Sub Categoria Extra</label>
                    <input
                        value={extra_sub_category}
                        onChange={ (e)=> setExtrasubcategory(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Sub Categoria Extra 2</label>
                    <input
                        value={extra_sub_category_2}
                        onChange={ (e)=> setExtrasubcategory2(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Contiene Color</label>
                    <select
                        value={color}
                        onChange={ (e)=> setColor(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Tipo de Piel</label>
                    <select
                        value={type_of_skin}
                        onChange={ (e)=> setTypeofskin(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Todo Tipo">Todo Tipo</option>
                        <option value="Piel Seca">Piel Seca</option>
                        <option value="Piel Mixta">Piel Mixta</option>
                        <option value="Piel Grasa">Piel Grasa</option>
                        <option value="No especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Piel Sensible</label>
                    <select
                        value={sensible_skin}
                        onChange={ (e)=> setSensibleskin(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Contiene FPS</label>
                    <select
                        value={fps}
                        onChange={ (e)=> setFps(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Hipoalergenico</label>
                    <select
                        value={hipoalergico}
                        onChange={ (e)=> setHipoalergico(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Testeado Dermatologicamente</label>
                    <select
                        value={testeado_dermatologicamente}
                        onChange={ (e)=> setTesteadodermatologicamente(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Contiene Tacc</label>
                    <select
                        value={tacc}
                        onChange={ (e)=> setTacc(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Contiene Parabenos</label>
                    <select
                        value={parabenos}
                        onChange={ (e)=> setParabenos(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Contiene Fragancia</label>
                    <select
                        value={fragancy}
                        onChange={ (e)=> setFragancy(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Contiene Alchool</label>
                    <select
                        value={alchool}
                        onChange={ (e)=> setAlchool(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Cruelty Free</label>
                    <select
                        value={cruelty_free}
                        onChange={ (e)=> setCrueltyfree(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No especifica">No Especifica</option>
                    </select>
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
                    <select
                        value={vegano}
                        onChange={ (e)=> setVegano(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 text-center">
                    <label className="form-label">Apto Niños</label>
                    <select
                        value={kids}
                        onChange={ (e)=> setKids(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No especifica">No Especifica</option>
                    </select>
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

export default CreateProduct;
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/products";

const CreateProduct = () => {
    const [idbrand, setIdbrand] = useState (" ")
    const [name, setName] = useState (" ")
    const [format, setFormat] = useState (" ")
    const [description, setDescription] = useState (" ")
    const [inci, setInci] = useState (" ")
    const [idcategory, setIdCategory] = useState (" ")
    const [iduse, setIdUse] = useState (" ")
    const [idsub_category, setIdSubcategory] = useState (" ")
    const [color, setColor] = useState (" ")
    const [type_of_skin, setTypeofskin] = useState (" ")
    const [sensible_skin, setSensibleskin] = useState (" ")
    const [fps, setFps] = useState (" ")
    const [hypoallergenic, setHypoallergenic] = useState (" ")
    const [dermatologically_tested, setDermatologically_tested] = useState (" ")
    const [tacc, setTacc] = useState (" ")
    const [parabens, setParabens] = useState (" ")
    const [fragancy, setFragancy] = useState (" ")
    const [alchool, setAlchool] = useState (" ")
    const [kids, setKids] = useState (" ")
    const [Brands, setBrands] = useState([]);
    const [Categorys, setCategorys] = useState([]);
    const [SubCategorys, setSubCategorys] = useState([]);
    const [Uses, setUses] = useState([]);
    const navigate =useNavigate()

    const storeProducts = async (e) => {
        e.preventDefault ()
        await axios.post(URI,
            {
                idbrand:idbrand,
                name: name,
                format:format,
                description:description,
                inci:inci,
                idcategory:idcategory,
                iduse:iduse,
                idsub_category:idsub_category,
                color:color,
                type_of_skin:type_of_skin,
                sensible_skin:sensible_skin,
                fps:fps,
                hypoallergenic:hypoallergenic,
                dermatologically_tested:dermatologically_tested,
                tacc:tacc,
                parabens:parabens,
                fragancy:fragancy,
                alchool:alchool,
                kids:kids
            })
            navigate("/dashboard/productos")
    }
    useEffect(() => {
        axios
            .get("http://localhost:8000/brands")
            .then((response) => {
            setBrands(response.data);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []
    );

    useEffect(() => {
        axios
            .get("http://localhost:8000/categorys")
            .then((response) => {
            setCategorys(response.data);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []
    );

    useEffect(() => {
        axios
            .get("http://localhost:8000/uses")
            .then((response) => {
            setUses(response.data);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []
    );

    useEffect(() => {
        axios
            .get("http://localhost:8000/subcategorys")
            .then((response) => {
            setSubCategorys(response.data);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []
    );

    return (
        <div className="conteiner-fluid text-center">
            <h1>Vista Crear Producto</h1>
            <form onSubmit={storeProducts} >

            <div className="mb-3 ">
                    <label className="form-label">Marca</label>
                    <select
                        value={idbrand}
                        onChange={ (e)=> setIdbrand(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >   
                        <option defaultValue>Selecciona una Opción</option>
                            {Brands.map((brand) => (  
                                <option key={brand.id} value={brand.id} >{brand.name}</option>
                            ))}
                    </select>
                </div>

                <div className="mb-3 ">
                    <label className="form-label">Nombre</label>
                    <input
                        value={name}
                        onChange={ (e)=> setName(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 ">
                    <label className="form-label">Presentación</label>
                    <input
                        value={format}
                        onChange={ (e)=> setFormat(e.target.value)}
                        type="text"
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 ">
                    <label className="form-label">Descripcion</label>
                    <textarea
                        value={description}
                        onChange={ (e)=> setDescription(e.target.value)}
                        className="form-control"
                        style={{width:"50%", height:"150px", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 ">
                    <label className="form-label">INCI</label>
                    <textarea
                        value={inci}
                        onChange={ (e)=> setInci(e.target.value)}
                        className="form-control"
                        style={{width:"50%", height:"150px", margin: "auto", border: "2px solid black"}} 
                    />
                </div>

                <div className="mb-3 ">
                    <label className="form-label">Categoría</label>
                    <select
                        value={idcategory}
                        onChange={ (e)=> setIdCategory(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >   
                        <option defaultValue>Selecciona una Opción</option>
                            {Categorys.map((category) => (  
                                <option key={category.id} value={category.id} >{category.name}</option>
                            ))}
                    </select>
                </div>

                <div className="mb-3 ">
                    <label className="form-label">Uso</label>
                    <select
                        value={iduse}
                        onChange={ (e)=> setIdUse(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >   
                        <option defaultValue>Selecciona una Opción</option>
                            {Uses.map((use) => (  
                                <option key={use.id} value={use.id} >{use.name}</option>
                            ))}
                    </select>
                </div>

                <div className="mb-3 ">
                    <label className="form-label">Sub Categoria</label>
                    <select
                        value={idsub_category}
                        onChange={ (e)=> setIdSubcategory(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >   
                        <option defaultValue>Selecciona una Opción</option>
                            {SubCategorys.map((subcategory) => (  
                                <option key={subcategory.id} value={subcategory.id} >{subcategory.name}</option>
                            ))}
                    </select>
                </div>

                <div className="mb-3 ">
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
                        <option value="No Corresponde">No Corresponde</option>
                        <option value="No Especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 ">
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
                        <option value="No Corresponde">No Corresponde</option>
                        <option value="No Especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 ">
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
                        <option value="No Corresponde">No Corresponde</option>
                        <option value="No Especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 ">
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
                        <option value="No Corresponde">No Corresponde</option>
                        <option value="No Especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 ">
                    <label className="form-label">Hipoalergenico</label>
                    <select
                        value={hypoallergenic}
                        onChange={ (e)=> setHypoallergenic(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No Corresponde">No Corresponde</option>
                        <option value="No Especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 ">
                    <label className="form-label">Testeado Dermatologicamente</label>
                    <select
                        value={dermatologically_tested}
                        onChange={ (e)=> setDermatologically_tested(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No Corresponde">No Corresponde</option>
                        <option value="No Especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 ">
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
                        <option value="No Corresponde">No Corresponde</option>
                        <option value="No Especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 ">
                    <label className="form-label">Contiene Parabenos</label>
                    <select
                        value={parabens}
                        onChange={ (e)=> setParabens(e.target.value)}
                        className="form-control"
                        style={{width:"50%", margin: "auto", border: "2px solid black"}} 
                    >
                        <option defaultValue>Selecciona una Opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No Corresponde">No Corresponde</option>
                        <option value="No Especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 ">
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
                        <option value="No Corresponde">No Corresponde</option>
                        <option value="No Especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 ">
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
                        <option value="No Corresponde">No Corresponde</option>
                        <option value="No Especifica">No Especifica</option>
                    </select>
                </div>

                <div className="mb-3 ">
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
                        <option value="No Corresponde">No Corresponde</option>
                        <option value="No Especifica">No Especifica</option>
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
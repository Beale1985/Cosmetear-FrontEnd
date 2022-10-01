import { React, useEffect, useState} from "react";
import axios from "axios";
import { FaProductHunt, FaRegistered } from "react-icons/fa"

const HomeDashboard = () => {

const [brands, setBrands] = useState([]);
const [products, setProducts] = useState([]);

useEffect(() => {
    axios
        .get("/brands")
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
        .get("/products")
        .then((response) => {
        setProducts(response.data);
    })
        .catch((error) => {
        console.log(error);
    });
}, []
);

return (
    <div id="wrapper" style={{minHeight:"78vh" }}>
        <div className="container-fluid">    
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 mt-2 text-gray-800">Dashboard</h1>
                    </div>

                    <div className="row">

                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-primary mb-3 py-2 h-100">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Marcas:</div>
                                            <div className="h5 mb-0 font-weight-bold text-secondary">{brands.length}</div>
                                        </div>
                                        <div className="col-auto">
                                            <FaRegistered className="fa-2x" style={{color:"rgba(0,0,0,0.2)"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Productos:</div>
                                            <div className="h5 mb-0 font-weight-bold text-secondary">{products.length}</div>
                                        </div>
                                        <div className="col-auto">
                                            <FaProductHunt className="fa-2x" style={{color:"rgba(0,0,0,0.2)"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>

    )
}

export default HomeDashboard;



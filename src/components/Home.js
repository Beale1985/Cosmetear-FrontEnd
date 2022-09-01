import Footer from "./Footer.js";
import Header from "./Header.js";
import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

    return(
        <div className="container-fluid">
            < Header />
            <Row>
                <Col style={{backgroundImage: `url("https://i.postimg.cc/KvBbKJfQ/attractive-woman-getting-face-beauty-procedures-in-spa-salon-2.jpg")`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        margin:"0 12px",
                        height:"480px"
                        }}>
                            <h2 className="text-center mt-5 mb-5">
                                Encontrá el producto que necesitas.
                            </h2><br/>
                            <h4 className="text-center mt-5 mb-5">
                                Comienza seleccionando el tipo de búsqueda que queres realizar.
                            </h4>
                    <Link className="d-flex justify-content-center btn btn-primary" to={`/busquedas`} > IR A BUSQUEDAS</Link>
                </Col>
            </Row>
            < Footer />
        </div>
    )
}

export default Home
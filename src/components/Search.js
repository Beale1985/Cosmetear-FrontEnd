import Footer from "./Footer";
import Header from "./Header";
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Search = () => {

    return(
        <div className="container-fluid">
            <Header />
            <Col style={{backgroundImage: `url("https://i.postimg.cc/KvBbKJfQ/attractive-woman-getting-face-beauty-procedures-in-spa-salon-2.jpg")`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height:"480px"
                        }}>
            <h1 className="text-center"> Como queres realizar la búsqueda?. </h1>
            <h1 className="text-center"> Por Marca o Categoría? </h1>
            <Link className="d-flex justify-content-center btn btn-primary" to={`/busqueda/marcas/`} >Marcas</Link>
            <br />
            <Link className="d-flex justify-content-center btn btn-primary" to={`/busqueda/categorias/`} >Categorías</Link>
            </Col>
            <Footer />
        </div>
    )
}

export default Search
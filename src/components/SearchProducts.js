import CardsProducts from "./CardsProducts.js";
import Footer from "./Footer.js";
import Header from './Header.js';
import {React} from 'react';

const SearchProducts = () => {

    return(
            <div className="container-fluid">
            <Header />
            <CardsProducts />
            <Footer />
        </div>
    )
}

export default SearchProducts
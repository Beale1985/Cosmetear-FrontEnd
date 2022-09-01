import CardsBrands from "./CardsBrands.js";
import Footer from "./Footer.js";
import Header from './Header.js';
import {React} from 'react';

const SearchBrands = () => {

    return(
        <div className="container-fluid">
            <Header />
            <CardsBrands />
            <Footer />
        </div>
    )
}

export default SearchBrands
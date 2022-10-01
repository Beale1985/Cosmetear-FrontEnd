import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import CreateBrand from './components/CreateBrand';
import EditBrands from "./components/EditBrands";
import CreateProduct from './components/CreateProduct';
import EditProduct from "./components/EditProduct";
import ProductDetail from './components/ProductDetail';
import CreateUser from './components/CreateUser';
import EditUsers from './components/EditUser';
import Login from './components/Login';
import Home from './components/Home';
import SearchBrands from './components/SearchBrands';
import SearchCategory from "./components/SearchCategory";
import BrandDetail from './components/BrandDetail.js';
import Dashboard from './components/Dashboard';
import SearchProducts from './components/SearchProducts';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateCategory from './components/CreateCategorys';

function App() {
  return (
    <div className='homePage'>
      <BrowserRouter>
      <Routes className="body" >

        <Route path="/" element={<Home />} />

        <Route path="/ingresar" element={<Login />} />

        <Route path="/busqueda/marcas/" element={<SearchBrands />} />

        <Route path="/busqueda/marcas/:id" element={<BrandDetail />} />

        <Route path="/busqueda/categorias/" element={<SearchCategory />} />

        <Route path="/busqueda/productos/:id" element={<SearchProducts />} />

        <Route path="/busqueda/productos/detalle/:id" element={<ProductDetail />} />

        <Route path="/dashboard/*" exact element={<Dashboard />} />

        <Route path="/categorias/crear" element={<CreateCategory />} />

        <Route path="/marcas/crear" element={<CreateBrand />} />

        <Route path="/marcas/editar/:id" element={<EditBrands />} />

        <Route path="/productos/crear" element={<CreateProduct />} />

        <Route path="/productos/editar/:id" element={<EditProduct />} />

        <Route path="/usuarios/crear" element={<CreateUser />} />

        <Route path="/usuarios/editar/:id" element={<EditUsers />} />

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

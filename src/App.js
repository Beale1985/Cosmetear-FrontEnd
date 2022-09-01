import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CreateBrand from './components/CreateBrand';
import EditBrands from "./components/EditBrands";
import CreateProduct from './components/CreateProduct';
// import EditProducts from "./components/EditProducts";
import ProductDetail from './components/ProductDetail';
import CreateUser from './components/CreateUser';
import EditUsers from './components/EditUser';
import Login from './components/Login';
import Search from './components/Search';
import Home from './components/Home';
import SearchBrands from './components/SearchBrands';
import SearchCategory from "./components/SearchCategory";
import BrandDetail from './components/BrandDetail.js';
import Dashboard from './components/Dashboard';
import SearchProducts from './components/SearchProducts';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/ingresar" element={<Login />} />

        <Route path="/busquedas" element={<Search />} />

        <Route path="/busqueda/marcas/" element={<SearchBrands />} />

        <Route path="/busqueda/marcas/:id" element={<BrandDetail />} />

        <Route path="/busqueda/categorias/" element={<SearchCategory />} />

        <Route path="/busqueda/productos/:id" element={<SearchProducts />} />

        <Route path="/busqueda/productos/detalle/:id" element={<ProductDetail />} />

        <Route path="/dashboard/*" exact element={<Dashboard />} />

        <Route path="/marcas/crear" element={<CreateBrand />} />

        <Route path="/marcas/editar/:id" element={<EditBrands />} />

        <Route path="/productos/crear" element={<CreateProduct />} />

        {/* <Route path="/productos/editar/:id" element={<EditProducts />} /> */}

        <Route path="/usuarios/crear" element={<CreateUser />} />

        <Route path="/usuarios/editar/:id" element={<EditUsers />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

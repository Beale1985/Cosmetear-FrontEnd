import { Link } from 'react-router-dom';

const Header = () => {

    return(   
        <nav className='navbar navbar-light bg-secondary bg-dark p-3 mt-1 mb-1'>
            <div class="container-fluid">
                <Link to={`/`}  className="text-white text-decoration-none"> LOGO</Link><br />
                <Link to={`/ingresar`} className="btn btn-primary"  > Administrador</Link>
            </div>
        </nav> 
    )
}

export default Header
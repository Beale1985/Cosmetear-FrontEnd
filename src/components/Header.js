import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='container-fluid header d-flex justify-content-between header'>
            <Link to={`/`}>
            <img src={"https://i.postimg.cc/jS25tX8G/Logo-Cosmetear.png"} alt="Logo" style={{width: "80px"}}/>
            </Link>
            {/* <Link to={`/`}  className="text-white text-decoration-none"> LOGO</Link><br /> */}
            <a  style={{textDecoration: 'none', color:"white", fontWeight: 'bold'}} href="/">HOME</a>
        </nav>
    );
  }
  
  export default Header;
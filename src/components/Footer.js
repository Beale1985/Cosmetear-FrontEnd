import {AiFillFacebook, AiFillTwitterSquare, AiFillGoogleSquare, AiFillInstagram} from "react-icons/ai";

const Footer = () => {

    return(
        
<footer className="text-center text-white bg-dark mt-1 mb-1"  >
  <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
      <a className="nav-link"><AiFillFacebook style={{color:"white", scale:"2"}}/></a>
      </li>
      <li className="nav-item">
      <a className="nav-link"><AiFillTwitterSquare style={{color:"white", scale:"2"}}/></a>
      </li>
      <li className="nav-item">
      <a className="nav-link"><AiFillGoogleSquare style={{color:"white", scale:"2"}}/></a>
      </li>
      <li className="nav-item">
      <a className="nav-link"><AiFillInstagram style={{color:"white", scale:"2"}}/></a>
      </li>
  </ul>
  <div className="text-center text-white bg-dark p-3" >
    © 2020 Copyright
  </div>
</footer>
    )
}

export default Footer
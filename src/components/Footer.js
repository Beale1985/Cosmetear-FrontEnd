import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram} from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri"

const Footer = () => {

  return(
    <footer className="container-fluid footer" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item ">
          <a className="nav-link" href="/"><AiFillFacebook style={{ scale:"2", color:"white"}}/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><AiFillTwitterSquare style={{ scale:"2", color:"white"}}/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><AiFillInstagram style={{ scale:"2", color:"white"}}/></a><br/>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/ingresar"><RiAdminFill style={{ scale:"2", color:"white"}}/></a><br/>
        </li>
      </ul>
      <div className="text-center text-white" >
        © 2022 Copyright / Designed By Alexis Bello
      </div>
    </footer>
  )
}

export default Footer
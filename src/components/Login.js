import React, { useState } from "react";
import { AiFillFacebook,AiFillTwitterSquare, AiFillGooglePlusSquare } from "react-icons/ai";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const URI = "http://localhost:8000/login"

const Login =  () => { 
	const navigate =useNavigate()
	const [email, setEmail] = useState (" ")
    const [password, setPassword] = useState (" ")

	const handleSubmit = async (e) => {
		e.preventDefault();
        await axios.post(URI,
            {
              email:email,
              password:password,
            })
			.then( response => {
				if (response.data.message === "OK"){
					navigate("/dashboard")
				} else if (response.data.message === "Contraseña Incorrecta"){
					alert(response.data.message)
				}
			})
			.catch (error => {
				alert(error.response.data.message)
			})
    }

    return(
			<div className="container-fluid">
			<Header />
			<div className="body-login">
        		<div className="container-login">
					<div className="d-flex justify-content-center h-100">
						<div className="card-login">
							<div className="card-header">
								<div className="d-flex justify-content-end social_icon">
									<span><AiFillFacebook /></span>
									<span><AiFillTwitterSquare /></span>
									<span><AiFillGooglePlusSquare /></span>
								</div>
                				<h3>Ingresar</h3>
							</div>
						<div className="card-body-login">
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label htmlFor="usuario">Usuario</label>
								<input 
								type="email"
								name="email"
								onChange={ (e)=> setEmail(e.target.value)}
								className="form-control"
								placeholder="Usuario"/>
							</div>
							<div className="form-group">
								<label htmlFor="password">Contraseña</label>
								<input 
								type="password"
								name="password"
								onChange={ (e)=> setPassword(e.target.value)}
								className="form-control"
								placeholder="Password"/>
							</div>
							<div className="form-check">
								<input type="checkbox" className="form-check-input" id="exampleCheck1" />
								<label className="form-check-label">Recuerdame</label>
							</div>
							<button className="btn btn-primary">Ingresar</button>
						</form>
						</div>
					<div className="card-footer">
						<div className="d-flex justify-content-center">
							<a href="">Registrarse</a>
						</div>
						<div className="d-flex justify-content-center">
							<a href="">Olvidaste tu contraseña?</a>
						</div>
					</div>
				</div>
				</div>
				</div>
			</div>
			<Footer />
			</div>
    )
}

export default Login
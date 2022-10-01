import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Cookies from "universal-cookie";

const URI = "http://localhost:8000/login"

const Login =  () => { 
	
const navigate =useNavigate()
const [email, setEmail] = useState (" ")
const [password, setPassword] = useState (" ")

const alertPassword = document.getElementById("alertPassword")

const handleSubmit = async (e) => {
	e.preventDefault();
    await axios.post(URI,
        {
        email:email,
        password:password,
    })
	.then( response => {
		if (response.data.message === "OK"){
			const cookies = new Cookies();
			cookies.set("user", email, {path: "/dashboard"})
			window.location.href="/dashboard"
			navigate("/dashboard")
		} else if (response.data.message === "Contraseña Incorrecta"){
			alertPassword.style.display="block"
		}
	})
	.catch (error => {
		alert(error.response.data.message)
	})
    }

return(
	<div>
		<Header />
		<div className="body-login" style={{height:"81vh"}}>
        	<div className="container mt-4 mb-4 rounded" style={{width:"25%", backgroundColor: "rgba(255, 255, 255, 0.9)"}}>
				<div className="d-flex justify-content-center h-100">
					<div className="card-login">
						<div className="card-header text-center">
                			<h3>Ingresar</h3>
						</div>
					<div className="card-body-login text-center">
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
							<div className="text-danger" id="alertPassword" style={{display:"none"}}>Contraseña Incorrecta</div>
							<div className="form-check">
								<input type="checkbox" className="form-check-input" id="exampleCheck1" />
								<label className="form-check-label">Recuerdame</label>
							</div>
							<button className="btn btn-primary m-3">Ingresar</button>
						</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default Login
import React from 'react'
import SocialButton from "./SocialButton"
// import Alert from "./Alert";
import Formulario from './Formulario'


export default function Registro() {

    return (

        <div className="container">
            <div className="mb-3 formIngresoDiv">
                <h1 className='titulo' >Crea una Cuenta</h1>
                <div className='social'>
                    <SocialButton facebook="fa-brands fa-facebook" />
                    <SocialButton instagram="fa-brands fa-instagram" />
                    <SocialButton linkedin="fa-brands fa-linkedin" />
                </div>
                <h4 className="mensaje">O usa tu email para registrarte</h4>
                {/* <div className="formPrincipal" > */}
                <Formulario />
                {/* </div> */}
            </div>
        </div>
    )
}

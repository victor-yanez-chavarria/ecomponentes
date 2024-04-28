import React from 'react'
import { useState } from 'react';
import Alert from "./Alert"



const Formulario = () => {
    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);

    //Función antes de enviar el formulario
    const validarDatos = (e) => {
        e.preventDefault();

        //Validación;
        if (nombre === '' || email === '' || password === '' || password2 === '') {
            setError(true);

            return;
        } else if (password != password2) {
            setError2(true);

            return;
        }
        setError(false);
        setError2(false);
        setNombre('');
        setEmail('');
        setPassword('');
        setPassword2('');
        Alert()
    };


    return (
        <form className="formIngreso" onSubmit={validarDatos}>
            <div className="containerForm">
                <div className="mb-3 formIngresoDivForm">
                    <div className="mb-3 infoPersona">
                        <div className="mb-3">
                            <input type="text" placeholder="Nombre" className='form-control nombre' onChange={(e) => setNombre(e.target.value)}
                                value={nombre}
                            />
                        </div>
                        <div className="mb-3">
                            <input type="email" placeholder="tuemail@ejemplo.com" className="form-control email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                    </div>


                    <div className="mb-3 infoPass">
                        <input type="password" placeholder="contraseña" className='form-control password' onChange={(e) => setPassword(e.target.value)}
                            value={password} />
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder="confirme contraseña" className="form-control confirmPassword" onChange={(e) => setPassword2(e.target.value)}
                            value={password2} />
                    </div>
                    <div className="mb-3 d-grid gap-2">
                        <button type="submit" className="btn btn-success" >Registrarse</button>
                    </div>
                    <div className="alert alert-danger mb-3" role="alert">
                        {error ? <p>Todos los campos son obligatorios</p> : null}
                        {error2 ? <p>Las contraseñas no Coinciden</p> : null}
                    </div>
                </div>
            </div >
        </form >

    )
}
export default Formulario

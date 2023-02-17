import React, { useState } from "react";
import "../asset/style/Log_in.css";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Sign_up(){
    const navigator = useNavigate()
    const data = useState({
        name: "",
        email: "",
        password: ""
    })

    const url = 'http://localhost:3000/api/user/create'



    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = values =>{
        console.log(values);
        const data = values
        Swal.fire(
            'Bienvenido!',
            'Cuenta Creada con Exito',
            'success'
        )
        axios.post(url,{
            name: data.name,
            email: data.email,
            password: data.password
        })
        .then(res=>{
            console.log(res.data)
        })
        navigator('/')

    }

    return(
        <div className="container w-75 mt-5 bg-light rounder shadow">
            <div className="row align-items-stretch">
                <div className="col bg d-none d-lg-block col-md-5 col-lg-7 col-xl-6 rounder">
                    
                </div>


                <div className="col p-5 rounder-end">
                    <div className="text-end">
                        <h2>Fdez</h2>
                        
                    </div>
                    <h2 className="fw-bold text-center py-5">Registrate</h2>

                    <form className="was-validated" noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                            <label  className="form-label">Escribe Tu Nombre</label>
                            <input type="text" className="form-control"  placeholder="name" required {...register("name",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                }
                            })}></input>
                            {errors.name && <span className="text-danger">{errors.name.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label  className="form-label">Escribe Tu Correo</label>
                            <input type="text" className="form-control"  placeholder="Email" required {...register("email",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                },
                                pattern:{
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalido email"
                                }
                            })}></input>
                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label  className="form-label">Escribe Tu Constraseña</label>
                            <input type="password" className="form-control"  placeholder="Password" required {...register("password",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                },
                                minLength:{
                                    value: 8,
                                    message: "La contraseña debe tener minimo 8 caracteres"
                                }
                            })}></input>
                            {errors.password && <span className="text-danger">{errors.password.message}</span>}
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Registrar</button>
                        </div>

                        <div className="my-3">
                            <span className="fw-bold">Tienes Cuenta? <a href="/">Login</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sign_up;
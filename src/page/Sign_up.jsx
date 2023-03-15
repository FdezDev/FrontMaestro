import React, { useState } from "react";
import "../asset/style/Log_in.css";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, ProgressBar } from 'react-bootstrap';
import { FaCog, FaCheck, FaTimes } from 'react-icons/fa'; // importar los iconos que deseas mostrar
import img from '../asset/img/icons.png'

function Sign_up() {
    const navigator = useNavigate()
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [colonia, setColonia] = useState('');
    const [edificio, setEdificio] = useState('');
    const [codigoPostal, setcodigoPostal] = useState('');
    // función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Datos del formulario enviado:', { email, password, name, phone, state, codigoPostal, city, colonia, edificio });
        // Aquí podríamos enviar los datos a un servidor o hacer cualquier otra acción necesaria
    };

    //


    return (
        <div className="container w-75 mt-5 bg-light rounder shadow">
            <div className="row align-items-stretch">
                <div className="col bg d-none d-lg-block col-md-5 col-lg-7 col-xl-6 rounder">

                </div>


                <div className="col p-5 rounder-end">
                    <div className="text-end">
                        <h2>Fdez</h2>

                    </div>
                    <h2 className="fw-bold text-center py-5">Registrate</h2>

                    <Form onSubmit={handleSubmit}>
                        <ProgressBar animated now={(step / 4) * 100} />


                        {step === 1 && (
                            <>
                                <Form.Group controlId="email">
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <div className="d-grid mt-3">
                                    <Button className="btn btn-primary" onClick={() => setStep(step + 1)}>Siguiente</Button>
                                </div>

                            </>
                        )}
                        {step === 2 && (
                            <>
                                <Form.Group controlId="name">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="phone">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </Form.Group>
                                <div className="d-grid mt-3">
                                    <Button className="btn btn-primary" onClick={() => setStep(step + 1)}>Siguiente</Button>
                                </div>
                                <div className="d-grid mt-3">
                                    <Button variant="secondary" className="btn btn-primary" onClick={() => setStep(step - 1)}>Anterior</Button>
                                </div>
                            </>
                        )}
                        {step === 3 && (
                            <><Form.Group controlId="codigo Postal">
                                <Form.Label>codigoPostal</Form.Label>
                                <Form.Control type="text" value={state} onChange={(e) => setcodigoPostal(e.target.value)} />
                            </Form.Group>
                                <Form.Group controlId="state">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control type="text" value={state} onChange={(e) => setState(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="city">
                                    <Form.Label>Ciudad</Form.Label>
                                    <Form.Control type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="colonia">
                                    <Form.Label>Colonia</Form.Label>
                                    <Form.Control type="text" value={colonia} onChange={(e) => setColonia(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="edificio">
                                    <Form.Label>Edificio</Form.Label>
                                    <Form.Control type="text" value={edificio} onChange={(e) => setEdificio(e.target.value)} />
                                </Form.Group>

                                <div className="d-grid mt-3">
                                    <Button className="btn btn-primary" onClick={() => setStep(step + 1)}>Siguiente</Button>
                                </div>

                                <div className="d-grid mt-3">
                                    <Button variant="secondary" className="btn btn-primary" onClick={() => setStep(step - 1)}>Anterior</Button>
                                </div>
                            </>
                        )
                        }
                        {step === 4 && (
                            <>
                                <div className="d-grip mt-3">
                                    <div class="alert alert-info" role="alert">
                                        OJO!! para poder iniciar sesion es necesario confirmar tu cuenta, sete enviara un correo despues de crear la cuenta                                </div>
                                </div>
                                <div className="d-grid mt-3">
                                    <Button variant="primary" type="submit">Crear cuenta</Button>
                                </div>
                            </>
                        )
                        }
                    </Form >
                </div>
            </div>
        </div>
    );
}

export default Sign_up;
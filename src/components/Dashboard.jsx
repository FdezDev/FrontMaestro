import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup } from 'reactstrap';





function Dashboard() {
    const [maestro, setMaestro] = useState(false);
    const master = () => setMaestro(!maestro);
    const [esclava, setEsclava] = useState(false);
    const esclav = () => setEsclava(!esclava);
    const [modaladd, setModaladd] = useState(false)
    const add = () => setModaladd(!modaladd);

    const [data1, setData1] = useState({
        name: '',
        nameProduc: '',
        description: '',
        price: '',
        amount: '',
        selectedFile: null
    })
    const [data, setData] = useState({
        id: '',
    })

    const [data2, setData2] = useState({
        id: '',
        nameProduc: '',
        description: '',
        price: '',
        amount: '',
    })


    function handle(e) {
        e.preventDefault();
        const newdata = { ...data1 }
        newdata[e.target.id] = e.target.value
        setData1(newdata)
        console.log(newdata)

    }


    const handleFileSelected = (e) => {
        const files = Array.from(e.target.files)
        console.log("files:", files);

        if (files && files.length > 0) {
            const newdata = { ...data1 }
            newdata["selectedFile"] = files[0];
            setData1(newdata)
        }

    }





    const urladd = 'http://localhost:3000/api/product/create'
    function Enviar() {
        const formData = new FormData();
        formData.append("name", data1.selectedFile);
        formData.append("nameProduc", data1.nameProduc);
        formData.append("description", data1.description);
        formData.append("price", data1.price);
        formData.append("amount", data1.amount);

        axios.post(urladd, formData)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Que bien',
                        text: "Se agrego nuevo producto!",
                        icon: 'success',
                        confirmButtonColor: '#0e46ff',
                        confirmButtonText: 'Okay'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.replace('/Index');
                        }
                    })
                } else {
                    Swal.fire(
                        'ATENCIÓN',
                        'Ha ocurrido un error al guardar la imagen, reintente',
                        'warning'
                    );
                }
            })

        esclav(false);

    }

 
    function Enviar() {
        const formData = new FormData();
        formData.append("name", data1.selectedFile);
        formData.append("nameProduc", data1.nameProduc);
        formData.append("description", data1.description);
        formData.append("price", data1.price);
        formData.append("amount", data1.amount);

        axios.post(urladd, formData)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Que bien',
                        text: "Se agrego nuevo producto!",
                        icon: 'success',
                        confirmButtonColor: '#0e46ff',
                        confirmButtonText: 'Okay'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.replace('/Index');
                        }
                    })
                } else {
                    Swal.fire(
                        'ATENCIÓN',
                        'Ha ocurrido un error al guardar la imagen, reintente',
                        'warning'
                    );
                }
            })

        master(false);

    }


    return (
        <div class="container-xxl w-100 mt-5 d-lg-block col-md-5 col-lg-7 col-xl-6 bg-light rounder shadow">
            <div class="row align-items-stretch">
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand text-primary" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-house-lock" viewBox="0 0 16 16">
                                <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z" />
                                <path d="M10 13a1 1 0 0 1 1-1v-1a2 2 0 0 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
                            </svg>
                            Tuxtla <small className="text-black">Seguro</small>
                        </a>

                        <div class="dropdown">
                            <button onClick={master} class="btn btn-outline-primary" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-person-lock" viewBox="0 0 16 16">
                                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h5ZM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
                                </svg>
                                Maestro
                            </button>
                        </div>
                        <button onClick={esclav} class="btn btn-outline-primary" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                            </svg>
                            Esclava
                        </button>
                        <div class="dropdown">
                            <button class="btn btn-outline-primary" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                                Arisel
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><a href="/" class="dropdown-item" type="button">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav class="navbar navbar-dark bg-primary">
                    <div className="container">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-light" type="button">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
            <h1 className="text-danger">Usuarios</h1>
            <div>
                <form>
                    <Modal isOpen={esclava} >
                        <ModalHeader className="text-primary">Agregar Esclava</ModalHeader>
                        <ModalBody>
                            <form className="was-validated" noValidate  >
                                <FormGroup>
                                    <div>
                                        <Label>Img</Label>
                                        <input type="file" name='file' class="form-control" onChange={handleFileSelected} id="name" aria-label="Upload" required></input>
                                    </div>
                                    <div>
                                        <Label for="price">Titulo</Label>
                                        <input type="text" className="form-control" onChange={(e) => handle(e)} id="nameProduc" value={data1.nameProduc} placeholder="titulo" required ></input>
                                    </div>
                                    <div>
                                        <Label for="price">Description</Label>
                                        <input type="text" className="form-control" onChange={(e) => handle(e)} id="description" value={data1.description} placeholder="descriptions" required ></input>
                                    </div>
                                    <div>
                                        <Label for="Stock">Precio</Label>
                                        <input type="text" className="form-control" onChange={(e) => handle(e)} id="price" value={data1.price} placeholder="precio" required></input>
                                    </div>
                                    <div>
                                        <Label for="Stock">Stock</Label>
                                        <input type="text" className="form-control" onChange={(e) => handle(e)} id="amount" value={data1.amount} placeholder="Stock" required></input>
                                    </div>
                                </FormGroup>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" onClick={Enviar} color="primary" >Guardar</Button>
                            <Button color="secondary" onClick={esclav}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </form>
                <form>
                    <Modal isOpen={maestro} >
                        <ModalHeader className="text-primary">Agregar Maestro</ModalHeader>
                        <ModalBody>
                            <form className="was-validated" noValidate  >
                                <FormGroup>
                                    <div>
                                        <Label>Img</Label>
                                        <input type="file" name='file' class="form-control" onChange={handleFileSelected} id="name" aria-label="Upload" required></input>
                                    </div>
                                    <div>
                                        <Label for="price">Titulo</Label>
                                        <input type="text" className="form-control" onChange={(e) => handle(e)} id="nameProduc" value={data1.nameProduc} placeholder="titulo" required ></input>
                                    </div>
                                    <div>
                                        <Label for="price">Description</Label>
                                        <input type="text" className="form-control" onChange={(e) => handle(e)} id="description" value={data1.description} placeholder="descriptions" required ></input>
                                    </div>
                                    <div>
                                        <Label for="Stock">Precio</Label>
                                        <input type="text" className="form-control" onChange={(e) => handle(e)} id="price" value={data1.price} placeholder="precio" required></input>
                                    </div>
                                    <div>
                                        <Label for="Stock">Stock</Label>
                                        <input type="text" className="form-control" onChange={(e) => handle(e)} id="amount" value={data1.amount} placeholder="Stock" required></input>
                                    </div>
                                </FormGroup>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" onClick={Enviar} color="primary" >Guardar</Button>
                            <Button color="secondary" onClick={master}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </form>
            </div>
        </div>
    );
}

export default Dashboard;
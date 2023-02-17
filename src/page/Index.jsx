import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup } from 'reactstrap';
import Upimg from '../components/Upimg';
import View from '../components/View';





function Index() {
    const [modaladd, setModaladd] = useState(false);
    const add = () => setModaladd(!modaladd);
    const [modalupdate, setModalupdate] = useState(false);
    const update = () => setModalupdate(!modalupdate);
    const [modaldelet, setModaldelet] = useState(false);
    const delet = () => setModaldelet(!modaldelet);
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

    function handledelet(d) {
        d.preventDefault();
        const newdata = { ...data }
        newdata[d.target.id] = d.target.value
        setData(newdata)
        console.log(newdata)

    }


    function handleupdate(u) {
        u.preventDefault();
        const newdata = { ...data2 }
        newdata[u.target.id] = u.target.value
        setData2(newdata)
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




    const urldelet = 'http://localhost:3000/api/product/delete'

    const EnviarDelet = (d) => {

        axios.delete(urldelet, {
            data: data,
        })
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        Swal.fire({
            title: 'Datos Eliminados!',
            text: "",
            icon: 'success',
            confirmButtonColor: '#0e46ff',
            confirmButtonText: 'Okay'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace('/Index');
            }
        })
        delet(false);

    }


    const urlupdate = 'http://localhost:3000/api/product/update'

    function Enviarupdate() {
        const formData = new FormData();
        formData.append("id", data2.id);
        formData.append("nameProduc", data2.nameProduc);
        formData.append("description", data2.description);
        formData.append("price", data2.price);
        formData.append("amount", data2.amount);

        axios.post(urlupdate, formData)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Que bien',
                        text: "Se actualizo el producto!",
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
                        'Ha ocurrido un error al actualizar, reintente',
                        'warning'
                    );
                }
            })

        update(false);

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

        add(false);

    }


    return (
        <div class="container-xxl w-100 mt-5 d-lg-block col-md-5 col-lg-7 col-xl-6 bg-light rounder shadow">
            <div class="row align-items-stretch">
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand text-primary" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                            </svg>
                            Fdez <small className="text-black">Dev</small>

                        </a>
                        <div class="dropdown">

                            <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-folder" viewBox="0 0 16 16">
                                    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                                </svg>
                                Pages
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><a class="dropdown-item" type="button">Login</a></li>
                                <li><a class="dropdown-item" type="button">Sign Up</a></li>
                                <li><a class="dropdown-item" type="button">Reset Pass</a></li>
                            </ul>
                        </div>
                        <a class="btn btn-outline-primary " href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
                            </svg>
                            Tables
                        </a>
                        <div class="dropdown">
                            <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                </svg>
                                Util Product
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button onClick={delet} class="dropdown-item" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                </svg>Delete</button></li>
                                <li><button onClick={update} class="dropdown-item" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                                </svg>Update</button></li>

                            </ul>
                        </div>
                        <button onClick={add} class="btn btn-outline-primary" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                            Product add
                        </button>
                        <div class="dropdown">
                            <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                                Arisel Fernandez
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button class="dropdown-item" type="button">Profile</button></li>
                                <li><button class="dropdown-item" type="button">Setting</button></li>
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
                        <button class="btn btn-outline-light" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                            </svg>
                            Chat
                        </button>
                    </div>
                </nav>
            </div>
            <h1 className="text-danger">Productos</h1>
            <Upimg></Upimg>
            <div>
                <form>
                    <Modal isOpen={modaladd} >
                        <ModalHeader className="text-primary">Subir Producto</ModalHeader>
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
                            <Button color="secondary" onClick={add}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </form>

                <form>
                    <Modal isOpen={modalupdate} >
                        <ModalHeader className="text-primary">Actualidar Producto</ModalHeader>
                        <ModalBody>
                            <form className="was-validated" noValidate  >
                                <FormGroup>
                                <h3>Copia y Pega el Token</h3>
                                    <div class="alert alert-primary" role="alert">
                                        <View/>
                                    </div>
                                    <div>
                                        <Label for="price">Token</Label>
                                        <input type="text" className="form-control" onChange={(u) => handleupdate(u)} id="id" value={data2.id} placeholder="Token" required ></input>
                                    </div>
                                    <div>
                                        <Label for="price">Titulo</Label>
                                        <input type="text" className="form-control" onChange={(u) => handleupdate(u)} id="nameProduc" value={data2.nameProduc} placeholder="titulo" required ></input>
                                    </div>
                                    <div>
                                        <Label for="price">Description</Label>
                                        <input type="text" className="form-control" onChange={(u) => handleupdate(u)} id="description" value={data2.description} placeholder="descriptions" required ></input>
                                    </div>
                                    <div>
                                        <Label for="Stock">Precio</Label>
                                        <input type="text" className="form-control" onChange={(u) => handleupdate(u)} id="price" value={data2.price} placeholder="precio" required></input>
                                    </div>
                                    <div>
                                        <Label for="Stock">Stock</Label>
                                        <input type="text" className="form-control" onChange={(u) => handleupdate(u)} id="amount" value={data2.amount} placeholder="Stock" required></input>
                                    </div>
                                </FormGroup>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" onClick={Enviarupdate} color="primary" >Guardar</Button>
                            <Button color="secondary" onClick={update}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </form>

                <form>
                    <Modal isOpen={modaldelet} >
                        <ModalHeader className="text-primary">Delete Product</ModalHeader>
                        <ModalBody>
                            <form className="was-validated" noValidate  >
                                <FormGroup>
                                    <h3>Copia y Pega el Token</h3>
                                    <div class="alert alert-primary" role="alert">
                                        <View/>
                                    </div>
                                    <div>
                                        <Label for="price">Token</Label>
                                        <input type="text" className="form-control" onChange={(d) => handledelet(d)} id="id" value={data.id} placeholder="Token" required ></input>
                                    </div>
                                </FormGroup>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" onClick={EnviarDelet} color="primary" >Guardar</Button>
                            <Button color="secondary" onClick={delet}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </form>
            </div>
        </div>
    );
}

export default Index;
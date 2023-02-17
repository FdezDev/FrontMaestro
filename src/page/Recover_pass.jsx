import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../asset/style/Recover_pass.css";
import Swal from 'sweetalert2'
import axios from "axios";


function Recover_pass() {
  const data = useState({
    email: '',
})

  const url = 'http://localhost:3000/api/email/send'

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = values => {
    const data = values;
    axios.post(url,{
      email: data.email
    })
    .then(response => {
      console.log(response.data);
    })
    console.log(data.email);
    let timerInterval
    Swal.fire({
      title: 'Enviando Email...',
      timer: 2500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire(
          'Enviado!',
          '',
          'success'
        )
      }
    })
  }

  return (
    <div className="container w-75 mt-5 bg-light rounder shadow">
      <div className="row align-items-stretch">
        <div className="col bg1 d-none d-lg-block col-md-5 col-lg-10 col-xl-6 rounder">

        </div>


        <div className="col p-5 rounder-end">
          <div className="text-end">
            <h2>Fdez</h2>
          </div>
          <h2 className="fw-bold text-center py-5">Recuperar Password</h2>
          <p>Te enviaremos un correo para poder restablecer tu nueva Contraseña</p>
          <form className="was-validated" noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="form-label">Escribe Tu Correo</label>
              <input type="text" className="form-control" placeholder="Email" required  {...register("email", {
                required: {
                  value: true,
                  message: "El campo requerido",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalido email"
                }
              })}></input>
              {errors.email && <span className="text-danger">{errors.email.message}</span>}
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Restablecer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recover_pass;
import React, { useState } from "react";
import asistencia from "../asset/img/icons.png";

function Shop() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid g-0 px-3">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul></ul>
          </div>
        </div>
      </nav>

      <div class="container-fluid g-0">
        <div className="row g-0">
          <div className="col-1"></div>
          <button
            className="col-10 my-5 box panico"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-exclamation-diamond"
              viewBox="0 0 16 16"
            >
              <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
            </svg>
            Panico
          </button>
          <div className="col-1"></div>

          <div className="col-1"></div>
          <button
            className="col-10 my-5 box asistencia"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop2"
          >
            <img src={asistencia} className="img" />
            Asistencia
          </button>
          <div className="col-1"></div>

          {/* modal del boton panico */}
          <div
            class="modal fade"
            id="staticBackdrop1"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Modal Panico
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body"><p>Hola<br/> si desea activar la alarma de click en el boton activar<br/>si no cierre el anuncio en la X </p></div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-success"
                    data-bs-dismiss="modal"
                  >
                    Activar alarma
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* modal del boton asistencia */}
          <div
            class="modal fade"
            id="staticBackdrop2"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Modal Asistencia
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body"><p>Hola<br/> si desea activar la alarma de click en el boton activar<br/>si no cierre el anuncio en la X </p></div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-success"
                    data-bs-dismiss="modal"
                  >
                    Activar alarma
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;

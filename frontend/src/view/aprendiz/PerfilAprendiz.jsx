

import React, { useEffect, useState } from 'react';
import Perfil from "../../assets/img/Perfil.png"
import axios from 'axios';



function AprendizPerfil() {

    const [datos, setDatos] = useState([]);
    const [body, setBody] = useState({
        nombres: "",
        apellidos: ""
    })


    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        try {
            const respuesta = await axios.get('http://localhost:7000/verAprendiz/6');
            setDatos(respuesta.data);
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <body>

            <main className="container mt-4">

                <div className="pagetitle">
                    <h1>Perfil</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Inicio</a></li>
                            <li className="breadcrumb-item">Admin</li>
                            <li className="breadcrumb-item active">Perfil</li>
                        </ol>
                    </nav>
                </div>

                <section className="section profile">
                    <div className="row">
                        <div className="col-xl-4">

                            <div className="card">
                                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                    <img src={Perfil} alt="Profile" className="rounded-circle" />
                                    <h2>Bienvenido  <ul> {datos.map((dato) => (

                                        <li key={dato.id}>

                                            {dato.nombres}

                                        </li>

                                    ))}

                                    </ul></h2>
                                    <h3>Aprendiz</h3>
                                    {/* <div className="social-links mt-2">
                                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div> */}
                                </div>
                            </div>

                        </div>

                        <div className="col-xl-8">

                            <div className="card">
                                <div className="card-body pt-3">

                                    <ul className="nav nav-tabs nav-tabs-bordered">


                                        <li className="nav-item">
                                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Datos del usuario</button>
                                        </li>

                                        {/* <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Editar perfil</button>
                                        </li>*/}



                                    </ul>
                                    <div className="tab-content pt-2">

                                        <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                            <p className="small fst-italic"></p>

                                            <ul>

                                                {datos.map((dato) => (

                                                    <li key={dato.id}>

                                                        <div className=" label ">Nombres:</div>
                                                        {dato.nombres}  <br />
                                                        <div className="col-lg-3 col-md-4 label ">Apellidos:</div>

                                                        {dato.apellidos} <br />
                                                        <div className="col-lg-3 col-md-4 label ">Telefono:</div>

                                                        {dato.telefono} <br />
                                                        <div className="col-lg-3 col-md-4 label ">Ficha:</div>

                                                        {dato.ficha} <br />
                                                        <div className="col-lg-3 col-md-4 label ">Genero:</div>

                                                        {dato.genero} <br />
                                                        <div className="col-lg-3 col-md-4 label ">Fecha de nacimiento:</div>

                                                        {dato.fechaNacimiento} <br />
                                                        <div className="col-lg-3 col-md-4 label ">Tipo de documento:</div>

                                                        {dato.tipoDocumento} <br />
                                                        <div className="col-lg-3 col-md-4 label ">Numero de documento:</div>

                                                        {dato.numeroDocumento} <br />
                                                        <div className="col-lg-3 col-md-4 label ">Nombre de usuario</div>

                                                        {dato.usuario} <br />
                                                        <div className="col-lg-3 col-md-4 label ">E-mail</div>

                                                        {dato.correo} <br />



                                                    </li>

                                                ))}

                                            </ul>



                                        </div>

                                        <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                                            {/* edit perfil */}
                                            <form>
                                                <div className="row mb-3">
                                                    <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Imagen perfil</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <img src={Perfil} alt="Profile" />
                                                        <div className="pt-2">
                                                            <a href="#" className="btn btn-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload"></i></a>
                                                            <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Nombre</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="fullName" type="text" className="form-control" id="fullName" value="daniel" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Apellido</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="fullName" type="text" className="form-control" id="fullName" value="dorado" />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="about" className="col-md-4 col-lg-3 col-form-label">Sobre mí</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <textarea name="about" className="form-control" id="about" ></textarea>
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="Address" className="col-md-4 col-lg-3 col-form-label">Dirección</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="address" type="text" className="form-control" id="Address" value="la paz" />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="Phone" className="col-md-4 col-lg-3 col-form-label">celular</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="phone" type="text" className="form-control" id="Phone" value="312243678" />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="email" type="email" className="form-control" id="Email" value="daniel@gamil.com" />
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">Guardar cambios</button>
                                                </div>
                                            </form>

                                        </div>


                                        <div className="tab-pane fade pt-3" id="profile-change-password">

                                            <form>

                                                <div className="row mb-3">
                                                    <label for="currentPassword" className="col-md-4 col-lg-3 col-form-label">Actual</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="password" type="password" className="form-control" id="currentPassword" />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="newPassword" className="col-md-4 col-lg-3 col-form-label">Nueva contraseña</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="newpassword" type="password" className="form-control" id="newPassword" />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label for="renewPassword" className="col-md-4 col-lg-3 col-form-label">Repetir nueva contraseña</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="renewpassword" type="password" className="form-control" id="renewPassword" />
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">Cambiar contraseña</button>
                                                </div>
                                            </form>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
        </body>
    )
}

export default AprendizPerfil;
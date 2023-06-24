import imgcultu from "../../assets/img/cultura.jpg";
import { Link } from "react-router-dom";
// Import extra_land
import imgcreat from "../../assets/img/Creatividad.JPG";
import imgident from "../../assets/img/Identidad.png";
import imgevento1 from "../../assets/img/Artesania1.jpg";
import imgmovil from "../../assets/img/Movil.png";
import imgmovil2 from "../../assets/img/Movil2.png";
import imgandroid from "../../assets/img/Play.png";
import imgapple from "../../assets/img/app.png";
import imgevento2 from "../../assets/img/Artesania3.jpg";
import imgevento3 from "../../assets/img/Artesania2.jpg";
import blogdis from "../../assets/img/blogdis.jpg";

//Aliados//

import imgempresa1 from "../../assets/img/Empresa1.png";
import imgempresa2 from "../../assets/img/Empresa2.jpg";
import imgempresa3 from "../../assets/img/Empresa3.png";
import imgempresa4 from "../../assets/img/Empresa4.jpg";
import imgempresa5 from "../../assets/img/Empresa5.png";
import imgempresa6 from "../../assets/img/Empresa6.jpg";
import imgempresa7 from "../../assets/img/Empresa7.jpg";
import imgempresa8 from "../../assets/img/Empresa8.jpg";

// import img svg
import svg1 from "../../assets/svg/undraw_gaming_re_cma2.svg";
import svg2 from "../../assets/svg/undraw_online_chat_re_c4lx.svg";
import svg3 from "../../assets/svg/undraw_fans_re_cri3.svg";
import svg4 from "../../assets/svg/undraw_creative_woman_re_u5tk.svg";
import CompFooter from "../../components/Footer";
import Swal from "sweetalert2";

const Inicio = () => {
  // const [ setShow] = useState(false);

  // const handleClose = () => setShow(false);

  const showAlert = () => {
    Swal.fire({
      text: "Para conocer mas artesanias registrate o inicia sesión",
      icon: "warning",
      timer: 3000,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // handleClose(); // Cerrar el modal al hacer clic en "Aceptar"
      }
    });
  };
  return (
    <div>
      <main className="py-5 floatingii">
        <section id="hero">
          <div className="hero-container">
            <h1>CULTUPAZ</h1>
            <h2>El arte de superación</h2>
            <a
              href="#services"
              className="btn-scroll scrollto"
              title="Scroll Down"
            >
              <i className="bi bi-chevron-down"></i>
            </a>
          </div>
        </section>
        {/* services */}
        <section id="services" className="services">
          <br></br>
          <br></br>
          <div className="container">
            <div className="section-title">
              {/* <span>Para ti</span> */}
              &nbsp; &nbsp;
              <h2>Lo que tenemos para ti</h2>
              <p>
                Ven y forma parte de un nuevo mundo lleno de diversión y libre
                expresión
              </p>
              &nbsp; &nbsp;
            </div>

            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-3 d-flex align-items-center mb-5 mb-lg-0 ">
                <div className="icon-box">
                  <img src={svg1} className="img-svg" alt="img" />
                  <h4 className="title">
                    <a href="">Juegos</a>
                  </h4>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-center mb-5 mb-lg-0  ">
                <div className="icon-box">
                  <img src={svg2} className="img-svg" />
                  <h4 className="title">
                    <a href="">Muro</a>
                  </h4>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 ">
                <div className="icon-box">
                  <img src={svg3} className="img-svg" />
                  <h4 className="title">
                    <a href="">Charlas</a>
                  </h4>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 ">
                <div className="icon-box">
                  <img src={svg4} className="img-svg" />
                  <h4 className="title">
                    <a href="">Artesanias</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tabs-info">
          <div className="container">
            <div className="tab-container">
              <h3 className="d-flex justify-content-start color_h3">
                Nos promovemos en 3 aspectos
              </h3>
              {/* <h5 className="tab-title text-center">Pills Tabs</h5> */}
              <div className="d-flex justify-content-center">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Comunicación
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Creatividad
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Identidad
                    </button>
                  </li>
                </ul>
              </div>

              <div className="tab-content pt-2" id="myTabContent">
                <div
                  className="tab-pane fade show active  ms-3 me-3"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-lg-7">
                      <p className="m-2">
                        <strong>Todos</strong> compartimos la necesidad de
                        interactuar con otros seres humanos. La comunicación
                        puede ser entendida como el proceso de entender y
                        compartir alguna idea. Transmitimos un mensaje no solo a
                        través de lo qué decimos, sino de cómo lo decimos, ya
                        sea de forma verbal o escrita. ¿Cómo crees que sería tu
                        vida si no pudieras comunicarte, si no pudieras pedir lo
                        que necesitas, o entender las necesidades de otros? Ser
                        incapaz de comunicarte puede incluso significar en
                        muchos aspectos, perder una parte de ti mismo; tu
                        habilidad de comunicarte es central para tu auto
                        concepto. Todo comunica, nuestra redacción, las marcas
                        que vestimos, el lenguaje que utilizamos, el estado de
                        nuestra ropa, las joyas que utilizamos, los tatuajes que
                        tenemos, nuestra postura y gestos, ¡todo! Y al mismo
                        tiempo, todo esto constituye el concepto que tenemos de
                        nosotros mismos.
                      </p>
                    </div>
                    <div className="imagen col-lg-5">
                      <img src={imgcultu} alt="img1" className="img1" />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade text-center imagen_creat2"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="container px-4 py-5" id="custom-cards">
                    Sin duda alguna la creatividad es una singularidad que
                    caracteriza a los seres humanos. Gracias al milagro
                    cognitivo estamos ilimitadamente dotados de esta
                    particularidad del pensamiento. Es debido a ella que hemos
                    nacido, crecido y, lo más importante, evolucionado como
                    especie. A lo largo del tiempo, cada etapa o siglo se ha
                    visto marcado por la imparable mente humana. Es gracias a
                    esta capacidad que hoy por hoy estamos aquí presentes,
                    imponiendo continuamente ideas y compartiendo pensamientos.
                    La creatividad es importante en el progreso y el bienestar
                    social. La capacidad que tenemos de cambiar las cosas y las
                    personas a través de la creación es clave para encontrar
                    soluciones a los retos que se nos presentan cada día, para
                    mejorar nuestra vida y nuestro entorno.
                    <div className="imagen ">
                      <img src={imgcreat} alt="img2" className="img2" />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade  imagen_creat3"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div
                    className="container px-4 py-5 imagen_creat2 "
                    id="custom-cards"
                  >
                    <div className="imagen ">
                      <img src={imgident} alt="img3" className="img3" />
                    </div>
                    La identidad o el self es, entonces, resultado del encuentro
                    de estos dos aspectos: nuestras motivaciones más íntimas y
                    más creativas, con las normas que nos han enseñado nuestros
                    mayores. Así, continúa esta teoría, pronto aprendemos a
                    relacionar esas motivaciones primarias con lo que los demás
                    esperan de uno, y esas expectativas de los otros como que se
                    introducen en nuestra mente, se “interiorizan” se diría en
                    jerga psicológica. Incorporamos el punto de vista de los
                    otros, lo fusionamos, por decirlo de alguna manera, con
                    nuestros deseos más íntimos y eso sería lo que somos como
                    individuos. Aprendemos a mirarnos a nosotros mismos a través
                    de las miradas de los demás. La identidad o el self es el
                    resultado de una especie de acuerdo, no siempre armonioso
                    por supuesto, entre lo más impulsivo de nuestro ser y las
                    expectativas de los demás que hemos interiorizado.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* llsecti */}

        <section id="why-us" className="why-us">
          <div className="container">
            <div className="d-flex justify-content-end">
              <div className="hr-col"></div>
            </div>

            <div className="row">
              <div className="col-lg-12 d-flex align-items-stretch justify-content-center">
                <div className="content text-center">
                  <h3>
                    Algunas artesanias de los aprendices
                  </h3>
                </div>
              </div>
              <div className="col-lg-12 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div
                      className="col-xl-4 d-flex align-items-stretch eventoone"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <div className="icon-box mt-4 mt-xl-0 evento1">
                        <div className="imagen ">
                          <img
                            src={imgevento1}
                            alt="img4"
                            className="img4 card-img-top"
                          />
                        </div>
                        <i className="bx bx-cube-alt"></i>
                        <div className="tampre1 ">
                          <h4 className="tampre">
                            <em>SENA</em>
                          </h4>
                          <h4>Saco tejido a mano</h4>
                        </div>
                        <p>
                          <strong>Saco verde con un toque de azul con diseño exclusivo y cuello redondo. </strong> Completamente forrado con bolsillos internos. Silueta regular fit. Elaborado en 90% lana y 10% poliéster materiales en mezcla que brindan gran estructura a la prenda. Explora diferentes estilos acompañados de camisas informales y pantalones de algodón o jeans para lucir en diferentes ocasiones.
                        </p>

                        <strong>Usuario: Stiven_Gallejo </strong>

                        <div>
                          <button onClick={showAlert} className="btnmy btnmy3">
                            ver más
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 d-flex align-items-stretch eventoone"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <div className="icon-box mt-4 mt-xl-0 evento1">
                        <div className="imagen ">
                          <img
                            src={imgevento3}
                            alt="img4"
                            className="img5 card-img-top"
                          />
                        </div>
                        <i className="bx bx-cube-alt"></i>
                        <div className="tampre1 ">
                          <h4 className="tampre">
                            <em>SENA</em>
                          </h4>
                          <h4>
                            Collar realizado con mas de 300 piedras
                          </h4>
                        </div>
                        <p>
                          <strong> Collar multicolor complemento exclusivo compuesto por siete hilos  </strong> de piedras
                          semipreciosas facetadas de heliodoro, zafiro, esmeralda y rubí. Collar extensible con nudo corredizo. Puede quedar pegado al cuello así como extenderlo para que caiga por debajo del pecho. Brinda elegancia y resistente al agua. Ideal para combinar la pinta casual que a la vez le brinda un toque de elegante y moderno.
                        </p>

                        <strong>Usuario: Alejandra_Mendez </strong>

                        <div>
                          <button onClick={showAlert} className="btnmy btnmy3">
                            ver más
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 d-flex align-items-stretch eventoone"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <div className="icon-box mt-4 mt-xl-0 evento1">
                        <div className="imagen ">
                          <img
                            src={imgevento2}
                            alt="img4"
                            className="img6 card-img-top"
                          />
                        </div>
                        <i className="bx bx-cube-alt"></i>
                        <div className="tampre1 ">
                          <h4 className="tampre">
                            <em>SENA</em>
                          </h4>
                          <h4>Bolsa estampada en tela</h4>
                        </div>
                        <p>
                          <strong>Esta bolsa es resistente y su tamaño es perfecto para llevar</strong>{" "}
                          los accesorios indispensables para el dia diario, ya que es amplia. Por ello, es preferible evitar llevarlo en momentos de lluvia, el agua daría de sí el bolso y la resistencia podría reducir. Es un accesorio muy cómodo y da unos resultados excelentes. Además, estamos hablando de una exelente alternativa a lo plastico
                        </p>

                        <strong> Usuario: Manuel_Ortiz </strong>

                        <div>
                          <button onClick={showAlert} className="btnmy btnmy3">
                            ver más
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="containergestor text-center adicional_rp container">
            <h1>¿En que influye la cultura y la paz en la sociedad?</h1>
            <div className="arreglo">
              <p className=" text-center  imporpc borde_encima">
                La cultura de paz fomenta una serie de valores, actitudes y
                comportamientos como respeto, tolerancia, igualdad, comprensión,
                solidaridad, diálogo, negociación y consenso, que fortalecen y
                restablecen la convivencia armónica y los lazos entre individuos
                de una misma comunidad e impulsa una mirada crítica que abona a
                la construcción de una sociedad más justa.
              </p>

              <div className="imagenblogorg ">
                <img src={blogdis} alt="imgblog" className="imgblog" />
              </div>

              <li className=" espacio2 text-center">
                <Link to={"/cultura"} className="btnmy btnmy3  ">
                  Cultura y paz
                </Link>
              </li>
            </div>
          </div>
          <div className="todo ">
            <div className="containergestor todo2  ">
              <h1>Gestores de paz destacados</h1>
              <div className="boxesgestor">
                <div className="boxgestor">
                  <p className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="150"
                      height="150"
                      fill="currentColor"
                      className="bi bi-person-circle positioncir"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  </p>
                  <h2 className="positionnombre">
                    Stevan<br></br> Ortiz
                  </h2>
                  <div className="form">
                    <p className="clasificacion">
                      <input
                        id="radio1"
                        type="radio"
                        name="estrellas"
                        value="5"
                      ></input>
                      <label for="radio1">★</label>
                      <input
                        id="radio2"
                        type="radio"
                        name="estrellas"
                        value="4"
                      ></input>
                      <label for="radio2">★</label>
                      <input
                        id="radio3"
                        type="radio"
                        name="estrellas"
                        value="3"
                      ></input>
                      <label for="radio3">★</label>
                      <input
                        id="radio4"
                        type="radio"
                        name="estrellas"
                        value="2"
                      ></input>
                      <label for="radio4">★</label>
                      <input
                        id="radio5"
                        type="radio"
                        name="estrellas"
                        value="1"
                      ></input>
                      <label for="radio5">★</label>
                    </p>
                  </div>
                  <br></br>
                  Caracterizados por su capacidad de dialogar y motivar a los
                  compañeros, en la búsqueda de un acuerdo común en las
                  diferentes formas de pensar o actuar.
                  <br></br>
                  <br></br>
                  <div className=" text-center iconos_redes">
                    <i className="bi bi-facebook icoh "></i>
                    <i className="bi bi-twitter icoh"></i>
                    <i className="bi bi-instagram icoh"></i>
                  </div>
                </div>
                <div className="boxgestor">
                  <p className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="150"
                      height="150"
                      fill="currentColor"
                      className="bi bi-person-circle positioncir"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  </p>
                  <h2 className="positionnombre">
                    Sara<br></br> Lopez
                  </h2>
                  <div className="form">
                    <p className="clasificacion">
                      <input
                        id="radio1"
                        type="radio"
                        name="estrellas"
                        value="5"
                      ></input>
                      <label for="radio1">★</label>
                      <input
                        id="radio2"
                        type="radio"
                        name="estrellas"
                        value="4"
                      ></input>
                      <label for="radio2">★</label>
                      <input
                        id="radio3"
                        type="radio"
                        name="estrellas"
                        value="3"
                      ></input>
                      <label for="radio3">★</label>
                      <input
                        id="radio4"
                        type="radio"
                        name="estrellas"
                        value="2"
                      ></input>
                      <label for="radio4">★</label>
                      <input
                        id="radio5"
                        type="radio"
                        name="estrellas"
                        value="1"
                      ></input>
                      <label for="radio5">★</label>
                    </p>
                  </div>
                  <br></br>
                  Caracterizados por su capacidad de dialogar y motivar a los
                  compañeros, en la búsqueda de un acuerdo común en las
                  diferentes formas de pensar o actuar.
                  <br></br>
                  <br></br>
                  <div className=" text-center iconos_redes">
                    <i className="bi bi-facebook icoh "></i>
                    <i className="bi bi-twitter icoh"></i>
                    <i className="bi bi-instagram icoh"></i>
                  </div>
                </div>
                <div className="boxgestor">
                  <p className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="150"
                      height="150"
                      fill="currentColor"
                      className="bi bi-person-circle positioncir"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  </p>
                  <h2 className="positionnombre">
                    Andres<br></br> Jimenez
                  </h2>
                  <div className="form">
                    <p className="clasificacion">
                      <input
                        id="radio1"
                        type="radio"
                        name="estrellas"
                        value="5"
                      ></input>
                      <label for="radio1">★</label>
                      <input
                        id="radio2"
                        type="radio"
                        name="estrellas"
                        value="4"
                      ></input>
                      <label for="radio2">★</label>
                      <input
                        id="radio3"
                        type="radio"
                        name="estrellas"
                        value="3"
                      ></input>
                      <label for="radio3">★</label>
                      <input
                        id="radio4"
                        type="radio"
                        name="estrellas"
                        value="2"
                      ></input>
                      <label for="radio4">★</label>
                      <input
                        id="radio5"
                        type="radio"
                        name="estrellas"
                        value="1"
                      ></input>
                      <label for="radio5">★</label>
                    </p>
                  </div>
                  <br></br>
                  Caracterizados por su capacidad de dialogar y motivar a los
                  compañeros, en la búsqueda de un acuerdo común en las
                  diferentes formas de pensar o actuar.
                  <br></br>
                  <br></br>
                  <div className=" text-center iconos_redes">
                    <i className="bi bi-facebook icoh "></i>
                    <i className="bi bi-twitter icoh"></i>
                    <i className="bi bi-instagram icoh"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="contenedormovil">
          <em>
            <h3 class="color_h3 text-center">
              Posibilidad móvil
            </h3>
          </em>
          <div className="text-center d-flex  ">
            <div className="lineapr22">
              <img alt="movilimg" src={imgmovil} className="imgmovil" />

            </div>

            <div className="d-flex lineapr23 ">
              <h1 className="tamañoh">80%</h1>
              <h1 className="tamañoh2">/</h1>
              <h1 className="tamañoh3">20%</h1>
              <div>
                <h1 className="tamañoh4">Web</h1>
                <h1 className="tamañoh5">Móvil</h1>
              </div>
              <br></br>
              <div className="descargas d-flex">
                <a className="etiqa">
                  <span>
                    <img
                      src={imgandroid}
                      alt="imgandro"
                      className="imgandro card-img-top"
                    />
                  </span>
                </a>
                <a>
                  <span>
                    <img
                      src={imgapple}
                      alt="imgapple"
                      className="imgapple card-img-top"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <h2 className="color_h3 text-center">Nuestros aliados</h2>
        <div className="row row22 row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 client-logo-style-01 align-items-center">
          <div className="col text-center margin-30px-bottom sm-margin-15px-bottom">
            <div className="client-box padding-70px-all ">
              <a href="#">
                <img className="aliadopos" src={imgempresa1} alt="" />
              </a>
            </div>
          </div>

          <div className="col text-center margin-30px-bottom sm-margin-15px-bottom">
            <div className="client-box padding-15px-all ">
              <a href="#">
                <img className="aliadopos" src={imgempresa2} alt="" />
              </a>
            </div>
          </div>

          <div className="col text-center margin-30px-bottom sm-margin-15px-bottom">
            <div className="client-box padding-15px-all ">
              <a href="#">
                <img className="aliadopos" src={imgempresa3} alt="" />
              </a>
            </div>
          </div>

          <div className="col text-center margin-30px-bottom sm-margin-15px-bottom">
            <div className="client-box padding-15px-all ">
              <a href="#">
                <img className="aliadopos" src={imgempresa4} alt="" />
              </a>
            </div>
          </div>

          <div className="col text-center md-margin-30px-bottom sm-margin-15px-bottom">
            <div className="client-box padding-15px-all ">
              <a href="#">
                <img className="aliadopos" src={imgempresa5} alt="" />
              </a>
            </div>
          </div>

          <div className="col text-center md-margin-30px-bottom sm-margin-15px-bottom">
            <div className="client-box padding-15px-all ">
              <a href="#">
                <img className="aliadopos" src={imgempresa6} alt="" />
              </a>
            </div>
          </div>

          <div className="col text-center xs-margin-15px-bottom">
            <div className="client-box padding-15px-all ">
              <a href="#">
                <img className="aliadopos" src={imgempresa7} alt="" />
              </a>
            </div>
          </div>

          <div className="col text-center">
            <div className="client-box padding-15px-all ">
              <a href="#">
                <img className="aliadopos" src={imgempresa8} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div Style="height: auto;">
          <div id="lead" className="ng-star-inserted">
            <div className="grid container3 jc-center">
              <div className="grid-12 grid-sm-6 grid-md-6">
                <h2 id="trackTitleYouAreDoctor" className="title text-medium">¿Eres gestor?</h2>
                <p>Haz parte de nuestro equipo</p>
              </div>
              <div className="grid-12 grid-sm-6 grid-md-6 btn-contact"><a id="trackJoinUp" className="button secondary outline-white rounded block"> <Link className="dropdown-item" to={"/registroGestor"}>¡Únete!</Link></a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <CompFooter />
    </div>
  );
};

export default Inicio;

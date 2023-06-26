import React from "react";
import perfil from "../../assets/img/anya.jpg"
import perfil3 from "../../assets/img/perfil3.png"
import perfil4 from "../../assets/img/perfil4.png"



//import img-svg
import svg1 from "../../assets/svg/svg1.svg";
import img1 from "../../assets/img/Cultura.png"

//Perfiles 
import perfil2 from "../../assets/img/Andrea.jpg"
import perfil5 from "../../assets/img/Angie.jpg"
import perfil6 from "../../assets/img/Jeison.jpg"
import perfil7 from "../../assets/img/Isaac.jpg"
import perfil8 from "../../assets/img/Wilmer.jpg"
import perfil9 from "../../assets/img/Karen.png"




//img-png

import psi from "../../assets/img/psi.png";
import CompFooter from "../../components/Footer";



function Nosotros() {
  return (
    <div>
      <main className="pt-5 ">
        <section className="container nosotros ">
          <div className="row justify-content-center">
          <div className="col-lg-6 ">
            <div className="nosotros-title ">
                &nbsp; &nbsp;
                <h2>SOBRE NOSOTROS</h2>
                &nbsp; &nbsp;
                <p className="pe-4">Incentivamos mediante el aplicativo web diferentes alternativas de paz, 
                  creando módulos de cultura, juegos y actividades didácticas que tiene como 
                  objetivo unir a las personas y a su ves fomentar un ambiente de paz.</p>
            </div>
          </div> 
          <div className="col-lg-5 otroborde">
            <img src={img1} alt="img"  />
            <hr></hr>
          </div> 

          </div>
          <hr/>
        </section>

       
        <section className="page-section" id="nosotros">
          <div className="container">
            <div className="text-center">
              <h3 className="text-muted mb-5">
                "Conectividad entre tu mundo y la psicología , nutre tu mente,
                nutre tu vida."
              </h3>
            </div>
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src={psi}
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    {/* <h4>2009-2011</h4> */}
                    <h4 className="subheading">Misión</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Atender con eficacia, responsabilidad y sentido
                      humanitario los problemas psicológicos que se presentan en
                      las diferentes áreas del bienestar y desarrollo social en
                      las que el comportamiento del individuo reviste esencial
                      importancia para la vida en sociedad, tanto en los ámbitos
                      local y regional como en el nacional.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src={svg1}
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    {/* <h4>March 2011</h4> */}
                    <h4 className="subheading">Visión</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Fomentar la cultura de la paz dentro de los ambientes del
                      SENA si quieres hablar con nosotros ubicanos en CTPI, por
                      lo tanto para elegir, construir e integrar a nuestra vida
                      aquellos valores, conocimientos y formas de ser que nos
                      ayudan a entender actitudes, comportamientos y estilos de
                      vida propicios de las personas con dichas dificultades.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
   {/* team */}

   <section id="team" className="team">
          <div className="container">

            <div className="row">
              <div className="col-lg-12">
                <div className="section-title" data-aos="fade-right">
                  <h2>Nuestro equipo</h2>
                  <p>El mejor equivo puesto a su disposición</p>
                </div>
              </div>

              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner p-3">
                  <div className="carousel-item active">
                    <div className="col-lg-12">
                      <div className="row">

                        <div className="col-lg-4">
                          <div className="member" data-aos="zoom-in" data-aos-delay="100">
                            <div className="pic"><img src={perfil2} className="img-fluid" alt="" /></div>
                            <div className="member-info">
                              <h4>Andrea</h4>
                              <span>master</span>
                              <p></p>
                              <div className="social">
                                <a href="https://web.facebook.com"><i className="bi bi-twitter"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-facebook"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-instagram"></i></a>
                                <a href="https://web.facebook.com"> <i className="bi bi-whatsapp"></i> </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                          <div className="member" data-aos="zoom-in" data-aos-delay="200">
                            <div className="pic"><img src={perfil3} className="img-fluid" alt="" /></div>
                            <div className="member-info">
                              <h4>Eleny Maritza</h4>
                              <span>Product Manager</span>
                              {/* <p>Aut maiores voluptates amet et quis praesentium qui senda para</p> */}
                              <div className="social">
                                <a href="https://web.facebook.com"><i className="bi bi-twitter"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-facebook"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-instagram"></i></a>
                                <a href="https://web.facebook.com"> <i className="bi bi-whatsapp"></i> </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                          <div className="member" data-aos="zoom-in" data-aos-delay="200">
                            <div className="pic"><img src={perfil4} className="img-fluid" alt="" /></div>
                            <div className="member-info">
                              <h4>Erick Jessid</h4>
                              <span>Product Manager</span>
                              {/* <p>Aut maiores voluptates amet et quis praesentium qui senda para</p> */}
                              <div className="social">
                                <a href="https://web.facebook.com"><i className="bi bi-twitter"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-facebook"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-instagram"></i></a>
                                <a href="https://web.facebook.com"> <i className="bi bi-whatsapp"></i> </a>
                              </div>
                            </div>
                          </div>
                        </div>


                      </div>

                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-lg-12">
                      <div className="row">

                        <div className="col-lg-4">
                          <div className="member" data-aos="zoom-in" data-aos-delay="100">
                            <div className="pic"><img src={perfil5} className="img-fluid" alt="" /></div>
                            <div className="member-info">
                              <h4>Angie</h4>
                              <span>Chief Executive Officer</span>

                              <div className="social">
                                <a href="https://web.facebook.com"><i className="bi bi-twitter"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-facebook"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-instagram"></i></a>
                                <a href="https://web.facebook.com"> <i className="bi bi-whatsapp"></i> </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                          <div className="member" data-aos="zoom-in" data-aos-delay="200">
                            <div className="pic"><img src={perfil6} className="img-fluid" alt="" /></div>
                            <div className="member-info">
                              <h4>Yeison</h4>
                              <span>Product Manager</span>

                              <div className="social">
                                <a href="https://web.facebook.com"><i className="bi bi-twitter"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-facebook"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-instagram"></i></a>
                                <a href="https://web.facebook.com"> <i className="bi bi-whatsapp"></i> </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                          <div className="member" data-aos="zoom-in" data-aos-delay="200">
                            <div className="pic"><img src={perfil9} className="img-fluid" alt="" /></div>
                            <div className="member-info">
                              <h4>Karen</h4>
                              <span>Product Manager</span>

                              <div className="social">
                                <a href="https://web.facebook.com"><i className="bi bi-twitter"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-facebook"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-instagram"></i></a>
                                <a href="https://web.facebook.com"> <i className="bi bi-whatsapp"></i> </a>
                              </div>
                            </div>
                          </div>
                        </div>


                      </div>

                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-lg-12">
                      <div className="row">

                        <div className="col-lg-4">
                          <div className="member" data-aos="zoom-in" data-aos-delay="100">
                            <div className="pic"><img src={perfil} className="img-fluid" alt="" /></div>
                            <div className="member-info">
                              <h4>Eleny Sancho</h4>
                              <span>Chief Executive Officer</span>

                              <div className="social">
                                <a href="https://web.facebook.com"><i className="bi bi-twitter"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-facebook"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-instagram"></i></a>
                                <a href="https://web.facebook.com"> <i className="bi bi-whatsapp"></i> </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                          <div className="member" data-aos="zoom-in" data-aos-delay="200">
                            <div className="pic"><img src={perfil7} className="img-fluid" alt="" /></div>
                            <div className="member-info">
                              <h4>Daniel Dorado</h4>
                              <span>Product Manager</span>

                              <div className="social">
                                <a href="https://web.facebook.com"><i className="bi bi-twitter"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-facebook"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-instagram"></i></a>
                                <a href="https://web.facebook.com"> <i className="bi bi-whatsapp"></i> </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                          <div className="member" data-aos="zoom-in" data-aos-delay="200">
                            <div className="pic"><img src={perfil8} className="img-fluid" alt="" /></div>
                            <div className="member-info">
                              <h4>Wilmer</h4>
                              <span>Product Manager</span>

                              <div className="social">
                                <a href="https://web.facebook.com"><i className="bi bi-twitter"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-facebook"></i></a>
                                <a href="https://web.facebook.com"><i className="bi bi-instagram"></i></a>
                                <a href="https://web.facebook.com"> <i className="bi bi-whatsapp"></i> </a>
                              </div>
                            </div>
                          </div>
                        </div>


                      </div>

                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CompFooter/>
    </div>
  );
}
export default Nosotros;

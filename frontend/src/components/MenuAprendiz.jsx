import React, {  useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/img/Logocolor.png";
import Perfil from "../assets/img/Perfil.png";

function CompMenuAprendiz() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("idUsuario");
    localStorage.removeItem("nameUsuario");
    localStorage.removeItem("usuario");
    localStorage.removeItem("logueado");
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-nav  fixed-top"
        aria-label="Thirteenth navbar example"
      >
        <div className="container-fluid me-3 ms-3">
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to={"/aprendiz"} className="navbar-brand me-2 col-lg-3">
            <img src={Logo} width={90} height={70} alt="logo" />
          </Link>
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav col-lg-8 justify-content-lg-around">
              <li className="nav-item">
                <Link
                  to={"/aprendiz"}
                  className="nav-link ml"
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>

              <li className="nav-item ml-50">
                <Link to={"/aprendiz/Juegos"} className="nav-link ml-50 ">
                  juegos
                </Link>
              </li>

              <li className="nav-item ml-50">
                <Link to={"/aprendiz/evento"} className="nav-link ml-50 ">
                  Evento
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/aprendiz/galeria"} className="nav-link ">
                GALERÍA
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link to={"/muroaprendiz"} className="nav-link "  >muro</Link> */}
                <Link to={"/aprendiz/muro"} className="nav-link ">
                  muro
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/aprendiz/nosotros"} className="nav-link ">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/aprendiz/contactos"} className="nav-link ">
                  Contactos
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/aprendiz/culturaypaz"} className="nav-link ">
                  Cultura y paz
                </Link>
              </li>
            </ul>
            <div className="d-lg-flex col-lg-4  justify-content-lg-end ">
              <div
                className="nav-link nav-profile d-flex align-items-center pe-0"
                data-bs-toggle="dropdown"
                onClick={toggleSubMenu}
              >
                <img
                  src={Perfil}
                  alt="Profile"
                  className="rounded-circle"
                  width={35}
                  height={35}
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {localStorage.getItem("nameUsuario")}
                </span>
              </div>
              <ul
                className={`dropdown-menu dropdown-menu-end dropdown-menu-arrow profile dropdown-menu ${
                  subMenuOpen ? "show" : ""
                }`}
              >
                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to={"/aprendiz/perfil"}
                  >
                    <i className="bi bi-person"></i>
                    <span>Perfil</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to={"/"}
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Salir</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
export default CompMenuAprendiz;
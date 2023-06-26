import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Logo from "../assets/img/Logocolor.png";

function CompMenuPrincipal() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registroOpen, setRegistroOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleRegistro = () => {
    setRegistroOpen(!registroOpen);
  };
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Desplazamiento al inicio de la página
  };
  const handleDropdownItemClick = () => {
    setRegistroOpen(false); // Cierra el menú desplegable al hacer clic en un elemento
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-nav fixed-top">
        <div className="container-fluid me-3 ms-3">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink
            className="navbar-brand me-2 col-lg-3"
            aria-current="page"
            to="/"
          >
            <img src={Logo} width={90} height={70} alt="logo" />
          </NavLink>
          <div className={`collapse navbar-collapse cont-menu ${menuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav col-lg-8 justify-content-lg-center men">
              <li className="nav-item">
                <NavLink
                  
                  to="/"
                  className="nav-link ml"
                  activeClassName="active"
                  onClick={handleLinkClick}
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/galeria"
                  className="nav-link"
                  activeClassName="active"
                  onClick={handleLinkClick}
                >
                  Galería
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink
                  to="/nosotros"
                  className="nav-link"
                  activeClassName="active"
                  onClick={handleLinkClick}
                >
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/contactos"
                  className="nav-link"
                  activeClassName="active"
                  onClick={handleLinkClick}
                >
                  Contactos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/cultura"
                  className="nav-link"
                  activeClassName="active"
                  onClick={handleLinkClick}
                >
                  Cultura y Paz
                </NavLink>
              </li>
            </ul>
            <div className="d-lg-flex col-lg-4 justify-content-lg-end">
              <div className="dropdown">
                <button className="btn-registro m-2 dropdown-toggle" type="button" onClick={toggleRegistro}>
                  Registrate
                </button>
                <ul className={`dropdown-menu ${registroOpen ? 'show' : ''}`}>
                  <li>
                    <Link className="dropdown-item" to="/registroAprendiz" onClick={handleDropdownItemClick} >
                      Registro Aprendiz
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/registroGestor" onClick={handleDropdownItemClick}>
                      Registro Gestor
                    </Link>
                  </li>
                </ul>
              </div>
              <NavLink className="btn-login m-2" to="/login" onClick={handleLinkClick}>
                Ingresar
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default CompMenuPrincipal;

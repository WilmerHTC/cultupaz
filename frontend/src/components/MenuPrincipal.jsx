import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import Logo from "../assets/img/Logocolor.png"
function CompMenuPrincipal (){
    const [menuOpen, setMenuOpen] = useState(false);
    const [registroOpen, setRegistroOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const toggleRegistro = () => {
      setRegistroOpen(!registroOpen);
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
        <Link className="navbar-brand me-2 col-lg-3" aria-current="page" to="/">
          <img src={Logo} width={90} height={70} alt='logo' />
        </Link>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav col-lg-8 justify-content-lg-center">
            <li className="nav-item">
              <Link to="/" className="nav-link ml" aria-current="page">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/galeria" className="nav-link">Galeria</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/muro" className="nav-link">Muro</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/nosotros" className="nav-link">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link to="/contactos" className="nav-link">Contactos</Link>
            </li>
            <li className="nav-item">
              <Link to="/cultura" className="nav-link">Cultura y paz</Link>
            </li>
          </ul>
          <div className="d-lg-flex col-lg-4 justify-content-lg-end">
          <div className="dropdown">
              <button className="btn-registro m-2 dropdown-toggle" type="button" onClick={toggleRegistro}>
                Registrate
              </button>
              <ul className={`dropdown-menu ${registroOpen ? 'show' : ''}`}>
                <li>
                  <Link className="dropdown-item" to="/registroAprendiz">Registro Aprendiz</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/registroGestor">Registro Gestor</Link>
                </li>
              </ul>
            </div>

            <Link className="btn-login m-2" to="/login">Ingresar</Link>
          </div>
        </div>
      </div>
    </nav>

             <Outlet/>
        </div>
        
    );
}
export default CompMenuPrincipal;
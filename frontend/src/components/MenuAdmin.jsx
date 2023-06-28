import React, { useState } from "react";
import Perfil from "../assets/img/Perfil.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/img/Logocolor.png";

function CompMenuAdmin() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("idUsuario");
    localStorage.removeItem("nameUsuario");
    localStorage.removeItem("usuario");
    localStorage.removeItem("logueado");
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <Link to={"/admin"} className="logo d-flex align-items-center m-2">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center men">
            <li className="nav-item dropdown pe-3">
              <Link
                className="nav-link nav-profile d-flex align-items-center pe-0"
                data-bs-toggle="dropdown"
              >
                <img src={Perfil} alt="Profile" className="rounded-circle" />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {localStorage.getItem("nameUsuario")}
                </span>
              </Link>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li>
                  <Link
                    to="/"
                    onClick={handleLogout}
                    className="dropdown-item d-flex align-items-center"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Salir</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <aside id="sidebar" className={`sidebar ${sidebarVisible ? "hidden" : ""}`}>
        <ul className="sidebar-nav men" id="sidebar-nav">
          <li className="nav-item">
            <NavLink exact to="/admin" className="nav-link" activeClassName="active">
              <i className="bi bi-grid"></i>
              <span>Inicio</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/admin/artesanias" className="nav-link " activeClassName="active">
              <i className="bi bi-back"></i>
              <span>Artesanias</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/admin/usuarios" className="nav-link " activeClassName="active">
              <i className="bi bi-bar-chart"></i>
              <span>Usuarios</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/solicitudes" className="nav-link " activeClassName="active">
              <i className="bi bi-card-list"></i>
              <span>Solicitudes</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/sugerencias" className="nav-link " activeClassName="active">
            <i class="bi bi-card-text"></i>
              <span>Sugerencias</span>
            </NavLink>
          </li>
          
            <li className="nav-item"  activeClassName="active">
              <NavLink to="/admin/registro" className="nav-link " activeClassName="active">
                <i class="bi bi-journal-text" />
                <span>Registro</span>
              </NavLink>
            </li>
          
        </ul>
      </aside>
      <Outlet />
    </div>
  );
}

export default CompMenuAdmin;

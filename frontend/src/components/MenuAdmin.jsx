import React, { useState } from "react";
import Perfil from "../assets/img/Perfil.png";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/img/Logocolor.png";

function CompMenuAdmin() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("idUsuario");
    localStorage.removeItem("nameUsuario");
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center "
      >
        <div className="d-flex align-items-center justify-content-between">
          <Link to={"/admin"} className="logo d-flex align-items-center m-2">
            <img src={Logo} alt="logo" />
          </Link>
          <i
            class="bi bi-list toggle-sidebar-btn ms-5 "
            onClick={toggleSidebar}
          ></i>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
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

      <aside
        id="sidebar"
        className={`sidebar ${sidebarVisible ? "hidden" : ""}`}
      >
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link to="/admin" className="nav-link ">
              <i className="bi bi-grid"></i>
              <span>Inicio</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/admin/artesanias" className="nav-link collapsed">
              {/* <i className="bi bi-menu-button-wide"></i> */}
              <i className="bi bi-back"></i>
              <span>Artesanias</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/admin/usuarios"} className="nav-link collapsed">
              <i className="bi bi-bar-chart"></i>
              <span>Usuarios</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/admin/solicitudes"} className="nav-link collapsed">
              <i className="bi bi-card-list"></i>
              <span>Solicitudes</span>
            </Link>
          </li>
          {
            <li className="nav-item">
              <Link to={"/admin/registro"} className="nav-link collapsed">
                <i class="bi bi-journal-text" />
                <span>Registro</span>
              </Link>
            </li>
          }
        </ul>
      </aside>
      <Outlet />
    </div>
  );
}
export default CompMenuAdmin;

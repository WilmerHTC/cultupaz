import { Route, Routes } from "react-router-dom";

// import Landing
import MenuPrincipal from "./components/MenuPrincipal.jsx";
import Inicio from "./view/landing/Inicio.jsx";
import Nosotros from "./view/landing/Nosotros.jsx";
import Galeria from "./view/landing/Galeria.jsx";
import Contactos from "./view/landing/Contactos.jsx";
import Culturaypaz from "./view/landing/CulturayPaz.jsx";
import InicioSesion from "./view/InicioSesion.jsx";
import RegistroAprendiz from "./view/RegistroAprendiz.jsx";
import RegistroGestor from "./view/RegistroGestor.jsx";


// import gestor
import CompMenuGestor from "./components/MenuGestor.jsx";
import AgendaGestor from "./view/GestorPaz/Agenda.jsx";
import GestorEventos from "./view/GestorPaz/Eventos.jsx";
import GestorPerfil from "./view/GestorPaz/Perfil.jsx";

//import aprendiz

import CompMenuAprendiz from "./components/MenuAprendiz.jsx";
import GaleriaAprendiz from "./view/aprendiz/artesaniasAprendiz.jsx";
import Juegos from "./view/aprendiz/Juegos.jsx"
import Quiz from "./view/aprendiz/Quiz.jsx"
import Parejas from "./view/aprendiz/parejas/Parejas.jsx";
import MuroAprendiz from "./view/aprendiz/Muro.jsx"
import Evento from './view/aprendiz/evento.jsx'
import AprendizPerfil from "./view/aprendiz/PerfilAprendiz.jsx";


//admin
import CompMenuAdmin from "./components/MenuAdmin.jsx";
import AdminHome from "./view/admin/AdminHome.jsx";
import AdminArtesanias from "./view/admin/AdminArtesanias.jsx";
import AdminUsuarios from "./view/admin/AdminUsuarios.jsx";
import AdminSolicitudes from "./view/admin/AdminSolicitudes.jsx";
import AdminRegistro from "./view/admin/AdminRegistro.jsx";
import AdminSugerencias from "./view/admin/AdminSugerencias.jsx";
import {ProtectRoutesGestor, ProtectRoutesAprendiz, ProtectRoutesAdmin }from "./components/ProtectRoutes.jsx";

function App() {
  return (
    <div>
      <Routes>
        {/* routes landig */}
        <Route path="/" element={<MenuPrincipal />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/galeria" element={<Galeria/>} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/cultura" element={<Culturaypaz />} />
          <Route path="/login" element={<InicioSesion />} />
          <Route path="/registroAprendiz" element={<RegistroAprendiz />} />
          <Route path="/registroGestor" element={<RegistroGestor/>} />
        </Route>

        {/* routes gestor */}
        <Route element={<ProtectRoutesGestor/>}>
          <Route path="/gestor" element={<CompMenuGestor />}>
            <Route path="/gestor" element={<Inicio />} />
            <Route path="/gestor/agenda" element={<AgendaGestor />} />
            <Route path="/gestor/Creaevento" element={<GestorEventos/>} />
            <Route path="/gestor/nosotros" element={<Nosotros />} />
            <Route path="/gestor/contactos" element={<Contactos />} />
            <Route path="/gestor/perfil" element={<GestorPerfil />} />
          </Route>
        </Route>
        
     
         {/* routes aprenediz */}
        <Route element={<ProtectRoutesAprendiz/>}>
          <Route path="/aprendiz" element={<CompMenuAprendiz />}>
            <Route path="/aprendiz" element={<Inicio />}/>
            <Route path="/aprendiz/muro" element={ <MuroAprendiz />} />
            <Route path="/aprendiz/evento" element={<Evento/>}/>
            <Route path="/aprendiz/juegos" element={<Juegos/>}/>
            <Route path="/aprendiz/Quiz" element={<Quiz/>}/>
            <Route path="/aprendiz/Parejas" element={<Parejas/>}/>
            <Route path="/aprendiz/nosotros" element={<Nosotros />}/>
            <Route path="/aprendiz/galeria" element={<GaleriaAprendiz />}/>
            <Route path="/aprendiz/contactos" element={<Contactos />}/>
            <Route path="/aprendiz/culturaypaz" element={<Culturaypaz/>}/>
            <Route path="/aprendiz/perfil" element={<AprendizPerfil />} />
      
          </Route>
        </Route>

          {/* rutas admin */}
       
          <Route path="/admin" element={<CompMenuAdmin/>}>
            <Route path="/admin" element={<AdminHome/>}/>
            <Route path="/admin/artesanias" element={<AdminArtesanias/>}/>
            <Route path="/admin/usuarios" element={<AdminUsuarios/>}/>
            <Route path="/admin/solicitudes" element={<AdminSolicitudes/>}/>
            <Route path="/admin/sugerencias" element={<AdminSugerencias/>}/>
            <Route path="/admin/registro" element={<AdminRegistro/>}/>
          </Route>
      </Routes>

    </div>
  );
}

export default App;

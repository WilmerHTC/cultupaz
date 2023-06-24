import React from "react";
import Logo from "../assets/img/Logocolor.png"

function CompFooter(){
    return(
        
        <div className="container-fluid bg-footer ">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5  p-5">
                <div className="col mb-3 pt-5 d-flex justify-content-center">
                    <img src={Logo} className="bi me-2  ms-2 mt-3" width="120" height="70"/>
                </div>

                <div className="col mb-3">

                </div>

                <div className="col mb-3 mt-3">
                {/* <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                </ul> */}
                </div>

                <div className="col mb-3 mt-3">
                <h5>Contactos</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="https://mail.google.com/cultupaz51@gmail.com" className="nav-link p-0 text-body-secondary">Cultupaz1@gmail.com</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">3122342350</a></li>
                </ul>
                </div>

                <div className="col mb-3 mt-3">
                <h5>Redes sociales</h5>
                <ul className="nav flex-column ">
                    
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "><i className="bi bi-facebook me-2"/> Facebook</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "> <i className="bi bi-youtube me-2"></i>Youtube</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "><i className="bi bi-whatsapp me-2"/>whatsapp</a></li>
                </ul>
                </div>
            </footer>
        </div>
    )
}
export default CompFooter;
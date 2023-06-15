import React from "react";
import lana1 from "../../assets/img/lana1.png";
import tejido2 from "../../assets/img/tejido-2.jpg";
import llaveros3 from "../../assets/img/llaveros-3.jpg";
import Mochila4 from "../../assets/img/Mochila-4.jpg";
import Swal from "sweetalert2";

function AdminArtesanias() {
  const handleClick1 = () => {
    Swal.fire({
      title: "Mochila",
      text: "Mochila Wayuu con cuero y pompones colores pastel",
      confirmButtonText: "Salir",
      imageUrl:
        "https://i.pinimg.com/564x/bd/65/cb/bd65cbec74b312da9b9e4d32e5c70629.jpg",
      customClass: {
        popup: "swal2-custom",
        title: "swal2-title",
        content: "swal2-content",
        image: "swal2-image",
        actions: "swal2-actions",
        confirmButton: "swal2-confirm ",
      },
    });
  };


  const handleClick2 = () => {
    Swal.fire({
      title: "LLaveros",
      text: "Llaveros de Crochet ",
      confirmButtonText: "Salir",
      imageUrl:
        "https://i.pinimg.com/564x/be/b0/f4/beb0f4f00466ededaf3fb140859478cb.jpg",
      customClass: {
        popup: "swal2-custom",
        title: "swal2-title",
        content: "swal2-content",
        image: "swal2-image",
        actions: "swal2-actions",
        confirmButton: "swal2-confirm ",
      },
    });
  };

  const handleClick3 = () => {
    Swal.fire({
      title: "Mochila Misak Gran Familia",
      text: "Mochila Caucana del pueblo Misak. Elaborada con lana de ovejo en crochet, da a conocer el compartir diario, consejos basados en la oralidad de usos y costumbres de nuestra cultura misak. Medidas 17 centímetros de ancho x 20 de alto.",
      confirmButtonText: "Salir",
      imageUrl:
        "https://www.productosdecolombia.com/media/micrositios/mochilas-caucanas/mochila-tejido-misak-beige-gran-familia_uNXPUD4.jpg",
      customClass: {
        popup: "swal2-custom",
        title: "swal2-title",
        content: "swal2-content",
        image: "swal2-image",
        actions: "swal2-actions",
        confirmButton: "swal2-confirm ",
      },
    });
  };
  const handleClick = () => {
    Swal.fire({
      title: "¿Desea eliminar la artesania?",
      showCancelButton: "true",
      confirmButtonText: "Eliminar",
      cancelButtonText: "cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "La artesanía se elimino con éxito",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Artesanias</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/Admin">Inicio</a>
              </li>
              <li className="breadcrumb-item active">Artesanias</li>
            </ol>
          </nav>
        </div>

        <div className="container px-4 py-4">
          <h2 className="pb-2 border-bottom">Artesanias</h2>

          <div className="container-fluid py-4">
            {/*inicio del div */}
            <div className="row justify-content-center">
              {/*PRIMERA CARD */}
              <div className="col-xl-4 col-sm-6 mb-xl-5 mb-4">
                <div className="card shadow-dark">
                  <div className="card-header p-3 pt-2 ">
                    <div className="icon icon-lg icon-shape text-center border-radius-xl mt-n4 position-absolute">
                      <img src={lana1} className="foto" alt="user4"></img>
                      
                    </div>

                    <div className="text-end pt-1">
                      <h5 className="mb-0">Aleja Torres</h5>
                    </div>
                    <div className="bg-img">
                      <img
                        src={tejido2}
                        className="art-img"
                        alt="Bolso eb lana"
                      />
                    </div>
                  </div>
                 
                  <div className=" p-1 mt-3 justify-content-center  d-flex">
                    <p className="mb-0">
                      <button onClick={handleClick1} className="btn btn-opt m-1">
                        ver más
                      </button>
                      <button onClick={handleClick} className="btn btn-danger m-1">
                        Eliminar
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              {/*SEGUNDA CARD */}
              <div className="col-xl-4 col-sm-6 mb-xl-5 mb-4">
                <div className="card shadow-dark">
                  <div className="card-header p-3 pt-2 ">
                    <div className="icon icon-lg icon-shape text-center border-radius-xl mt-n4 position-absolute">
                      <img src={lana1} className="foto" alt="user4"></img>
                    </div>
                    <div className="text-end pt-1">
                      <h5 className="mb-0">andrea suarez </h5>
                    </div>
                    <div className="bg-img">
                      <img
                        src={llaveros3}
                        className="art-img"
                        alt="llaveros en lana"
                      />
                    </div>
                  </div>
               
                  <div className="p-1 mt-3 justify-content-center  d-flex">
                    <p className="mb-0">
                      <button onClick={handleClick2} className="btn btn-opt m-1">
                        Ver más
                      </button>
                      <button onClick={handleClick} className="btn btn-danger m-1">
                        Eliminar
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              {/*TERCERA CARD */}
              <div className="col-xl-4 col-sm-6 mb-xl-5 mb-4 ">
                <div className="card shadow-dark">
                  <div className="card-header p-3 pt-2 ">
                    <div className="icon icon-lg icon-shape text-center border-radius-xl mt-n4 position-absolute">
                  
                      <img src={lana1} className="foto" alt="user4"></img>
                    </div>
                    <div className="text-end pt-1">
                      <h5 className="mb-0">sofia jimenez</h5>
                    </div>
                    <div className="bg-img">
                      <img
                        className="art-img"
                        src={Mochila4}
                        alt="mochila en lana"
                      />
                    </div>
                  </div>
                
                  <div className=" p-1 mt-3 justify-content-center  d-flex">
                    <p className="mb-0">
                      <button onClick={handleClick3} className="btn btn-opt m-1">
                        Ver más
                      </button>
                      <button onClick={handleClick} className="btn btn-danger m-1">
                        Eliminar
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              {/* coloco mas tarjetas de  */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminArtesanias;


import React, { Fragment, useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { Button, Form } from "react-bootstrap";


function Galeria() {

    const [file, setFile] = useState(null);
    const [imageList, setImageList] = useState([]);
    const [ListUpdated, setListUpdated] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const fileInputRef = useRef(null);
  
    useEffect(() => {
      Modal.setAppElement("body");
  
      fetch("http://localhost:9000/images/get")
        .then((res) => res.json())
        .then((res) => setImageList(res))
        .catch((err) => {
          console.error(err);
        });
  
      setListUpdated(false);
    }, [ListUpdated]);
  
    const selectedHandler = (e) => {
      setFile(e.target.files[0]);
    };
  
    const sendHandler = () => {
      if (!file) {
        alert("Debes subir algún archivo");
        return;
      }
  
      const formData = new FormData();
      formData.append("image", file);
  
      fetch("http://localhost:9000/images/post", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
          setListUpdated(true);
        })
        .catch((err) => {
          console.error(err);
        });
  
      fileInputRef.current.value = null;
      setFile(null);
    };
  
    const modalHandler = (isOpen, image) => {
      setModalIsOpen(isOpen);
      setCurrentImage(image);
    };
  
    const deleteHandler = () => {
      let imageID = currentImage.split("-");
      imageID = parseInt(imageID[0]);
  
      fetch("http://localhost:9000/images/delete/" + imageID, {
        method: "DELETE",
      })
        .then((res) => res.text())
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
  
      setModalIsOpen(false);
      setListUpdated(true);
    };
  
    return (
      <div>
        <Fragment>
          <nav className="navbar navbar-dark bg-dark"></nav>
          <br />
          <hr />
          <div
            className="container"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <div className="container">
              <div className="card p-4">
                
              </div>
            </div>
            {imageList.map((image) => (
              <div key={image} className="card m-2 mb-5">
                <img
                  src={"http://localhost:9000/" + image}
                  alt="..."
                  className="card-img-top"
                  style={{ height: "250px", width: "300px" }}
                />
                <div className="card-body">
                  
                </div>
              </div>
            ))}
          </div>
          <Modal
            style={{
              content: {
                width: "300px",
                height: "300px",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
            isOpen={modalIsOpen}
            onRequestClose={() => modalHandler(false, null)}
          >
            {currentImage && (
              <div className="card">
                <img
                  src={"http://localhost:9000/" + currentImage}
                  alt="..."
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
                <div className="card-body">
                  <button onClick={deleteHandler} className="btn btn-warning">
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </Modal>
        </Fragment>
  
        
      </div>
    );
  }
export default Galeria;

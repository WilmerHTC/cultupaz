import fs from "fs";
import path from "path";
import dbconnection from "../database/dbConf.js";

const uploadController = (req, res) => {
  const { titulo, descripcion, imagen } = req.body;

  if (!titulo || !descripcion || !imagen) {
    return res.status(400).json({ message: "Faltan campos requeridos" });
  }

  const imageData = fs.readFileSync(
    path.join(__dirname, "./uploads/" + req.file.filename)
  );

  const query = "INSERT INTO artesanias  (titulo, descripcion, imagen) VALUES (?, ?, ?)";

  dbconnection.query(query, [titulo, descripcion, imageData], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error al guardar los datos" });
    }

    res.json({ message: "Datos guardados exitosamente" });
  });
};

export default uploadController;

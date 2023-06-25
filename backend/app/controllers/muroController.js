import dbconnection from "../database/dbConf.js";

export const registroPublicacion = async (req, res) => {
  try {
    const { titulo, descripcion,  idUsuario } = req.body;
    const fechaCreacion = new Date(); // Generar fecha actual

    const publicacion = {
      titulo: titulo,
      descripcion: descripcion,
      fecha_creacion:fechaCreacion,
      idUsuario: idUsuario,
    };

    const query = "INSERT INTO muro SET ?";
    dbconnection.query(query, publicacion, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json("Error al crear tu publicacion");
      } else {
        return res.status(200).json("Publicacion creada exitosamente");
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verPublicaciones = async (req, res) => {
  try {
    const query = "SELECT * FROM muro";
    dbconnection.query(query, (err, result) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json(result);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

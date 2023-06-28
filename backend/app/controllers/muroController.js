import dbconnection from "../database/dbConf.js";

export const registroPublicacion = async (req, res) => {
  try {
    const { titulo, descripcion, idUsuario } = req.body;
    const fechaCreacion = new Date(); // Generar fecha actual

    const publicacion = {
      titulo: titulo,
      descripcion: descripcion,
      fecha_creacion: fechaCreacion,
      idUsuario: idUsuario,
    };

    const query = "INSERT INTO muro (titulo, descripcion, fecha_creacion, idUsuario) VALUES (?, ?, ?, ?)";
    dbconnection.query(query, [titulo, descripcion, fechaCreacion, idUsuario], (err, result) => {

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
export const verMisPublicaciones = (req, res) => {
  try {
    const { id } = req.params;
    const query = "select * from muro where idUsuario=?";
    dbconnection.query(query, [id], (err, resul) => {
      if (err) {
        console.error(err);
        return res.status(500).json("No fue posible ver tus muro");
      }
      res.status(200).json(resul);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Error en el servidor");
  }
};
export const eliminarPublicacion = async (req, res) => {
  try {
    const { idMuro } = req.params;
    const query = "DELETE FROM muro WHERE idMuro = ?";
    dbconnection.query(query, [idMuro], (err, result) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      return res.status(200).json("Publicacion eliminada exitosamente");
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const editarPublicacion = async (req, res) => {
  try {
    const { idMuro } = req.params;
    const { titulo, descripcion } = req.body;
    const query = "UPDATE muro SET titulo = ?, descripcion = ? WHERE idMuro = ?";
    dbconnection.query(query, [titulo, descripcion, idMuro], (err, result) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      return res.status(200).json("Publicacion editada exitosamente");
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

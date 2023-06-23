import dbconnection from "../database/dbConf.js";

export const registroTarea = async (req, res) => {
  try {
    const { titulo, descripcion, idUsuario } = req.body;

    const tarea = {
      titulo: titulo,
      descripcion: descripcion,
      idUsuario: idUsuario,
    };

    const query = "INSERT INTO muro SET ?";
    dbconnection.query(query, tarea, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json("Error al insertar la tarea");
      } else {
        return res.status(200).json("Tarea creada exitosamente");
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const mostrarTareas = async (req, res) => {
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

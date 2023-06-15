import dbconnection from "../database/dbConf.js";

export const enviarasistencia = async (req, res) => {
  const { descripcion_asistencia } = req.body; // Obtener la descripción de la asistencia
  const asistencia = { descripcion_asistencia }; // Crear un objeto con la descripción de la asistencia

  dbconnection.query(
    "INSERT INTO asistencias SET ?",
    asistencia,
    (err, rows) => {
      if (err) return res.send(err);
      res.send("Se registró con éxito la sugerencia");
    }
  );
};

// verasistencia
export const verasistencia = async (req, res) => {
  dbconnection.query("SELECT * FROM asistencias", (err, rows) => {
    if (err) return res.send(err);
    res.json(rows);
  });
};

export const crearevento = async (req, res) => {
  const { descripcion_asistencia } = req.body; // Obtener la descripción de la asistencia
  const asistencia = { descripcion_asistencia }; // Crear un objeto con la descripción de la asistencia
  const { tema_evento, descripcion_evento, fecha_evento } = req.body; // Obtener la descripción de la asistencia
  const evento = { tema_evento, descripcion_evento, fecha_evento }; // Crear un objeto con la descripción de la asistencia

  dbconnection.query("INSERT INTO eventos SET ?", evento, (err, rows) => {
    if (err) return res.send(err);
    // Respuesta con el mensaje
    res.send("Se registró con éxito la sugerencia");
  });
};

export const mostarevento = async (req, res) => {
  dbconnection.query("SELECT * FROM eventos", (err, rows) => {
    if (err) return res.send(err);
    res.json(rows);
  });
};

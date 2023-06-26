import dbconnection from "../../database/dbConf.js";
//ver todos los usuarios
export const verAprendices = async (req, res) => {
  try {
    const query = "SELECT * FROM usuarios WHERE idTipo =1  AND estadoUsuario = 1";
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

//ver gestores
export const verGestores = async (req, res) => {
  try {
    const query = "SELECT * FROM usuarios WHERE idTipo =2";
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

//ver un usuario
export const verAprendiz = async (req, res) => {
  try {
    const query = "SELECT * FROM usuarios WHERE idUsuario =?";
    dbconnection.query(query, [req.params.id], (err, resul) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json(resul);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//actualizar datos
export const updateUsuarios = async (req, res) => {
  try {
    const query = "UPDATE usuarios SET ? WHERE idUsuario =?";
    dbconnection.query(query, [req.body, req.params.id], (err, resul) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json(resul);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

///ver total usuarios
export const totalUsuarios = async (req, res) => {
  try {
    const query = "SELECT COUNT(*) AS totalUsuarios FROM usuarios";
    dbconnection.query(query, (err, result) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json(result[0]);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//inactivar Usuario
export const inactivarUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const query = "UPDATE usuarios SET estadoUsuario = ? WHERE idUsuario = ?";
      dbconnection.query(query, [0, id], (err, result) => {
        if (err) {
          return res.status(400).json("No fue posible realizar la solicitud");
        }
        res.status(200).json("Usuario inactivado con exito");
      });
    } catch (error) {
      return res.status(500).json("Error en el servidor");
    }
  };
  

//activar usuarios
export const activarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const query = "UPDATE usuarios SET estadoUsuario = ? WHERE idUsuario = ?";
    dbconnection.query(query, [1, id], (err, result) => {
      if (err) {
        return res.status(400).json("No fue posible inactivar usauario");
      }
      res.status(200).json("Usuario inactivado");
    });
  } catch (error) {
    return res.status(500).json("Error en el servidor");
  }
};

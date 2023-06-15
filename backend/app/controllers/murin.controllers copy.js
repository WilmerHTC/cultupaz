import dbconnection from "../database/dbConf.js";

export const getTasks = async (req, res) => {
  try {
    const query = "SELECT * FROM muro ORDER BY createAt ASC";
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

export const getTask = async (req, res) => {
  try {
    const query = "SELECT * FROM muro WHERE idMuro = ?";
    dbconnection.query(query, [req.params.idMuro], (err, result) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      if (result.length === 0) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.json(result[0]);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    dbconnection.query(
      "INSERT INTO muro(title, description) VALUES (?, ?)",
      [title, description],
      (err, result) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        res.json({
          idMuro: result.insertId,
          title,
          description,
        });
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    dbconnection.query(
      "UPDATE muro SET ? WHERE  idMuro= ?",
      [req.body, req.params.idMuro],
      (err, result) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        res.json(result);
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    dbconnection.query(
      "DELETE FROM muro WHERE  idMuro= ?",
      [req.params.idMuro],
      (err, result) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "Task not found" });
        }
        res.sendStatus(204);
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

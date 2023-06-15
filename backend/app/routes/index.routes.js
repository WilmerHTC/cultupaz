import { Router } from "express";
import mysql from "mysql";
import dbConnection from "../database/dbConf.js";

const mainRouter = Router();

mainRouter.get("/ping", async (req, res) => {
  const connection = mysql.createPool(dbConnection.config);

  connection.query("SELECT 1 + 1 as result", (error, results) => {
    connection.end(); // Cierra la conexión después de la consulta

    if (error) {
      console.error("Error en la consulta:", error);
      res.status(500).json({ error: "Ocurrió un error en la consulta" });
    } else {
      const result = results[0].result;
      console.log(result);
      res.json(result);
    }
  });
});

export default mainRouter;
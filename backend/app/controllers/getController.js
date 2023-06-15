import fs from "fs";
import path from "path";
import dbconnection from "../database/dbConf.js";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const getController = (req, res) => {
  const query = "SELECT * FROM artesanias";

  dbconnection.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error al cargar los datos" });
    }

    rows.map((img) => {
      if (img.idartesanias) {
        const imageFilename = `${img.idartesanias}-monkeywit.png`;
        const imagePath = path.join(__dirname, "../dbimages/", imageFilename);
        fs.writeFileSync(imagePath, img.imagen);
        img.imagen = imageFilename;
      }
    });

    res.json(rows);
  });
};

export default getController;

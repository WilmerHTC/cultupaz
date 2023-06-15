import express from 'express';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { getConnection} from '../database/dbConf.js';
//dbconnection 


import dbconnection from '../database/dbConf.js';
//,  

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const diskstorage = multer.diskStorage({
  destination: join(__dirname, '../images'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-monkeywit' + file.originalname);
  }
});

const fileUpload = multer({
  storage: diskstorage
}).single('image');

router.get('/', (req, res) => {
  res.send('Welcome to my image app');
});

router.post('/images/post', fileUpload, (req, res) => {
  const connection = getConnection();
  connection.getConnection((err, conn) => {
    if (err) return res.status(500).send('server error');

    const type = req.file.mimetype;
    const name = req.file.originalname;
    const data = fs.readFileSync(join(__dirname, '../images/' + req.file.filename));

    conn.query('INSERT INTO artesanias SET ?', [{ type, name, data }], (err, rows) => {
      if (err) return res.status(500).send('server error');

      console.log('Imagen Guardada Satisfactoriamente'); // Agrega una consola para verificar la inserción exitosa
      res.send('Imagen Guardada Satisfactoriamente');
    });
  });
});

router.get('/images/get', (req, res) => {
  const connection = getConnection();
  connection.getConnection((err, conn) => {
    if (err) return res.status(500).send('server error');

    conn.query('SELECT * FROM artesanias', (err, rows) => {
      if (err) return res.status(500).send('server error');

      rows.map(img => {
        fs.writeFileSync(join(__dirname, '../dbimages/' + img.id + '-monkeywit.png'), img.data);
      });

      const imagedir = fs.readdirSync(join(__dirname, '../dbimages'));

      console.log('Imágenes obtenidas correctamente'); // Agrega una consola para verificar la obtención de las imágenes
      res.json(imagedir);
    });
  });
});

router.delete('/images/delete/:idartesanias', (req, res) => {
  const connection = getConnection();
  connection.getConnection((err, conn) => {
    if (err) return res.status(500).send('server error');

    const idartesanias = req.params.idartesanias;
    if (!idartesanias) {
      return res.status(400).send('Invalid parameter');
    }

    conn.query('DELETE FROM artesanias WHERE idartesanias = ?', [idartesanias], (err, rows) => {
      if (err) return res.status(500).send('server error');

      fs.unlinkSync(join(__dirname, '../dbimages/' + req.params.idartesanias + '-monkeywit.png'));

      console.log('Imagen borrada correctamente'); // Agrega una consola para verificar el borrado exitoso
      res.json('La imagen fue borrada');
    });
  });
});

export default router;

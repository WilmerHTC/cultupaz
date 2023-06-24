import dbconnection from "../database/dbConf.js";
import cloudinary from "cloudinary";

export const crearArtesania = async (req, res) => {
  try {
    const { titulo, descripcion, idUsuario } = req.body;
    if (!titulo || !descripcion || !idUsuario) {
      return res.status(400).json("Todos los datos son requeridos");
    }

    let urlImage;
    if (req.files.imgArtesania) {
      const resul = await cloudinary.uploader.upload(
        req.files.imgArtesania[0].path
      );
      urlImage = resul.secure_url;
    } else {
      return res.status(400).json("Es requerida una imagen");
    }

    const artesaniaVal = [
      {
        titulo: titulo,
        descripcion: descripcion,
        img_uno: urlImage,
        idUsuario: idUsuario,
      },
    ];

    const query = "INSERT INTO artesanias SET ?";
    dbconnection.query(query, artesaniaVal[0], (err, resul) => {
      if (err) {
        console.error(err);
        return res.status(500).json("No se a podido ingresar la artesania");
      }

      res.status(200).json("Artesania registrada correctamente");
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Error en el servidor");
  }
};

export const verMisArtesanias = (req, res) => {
  try {
    const { id } = req.params;
    const query = "select * from artesanias where idUsuario=?";
    dbconnection.query(query, [id], (err, resul) => {
      if (err) {
        console.error(err);
        return res.status(500).json("No fue posible ver tus artesanias");
      }

      res.status(200).json(resul);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Error en el servidor");
  }
};

export const artesaniasFound = (req, res) => {
  try {
    const query = "SELECT * FROM artesanias";
    dbconnection.query(query, (err, artesanias) => {
      if (err) {
        console.error(err);
        return res.status(500).json("No fue posible ver las artesanias");
      }

      const idsUsuarios = artesanias.map((artesania) => artesania.idUsuario);
      const usuariosQuery = "SELECT * FROM usuarios WHERE idUsuario IN (?)";
      dbconnection.query(usuariosQuery, [idsUsuarios], (err, usuarios) => {
        if (err) {
          console.error(err);
          return res.status(500).json("No fue posible obtener los usuarios");
        }

        const artesaniasConUsuarios = artesanias.map((artesania) => {
          const usuario = usuarios.find(
            (usuario) => usuario.idUsuario === artesania.idUsuario
          );
          return {
            ...artesania,
            usuario: {
              nombre: usuario.nombres,
              apellido: usuario.apellidos,
              telefono: usuario.telefono,
            },
          };
        });

        res.status(200).json(artesaniasConUsuarios);
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Error en el servidor");
  }
};

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
export const verArtesanias = (req, res) => {
  try {
    const { id} = req.params; // Obtener el ID de la artesanía de los parámetros de la solicitud

    const query = "SELECT * FROM artesanias WHERE idartesanias = ?";
    dbconnection.query(query, [id], (err, resul) => {
      if (err) {
        console.error(err);
        return res.status(500).json("No fue posible obtener la artesanía");
      }


        res.status(200).json(resul);
      
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Error en el servidor");
  }
};

export const eliminarArtesania = async (req, res) => {
  try {
    const { id } = req.params;

    // Obtener la URL de la imagen de la base de datos
    const query = "SELECT img_uno FROM artesanias WHERE idartesanias = ?";
    dbconnection.query(query, [id], async (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json("No fue posible eliminar tu artesanía");
      }

      if (result.length === 0) {
        return res.status(404).json("No se encontró la artesanía");
      }

      const imageUrl = result[0].img_uno;

      // Extraer el public_id de la URL de la imagen
      const publicIdMatch = imageUrl.match(/\/([^/]+)\.[^.]+$/);
      if (!publicIdMatch) {
        return res
          .status(400)
          .json("No se pudo obtener el public_id de la imagen");
      }
      const publicId = publicIdMatch[1];

      // Eliminar la imagen de Cloudinary
      try {
        await cloudinary.uploader.destroy(publicId);
      } catch (error) {
        console.error("Error al eliminar la imagen de Cloudinary:", error);
        return res
          .status(500)
          .json("No fue posible eliminar la imagen de Cloudinary");
      }

      // Eliminar el registro de la base de datos
      const deleteQuery = "DELETE FROM artesanias WHERE idartesanias = ?";
      dbconnection.query(deleteQuery, [id], (deleteErr, deleteResult) => {
        if (deleteErr) {
          console.error(deleteErr);
          return res
            .status(500)
            .json("No fue posible eliminar tu artesanía");
        }

        res.status(200).json("Artesanía eliminada correctamente");
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Error en el servidor");
  }
};

export const actualizarArtesania = async (req, res) => {
  const {id}=req.params;
  const querySelect = "SELECT img_uno FROM artesanias WHERE idartesanias = ?";
dbconnection.query(querySelect, [id], async (err, result) => {
  if (err) {
    console.error(err);
    return res.status(500).json("Error al obtener la imagen anterior");
  }

  if (result.length === 0) {
    return res.status(404).json("La artesanía no existe");
  }

  const urlImagenAnterior = result[0].img_uno;

  try {
    const { titulo, descripcion, idUsuario } = req.body;
    if (!titulo || !descripcion || !idUsuario) {
      return res.status(400).json("Todos los datos son requeridos");
    }

    let urlImage;

    if (req.files && req.files.imgArtesania) {
      const resul = await cloudinary.uploader.upload(
        req.files.imgArtesania[0].path
      );
      urlImage = resul.secure_url;
    }

    const artesaniaVal = {
      titulo: titulo,
      descripcion: descripcion,
      idUsuario: idUsuario,
    };

    if (urlImage) {
      artesaniaVal.img_uno = urlImage;
      if (urlImagenAnterior) {
        await cloudinary.uploader.destroy(urlImagenAnterior);
      }
    }

    const query = "UPDATE artesanias SET ? WHERE idartesanias = ?";
    dbconnection.query(query, [artesaniaVal, id], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json("No se ha podido actualizar la artesanía");
      }

      if (result.affectedRows === 0) {
        return res.status(404).json("La artesanía no existe");
      }

      res.status(200).json("Artesanía actualizada correctamente");
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Error en el servidor");
  }
});

};


// export const actualizarArtesania = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { titulo, descripcion, idUsuario } = req.body;
//     if (!titulo || !descripcion || !idUsuario) {
//       return res.status(400).json("Todos los datos son requeridos");
//     }

//     let urlImage;
//     if (req.files && req.files.imgArtesania) {
//       const resul = await cloudinary.uploader.upload(
//         req.files.imgArtesania[0].path
//       );
//       urlImage = resul.secure_url;
//     }

//     const artesaniaVal = {
//       titulo: titulo,
//       descripcion: descripcion,
//       idUsuario: idUsuario,
//     };

//     if (urlImage) {
//       artesaniaVal.img_uno = urlImage;
//     }

//     const query = "UPDATE artesanias SET ? WHERE idartesanias = ?";
//     dbconnection.query(query, [artesaniaVal, id], (err, result) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json("No se ha podido actualizar la artesanía");
//       }

//       // Actualizar la imagen en Cloudinary aquí
//       // Puedes utilizar cloudinary.uploader.destroy para eliminar la imagen anterior si es necesario

//       if (result.affectedRows === 0) {
//         return res.status(404).json("La artesanía no existe");
//       }

//       res.status(200).json("Artesanía actualizada correctamente");
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json("Error en el servidor");
//   }
// };








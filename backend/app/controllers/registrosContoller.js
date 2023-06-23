import dbconnection from "../database/dbConf.js";
import bcryptjs from "bcryptjs";
export const resgitroUsuarios = async (req, res) => {
  const {
    nombres,
    apellidos,
    telefono,
    ficha,
    genero,
    fechaNacimiento,
    tipoDocumento,
    numeroDocumento,
    usuario,
    correo,
    passw,
    confirPassw,
    idTipo,
    estadoUsuario,
  } = req.body;

  //validacion contraseña
  if (passw.length < 6) {
    return res.status(400).json("La contraseña debe tener minimo 6 caracteres");
  }

  if (passw != confirPassw) {
    return res.status(400).json("Las contraseñas no coinciden");
  }
  //validar numero telefono

  if (telefono.length < 10) {
    return res
      .status(400)
      .json("el numero de telefono debe tener min 10 caracteres");
  }
  // Verificar si el teléfono ya está registrado
  const telefonoExists = await valTelefonoExists(telefono);
  if (telefonoExists) {
    return res.status(400).json("El número de teléfono ya está registrado");
  }
  // Verificar si el numero docuemnto ya está registrado
  const documentoExists = await valDocumentoExists(numeroDocumento);
  if (documentoExists) {
    return res.status(400).json("El numero de documento ya está registrado");
  }
  // Verificar si el usuario ya está registrado
  const usuarioExists = await valUsuarioExists(usuario);
  if (usuarioExists) {
    return res.status(400).json("El nombre de usuario ya está registrado");
  }

  // Verificar si el correo ya está registrado
  const correoExists = await valCorreoExists(correo);
  if (correoExists) {
    return res.status(400).json("El correo electrónico ya está registrado");
  }
  // Validación del correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    return res.status(400).json("El correo electrónico no es válido");
  }

  const passHas = await bcryptjs.hash(passw, 10);

  const aprendizVal = [
    {
      nombres: nombres,
      apellidos: apellidos,
      telefono: telefono,
      ficha: ficha,
      genero: genero,
      fechaNacimiento: fechaNacimiento,
      tipoDocumento: tipoDocumento,
      numeroDocumento: numeroDocumento,
      usuario: usuario,
      correo: correo,
      passw: passHas,
      idTipo: idTipo,
      estadoUsuario: estadoUsuario,
    },
  ];
  console.log(aprendizVal[0]);

  const query = "INSERT INTO usuarios SET ?";
  dbconnection.query(query, aprendizVal[0], (err, resul) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Error al insertar registro");
    }
    if (idTipo == 1) {
      return res.status(200).json("Registro Aprendiz exitoso");
    } else if (idTipo == 2) {
      return res.status(200).json("Registro Gestor Exitoso");
    } else if (idTipo == 3) {
      return res.status(200).json("Registro Administrador Exitoso");
    }
  });
};

// Función para verificar si el correo ya existe
const valCorreoExists = (correo) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuarios WHERE correo = ?";
    dbconnection.query(query, [correo], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.length > 0);
      }
    });
  });
};

// Función para verificar si el teléfono ya existe
const valTelefonoExists = (telefono) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuarios WHERE telefono = ?";
    dbconnection.query(query, [telefono], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.length > 0);
      }
    });
  });
};

// Función para verificar si el usuario ya existe
const valUsuarioExists = (usuario) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuarios WHERE usuario = ?";
    dbconnection.query(query, [usuario], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.length > 0);
      }
    });
  });
};
// Función para verificar si el numDocumento ya existe
const valDocumentoExists = (numeroDocumento) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuarios WHERE numeroDocumento = ?";
    dbconnection.query(query, [numeroDocumento], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.length > 0);
      }
    });
  });
};

// ================== login ================//
export const loginUsuarios = async (req, res) => {
  const { correo, passw } = req.body;

  if (!correo || !passw) {
    return res.status(400).json("Todos los datos son requeridos");
  }

  const query = "SELECT * FROM usuarios WHERE correo=?";
  dbconnection.query(query, [correo, passw], async (err, resul) => {
    if (err) {
      res.status(400).json("Ocurrio un error");
    }

    try {
      if (resul.length === 0) {
        return res.status(400).json("Correo Incorrecto");
      }
      const usuario = resul[0];

      const passwordMatch = await bcryptjs.compare(passw, usuario.passw);
      if (!passwordMatch) {
        return res.status(400).json("Contraseña incorrecta");
      }

      // Cofigro la sesion de usuario
      req.session.usuario = resul[0].usuario;
      console.log(req.session.usuario);

      if (resul[0].idTipo == 1) {
        res.json({
          rol: 1,
          idUsuario: resul[0].idUsuario,
          nameUsuario: resul[0].usuario,
          messagge: "Bienvenido Aprendiz",
        });
      } else if (resul[0].idTipo == 2) {
        console.log(resul[0]);
        if (resul[0].estadoUsuario == 0) {
          return res
            .status(400)
            .json("Tu solicitud esta en proceso de aprobación");
        }
        res.json({
          rol: 2,
          idUsuario: resul[0].idUsuario,
          nameUsuario: resul[0].usuario,
          messagge: "Bienvenido Gestor de Paz",
        });
      } else if (resul[0].idTipo == 3) {
        res.json({
          rol: 3,
          idUsuario: resul[0].idUsuario,
          nameUsuario: resul[0].usuario,
          messagge: "Bienvenido Administrador",
        });
      }
    } catch (error) {
      return console.log(error);
    }
  });
};

//ver un usuario
export const verAprendiz = async (req, res) => {
  if (req.session.usuario) {
    return res.json({ usuario: req.session.usuario });
  } else {
    return res.json({ valid: false });
  }
};

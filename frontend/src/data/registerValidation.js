const ValidationRegister = (aprendizVal) => {
  let error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (aprendizVal.nombres === "") {
    error.nombres = "¡Complete los campos porfavor!";
  } else {
    error.nombres = "";
  }

  if (aprendizVal.apellidos === "") {
    error.apellidos = "¡Complete el campo porfavor!";
  } else {
    error.apellidos = "";
  }

  if (aprendizVal.telefono === "") {
    error.telefono = "¡Complete el campo porfavor!";
  } else {
    error.telefono = "";
  }

  if (aprendizVal.ficha === "") {
    error.ficha = "¡Complete el campo porfavor!";
  } else {
    error.ficha = "";
  }

  if (aprendizVal.genero === "") {
    error.genero = "¡Complete el campo porfavor!";
  } else {
    error.genero = "";
  }

  if (aprendizVal.fechaNacimiento === "") {
    error.fechaNacimiento = "¡Complete el campo porfavor!";
  } else {
    error.fechaNacimiento = "";
  }

  if (aprendizVal.tipoDocumento === "") {
    error.tipoDocumento = "¡Complete el campo porfavor!";
  } else {
    error.tipoDocumento = "";
  }

  if (aprendizVal.numeroDocumento === "") {
    error.numeroDocumento = "¡Complete el campo porfavor!";
  } else {
    error.numeroDocumento = "";
  }

  if (aprendizVal.usuario === "") {
    error.usuario = "¡Complete el campo porfavor!";
  } else {
    error.usuario = "";
  }

  if (aprendizVal.correo === "") {
    error.correo = "¡Complete el campo porfavor!";
  } else if (!email_pattern.test(aprendizVal.correo)) {
    error.correo = "Debe ingresar una direccion de Email correcta, (@).";
  } else {
    error.correo = "";
  }

  // Validaciónes para La contraseña
  if (aprendizVal.passw === "") {
    error.passw = "El campo no debe estar vacio, digite una contraseña.";
  } else if (!aprendizVal.passw) {
    error.passw = "Digite a cotraseña valida";
  } else {
    error.passw = "";
  }
  //confirmar conntraseña
  if (aprendizVal.passw === "") {
    error.passw = "El campo no debe estar vacio, digite una contraseña.";
  } else if (!aprendizVal.passw) {
    error.passw = "Debe confirmar su contraseña ";
  } else {
    error.passw = "";
  }

  return error;
};


export default  ValidationRegister

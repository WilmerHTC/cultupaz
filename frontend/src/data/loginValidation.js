function ValidationLogin(aprendizVal) {
  let error = {};

  const correo_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (aprendizVal.correo === "") {
    error.correo = "¡Porfavor digite un correo!";
  } else if (!correo_pattern.test(aprendizVal.correo)) {
    error.correo = "Dirección de correo invalida";
  } else {
    error.correo = "";
  }

  // !passw_pattern.test(values.passw)
  // Validaciónes para La contraseña
  if (aprendizVal.passw === "") {
    error.passw = "Porfavor, ingrese una contraseña";
  } else if (aprendizVal.passw !== aprendizVal.passw) {
    error.passw = "Contraseña incorrecta";
  } else {
    error.passw = "";
  }

  return error;
}

export default ValidationLogin;

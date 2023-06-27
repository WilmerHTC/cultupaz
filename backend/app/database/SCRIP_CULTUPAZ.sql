
-- -----------------------------------------------------
-- Schema db_cultupaz
-- -----------------------------------------------------
DROP DATABASE IF EXISTS db_cultupaz;
-- -----------------------------------------------------
-- Schema db_cultupaz
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_cultupaz` DEFAULT CHARACTER SET utf8 ;
USE `db_cultupaz` ;

-- -----------------------------------------------------
-- Table `db_cultupaz`.`tipo_usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_cultupaz`.`tipo_usuarios` (
  `idTipo` INT NOT NULL,
  `tipoUsuario` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(50) NULL,
  PRIMARY KEY (`idTipo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_cultupaz`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_cultupaz`.`usuarios` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(50) NOT NULL,
  `apellidos` VARCHAR(50) NOT NULL,
  `telefono` VARCHAR(20) UNIQUE NOT NULL,
  `ficha` VARCHAR(30) NULL,
  `genero` VARCHAR(45) NOT NULL,
  `fechaNacimiento` DATE NOT NULL,
  `tipoDocumento` VARCHAR(60) NOT NULL,
  `numeroDocumento` VARCHAR(20)UNIQUE NOT NULL,
  `foto` VARCHAR(200) NULL,
  `usuario` VARCHAR(45)UNIQUE  NULL,
  `correo` VARCHAR(50) UNIQUE NOT NULL,
  `passw` VARCHAR(200) NOT NULL,
  `estadoUsuario` BOOLEAN NOT NULL DEFAULT TRUE,
  `idTipo` INT NOT NULL,
  PRIMARY KEY (`idUsuario`),
    FOREIGN KEY (`idTipo`)
    REFERENCES `db_cultupaz`.`tipo_usuarios` (`idTipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_cultupaz`.`muro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_cultupaz`.`muro` (
  `idMuro` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(50) NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  `fecha_creacion` DATETIME NOT NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idMuro`),
  FOREIGN KEY (`idUsuario`)
  REFERENCES `db_cultupaz`.`usuarios` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_cultupaz`.`juegos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_cultupaz`.`juegos` (
  `idJuegos` INT NOT NULL AUTO_INCREMENT,
  `nombre_juego` VARCHAR(45) NOT NULL,
  `puntaje` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idJuegos`),
    FOREIGN KEY (`idUsuario`)
    REFERENCES `db_cultupaz`.`usuarios` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_cultupaz`.`artesanias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_cultupaz`.`artesanias` (
  `idartesanias` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(300) NOT NULL,
  `img_uno` VARCHAR(200) NOT NULL,
  `img_dos` VARCHAR(200) NULL,
  `img_tres` VARCHAR(200) NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idartesanias`),
    FOREIGN KEY (`idUsuario`)
    REFERENCES `db_cultupaz`.`usuarios` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_cultupaz`.`eventos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_cultupaz`.`eventos` (
  `idEvento` INT NOT NULL AUTO_INCREMENT,
  `tema_evento` VARCHAR(60) NOT NULL,
  `descripcion_evento` VARCHAR(100) NOT NULL,
  `fecha_evento` DATE NOT NULL,
  `foto_evento` VARCHAR(200) NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idEvento`),
    FOREIGN KEY (`idUsuario`)
    REFERENCES `db_cultupaz`.`usuarios` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_cultupaz`.`sugerencia_evento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_cultupaz`.`sugerencia_evento` (
  `idSugerencia_evento` INT NOT NULL AUTO_INCREMENT,
  `descripcion_sugerencia_evento` VARCHAR(200) NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idSugerencia_evento`),
    FOREIGN KEY (`idUsuario`)
    REFERENCES `db_cultupaz`.`usuarios` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `db_cultupaz`.`sugerencias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_cultupaz`.`sugerencias` (
  `idSugerencia` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NOT NULL,
  `fecha_creacion` DATETIME NOT NULL,
 
  PRIMARY KEY (`idSugerencia`))
ENGINE = InnoDB;


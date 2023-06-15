import dbconnection from "../../database/dbConf.js";

//crear eventos

export const registroEvento = async (req, res) => {
    const {
        tema_evento,
        descripcion_evento,
        fecha_evento,
        foto_evento,
        idUsuario,
    } = req.body;
    const eventVal = [
        {
            tema_evento: tema_evento,
            descripcion_evento: descripcion_evento,
            fecha_evento: fecha_evento,
            foto_evento: foto_evento,
            idUsuario: idUsuario,
        },
    ];

    const query = "INSERT INTO eventos SET ?";
    dbconnection.query(query, eventVal[0], (err, resul) => {
        if (err) {
            console.error(err);
            return res.status(500).json("Error al insertar evento");
        } else {
            return res.status(200).json("evento creado Exitoso");
        }
    });
}

//trae eventos creados

export const mostrarEventos = async (req, res) => {
    try {
        const query = "SELECT * FROM eventos ";
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

export const registroAsistencia = async (req, res) => {
    const { descripcion_asistencia, idUsuario, idEvento } = req.body;
    const eventVal = [
        {
            descripcion_asistencia, idUsuario: idUsuario, idEvento: idEvento,
        },
    ];

    const query = "INSERT INTO asistencias SET ?";
    dbconnection.query(query, eventVal[0], (err, resul) => {
        if (err) {
            console.error(err);
            return res.status(500).json("Error al insertar asistencias");
        } else {
            return res.status(200).json("Asistencia creado Exitoso");
        }
    });
}

//trae eventos creados

export const mostrarAsistencia = async (req, res) => {
    try {
        const query = "SELECT * FROM asistencias ";
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
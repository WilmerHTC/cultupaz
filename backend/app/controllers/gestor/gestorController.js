import dbconnection from "../../database/dbConf.js";

//crear eventos

export const registroEvento = async (req, res) => {
    const {
        tema_evento,
        descripcion_evento,
        fecha_evento,
        idUsuario,
    } = req.body;
    const eventVal = [
        {
            tema_evento: tema_evento,
            descripcion_evento: descripcion_evento,
            fecha_evento: fecha_evento,
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

export const mostrarMisEventos = async (req, res) => {
    try {
      const {id}= req.params; // Obtener el idUsuario de los parámetros de la URL
      
      const query = "SELECT * FROM eventos WHERE idUsuario = ?";
      dbconnection.query(query, [id], (err, result) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        res.json(result);
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


  //actualizar eventos
  export const updateEvento = async (req, res)=>{
    try {
        const query = "UPDATE eventos SET ? WHERE idEvento=?";
        dbconnection.query(query, [req.body, req.params.id], (err, result) => {
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
    const { descripcion_sugerencia_evento,idUsuario	 } = req.body;
    const eventVal = [
        {
            descripcion_sugerencia_evento,idUsuario	
        },
    ];

    const query = "INSERT INTO sugerencia_evento SET ?";
    dbconnection.query(query, eventVal[0], (err, resul) => {
        if (err) {
            console.error(err);
            return res.status(500).json("Error al insertar sugerencia evento");
        } else {
            return res.status(200).json("Sugerencia a evento fue creado Exitosamente");
        }
    });
}


export const mostrarAsistencia = async (req, res) => {
    try {
        const query = "SELECT * FROM sugerencia_evento";
        dbconnection.query(query, (err, result) => {
            if (err) {
              console.error(err);
return res.status(500).json({ error: err.message });

            }
            res.json(result);
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
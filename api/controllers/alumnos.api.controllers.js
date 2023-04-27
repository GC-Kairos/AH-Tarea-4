import * as service from '../../services/alumnos.services.js'

function getAlumnos(req, res) {
    service.getAlumnos({ deleted: true })
        .then(function (alumnos) {
            res.status(200).json(alumnos) 
        })

}

function createAlumno(req, res) {
    const alumno = {
        legajo: parseInt(req.body.legajo),
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        año: parseInt(req.body.año)
    }

    service.createAlumno(alumno)
        .then(function (alumno) {
            res.status(201).json(alumno)
        })
}

function getAlumnoByLegajo(req, res) {
    const legajoAlumno = req.params.legajoAlumno

    service.getAlumnoByLegajo(legajoAlumno)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            }
            else {
                res.status(404).json({ error: { message: `Alumno#${legajoAlumno} no encontrado.` } })
            }
        })
}

function replaceAlumno(req, res) {
    const legajoAlumno = parseInt(req.params.legajoAlumno)
    const alumno = {
         nombre: req.body.nombre,
        apellido: req.body.apellido,
        año: parseInt(req.body.año)
    }

    service.editAlumno(legajoAlumno, alumno)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            }
            else {
                res.status(404).json({ error: { message: `Alumno#${legajoAlumno} no encontrado.` } })
            }
        })
}

function updateAlumno(req, res) {
    const legajoAlumno = parseInt(req.params.legajoAlumno)

    const alumno = {}

    if (req.body.nombre) {
        alumno.nombre = req.body.nombre
    }

    if (req.body.apellido) {
        alumno.apellido = req.body.apellido
    }

    if (req.body.año) {
        alumno.año = req.body.año
    }

    service.editAlumno(legajoAlumno, alumno)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            }
            else {
                res.status(404).json({ error: { message: `Alumno#${legajoAlumno} no encontrado.` } })
            }
        })
}

function deleteAlumno(req, res) {
    const id = parseInt(req.params.legajoAlumno)

    service.deleteAlumno(id)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            }
            else {
                res.status(404).json({ error: { message: `Alumno#${legajoAlumno} no encontrado.` } })
            }
        })
}


export {
    getAlumnos,
    createAlumno,
    getAlumnoByLegajo,
    replaceAlumno,
    deleteAlumno,
    updateAlumno
}
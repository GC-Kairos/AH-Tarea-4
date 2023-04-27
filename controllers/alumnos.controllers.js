import * as services from '../services/alumnos.services.js'
import * as views from '../views/alumnos.views.js'


function getAlumnos(req, res) {

    services.getAlumnos({ deleted: true })
        .then(function (alumnos) {
            res.send(views.createAlumnoListPage(alumnos))
        })
}


function getAlumnoDetail(req, res) {
    const legajoAlumno = req.params.legajoAlumno

    services.getAlumnoByLegajo(legajoAlumno)
        .then(function (alumno) {
            if (alumno) {
                res.send(views.createAlumnoPage(alumno))
            }
            else {
                res.send(views.createPage('Alumno no encontrado', '<p>El alumno no existe</p>'))
            }

        })
}

function createNewAlumnoPage(req, res) {
    res.send(views.createNewAlumnoPage())
}

function createAlumno(req, res) {
    const alumno = {
        legajo: parseInt(req.body.legajo),
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        año: parseInt(req.body.año)
    }

    services.createAlumno(alumno)
        .then(function (newAlumno) {
            res.send(views.createPage('Alumno creado', `<p>El alumno ${newAlumno.nombre} ${newAlumno.apellido}  ha sido creado con el legajo${newAlumno.legajo}</p>`))
        })
        .catch(function (error) {
            res.send(views.createPage('Error creando alumno', `<p>Se ha producido un error creando el alumno</p>`))
        })
}


function editAlumnoPage(req, res) {
    const legajo= req.params.legajoAlumno

    services.getAlumnoByLegajo(legajo)
        .then(function (alumno) {
            if (alumno) {
                res.send(views.formEditAlumno(alumno))
            }
            else {
                res.send(views.createPage('Alumno no encontrado', '<p>El alumno no existe</p>'))
            }
        })

}


function editAlumno(req, res) {
    const legajo= parseInt(req.params.legajoAlumno)
    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        año: parseInt(req.body.año)
    }

    services.editAlumno(legajo, alumno)
        .then(function (alumno) {
            if (alumno) {
                res.send(views.createPage('Alumno modificado', `<p>El alumno ${alumno.nombre} ha sido modificado</p>`))
            }
            else {
                res.send(views.createPage('Alumno no encontrado', '<p>El alumno no existe</p>'))
            }
        })
        .catch(function (error) {
            res.send(views.createPage('Error modificando alumno', `<p>Se ha producido un error modificando el alumno</p>`))
        })
}



function deleteAlumnoPage(req, res) {
    const legajo= req.params.legajoAlumno

    services.getAlumnoByLegajo(legajo)
        .then(function (alumno) {
            if (alumno) {
                res.send(views.formDeleteAlumno(alumno))
            }
            else {
                res.send(views.createPage('Alumno no encontrado', '<p>El alumno no existe</p>'))
            }
        })

}

function deleteAlumno(req, res) {
    const legajo= parseInt(req.params.legajoAlumno)

    services.deleteAlumno(legajo)
        .then(function (alumno) {
            if (alumno) {
                res.send(views.createPage('Alumno eliminado', `<p>El alumno ${alumno.nombre} ha sido eliminado</p>`))
            }
            else {
                res.send(views.createPage('Alumno no encontrado', '<p>El alumno no existe</p>'))
            }
        })
        .catch(function (error) {
            res.send(views.createPage('Error eliminando alumno', `<p>Se ha producido un error eliminando el alumno</p>`))
        })
}

export {
    getAlumnos,
    getAlumnoDetail,
    createNewAlumnoPage,
    createAlumno,
    editAlumnoPage,
    editAlumno,
    deleteAlumnoPage,
    deleteAlumno
}
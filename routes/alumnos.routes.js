import express from 'express'
import * as controllers from '../controllers/alumnos.controllers.js'

const route = express.Router()

route.get('/alumnos', controllers.getAlumnos)

route.get('/alumnos/nuevo', controllers.createNewAlumnoPage)
route.post('/alumnos/nuevo', controllers.createAlumno)

route.get('/alumnos/:legajoAlumno/edit', controllers.editAlumnoPage)
route.post('/alumnos/:legajoAlumno/edit', controllers.editAlumno)

route.get('/alumnos/:legajoAlumno/delete', controllers.deleteAlumnoPage)
route.post('/alumnos/:legajoAlumno/delete', controllers.deleteAlumno)

route.get('/alumnos/:legajoAlumno', controllers.getAlumnoDetail)


export default route
import { Router } from 'express'
import * as controller from '../controllers/alumnos.api.controllers.js'

const route = Router()

route.get('/alumnos', controller.getAlumnos)
route.post('/alumnos', controller.createAlumno)

route.get('/alumnos/:legajoAlumno', controller.getAlumnoByLegajo)
route.put('/alumnos/:legajoAlumno', controller.replaceAlumno)
route.patch('/alumnos/:legajoAlumno', controller.updateAlumno)
route.delete('/alumnos/:legajoAlumno', controller.deleteAlumno)



export default route
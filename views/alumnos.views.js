
function createAlumnoListPage(alumnos) {
    let html = '<h1>Lista de alumnos</h1>'
    html += '<ul>'

    for (let i = 0; i < alumnos.length; i++) {
        html += `<li>${alumnos[i].nombre} ${alumnos[i].apellido} <a href="/alumnos/${alumnos[i].legajo}">Ver</a> <a href="/alumnos/${alumnos[i].legajo}/edit">Editar</a> <a href="/alumnos/${alumnos[i].legajo}/delete">Eliminar</a> </li>`
    }

    html += '</ul>'

    return createPage('Lista de alumnos', html)
}

function createAlumnoPage(alumno) {
    let html = `<h1>${alumno.nombre} | ${alumno.legajo}</h1>`
    html += `<p>Legajo: ${alumno.legajo}</p>`
    html += `<p>Nombre: ${alumno.nombre}</p>`
    html += `<p>Apellido: ${alumno.apellido}</p>`
    html += `<p>Año: ${alumno.año}</p>`


    return createPage(alumno.nombre, html)
}

function createPage(title, content) {
    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'

    html += '<link rel="stylesheet" href="/css/styles.css">'

    html += '<title>' + title + '</title></head><body>'

    html += '<a href="/">Inicio</a> | <a href="/alumnos">Alumnos</a> | <a href="/alumnos/nuevo">Nuevo alumnno</a>'

    html += '<h1>Easy-app</h1>'

    html += content

    html += '</body></html>'

    return html
}

function createNewAlumnoPage() {
    let html = `<h1>Crear nuevo alumno</h1>`
    html += `<form action="/alumnos/nuevo" method="POST" enctype="application/x-www-form-urlencoded">
    <label for="legajo">legajo:
    <input type="number"  name="legajo" id="legajo"></input>
    </label>
    
    <label for="nombre">Nombre: 
            <input type="text" name="nombre" id="nombre">
        </label>

        <label for="apellido">Apellido: 
            <input type="text" name="apellido" id="apellido">
        </label>

        <label for="año">Año:
            <input name="año" type="number" id="año"></input>
        </label>

        <input type="submit" value="Crear">
    </form>`

    return createPage('Crear nuevo alumno', html)
}



function formEditAlumno(alumno) {
    let html = `<h1>Modificar alumno #${alumno.legajo}</h1>`

    html += `<form action="/alumnos/${alumno.legajo}/edit" method="POST" enctype="application/x-www-form-urlencoded">
        <label for="nombre">Nombre: 
            <input type="text" name="nombre" id="nombre" value="${alumno.nombre}">
        </label>

        <label for="apellido">Apellido: 
            <input type="text" name="apellido" id="apellido" value="${alumno.apellido}">
        </label>

        <label for="año">Año:
            <input type="number" name="año" id="año" value="${alumno.año}" />
        </label>

        <button type="submit">Editar</button>
    </form>`

    return createPage('Modificar Alumno', html)
}

function formDeleteAlumno(alumno) {
    let  html = `<h1>${alumno.nombre} | ${alumno.legajo}</h1>`

   
    html += `<p>Legajo: ${alumno.legajo}</p>`
    html += `<p>Nombre: ${alumno.nombre}</p>`
    html += `<p>Apellido: ${alumno.apellido}</p>`
    html += `<p>Año: ${alumno.año}</p>`


    html += `<form action="/alumnos/${alumno.legajo}/delete" method="POST" enctype="application/x-www-form-urlencoded">
        <p>¿Estás seguro de que quieres eliminar el alumno ${alumno.nombre} ${alumno.apellido} | Legajo: ${alumno.legajo}?</p>
        <button type="submit">Eliminar</button>
    </form>`

    return createPage('Eliminar Alumno', html)
}

export {
    createAlumnoListPage,
    createAlumnoPage,
    createPage,
    createNewAlumnoPage,
    formEditAlumno,
    formDeleteAlumno,
}
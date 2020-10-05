var div = '<div id="cuadrito"></div>'
document.write(div)
var cuadrito = document.getElementById ('cuadrito')



function ejecutar(){
    var name1 = prompt('Ingrese primer nombre')
    var name2 = prompt('Ingrese segundo nombre')
    var age = prompt('Ingrese su edad')
    var hobbie = prompt('Ingrese su actividad favorita')
    var color = prompt('Ingrese color de fondo deseado (en inglés)')
    var total = name1 + ' ' + name2 + ' ' + age + ' ' + hobbie

    cuadrito.innerHTML = total

    cuadrito.style.background = color
    cuadrito.style.color = 'green'
    cuadrito.style.fontSize = '50px'
    cuadrito.style.textAlign = 'center'
}

function cambiarColor(){
    var nuevoFondo = prompt('Ingrese nuevo color de fondo deseado (en inglés)')
    var nuevoColorFuente = prompt('Ingrese nuevo color de fuente deseado (en inglés)')
    var newSize = prompt('Ingrese nuevo tamaño de fuente deseado')
    cuadrito.style.background = nuevoFondo
    cuadrito.style.color = nuevoColorFuente
    cuadrito.style.fontSize = newSize
}
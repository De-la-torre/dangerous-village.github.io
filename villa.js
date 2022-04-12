// var z;

// for(var i=0; i<10; i++)
// {
//     z = aleatorio(10, 20);
//     document.write(z + ", ")
// }
// document.write(z)
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var cantidad = aleatorio(1, 8);
var cantidad1 = aleatorio(1, 3);
var cantidad2 = aleatorio(1, 1)

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", cargarFondos);

var vaca2 = new Image();
vaca2.src = "vaca2.png";
vaca2.addEventListener("load", cargarVacas);

var gallina2 = new Image();
gallina2.src = "gallina2.png";
gallina2.addEventListener("load", cargarPollos)

var cerdo = new Image();
cerdo.src = "cerdo1.png";
cerdo.addEventListener("load", cargarCerdos)


function cargarFondos()
{
    papel.drawImage(fondo, 0, 0);
}
function cargarVacas()
{
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
        var x = aleatorio(0, 5);
        var y = aleatorio(0, 5);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(vaca2, x, y);
    }
}

function cargarPollos()
{
    console.log(cantidad1);
    for(var v=0; v < cantidad1; v++)
    {
        var x = aleatorio(0, 5);
        var y = aleatorio(0, 5);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(gallina2, x, y);
    }
}
function cargarCerdos()
{   
    console.log(cantidad2);
    for(var v=0; v < cantidad2; v++)
    {
        var x = aleatorio(0, 5);
        var y = aleatorio(0, 5);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(cerdo, x, y);
    }
}



function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
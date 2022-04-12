var imagenes = [];
imagenes["cauchin"] = "vaca2.png";
imagenes["pokacho"] = "gallina2.png";
imagenes["tocinauro"] = "cerdo1.png";

var coleccion = [];
coleccion.push(new pakiman("cauchin", 100, 30));
coleccion.push(new pakiman("pokacho", 80, 50));
coleccion.push(new pakiman("tocinauro", 120, 40));

for(var p of coleccion)
{
   p.mostrar();
}
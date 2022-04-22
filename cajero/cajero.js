var imagenes = [];
imagenes["cauchin"] = "vaca2.png";
imagenes["pokacho"] = "gallina2.png";
imagenes["20"] = "20.png";
imagenes["100"] = "100.png";
imagenes["50"] = "50.png";
class Billete
{
    constructor(n, v, c)
    {
        
        // this.nombre = n;
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
    
    mostrar()
    {
        document.body.appendChild(this.imagen);
        // document.write("<br /><strong>" + this.nombre + "</strong><br />");
        // document.write("vida" + this.valor + "<br />");
        // document.write("ataque" + this.cantidad + "<hr />");
    }
 }

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }else{
                papeles = div;
            }

            entregado.push( new Billete(bi.nombre, bi.valor, papeles) );
            dinero = dinero - (bi.valor * papeles);
        }
    }

    if(dinero > 0){
        resultado.innerHTML = "Soy un cajero pobre y no tengo dinero :(";
    }else{
        for(var e of entregado)
        {
            if(e.cantidad > 0){
                resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br/>";
            }
        }
        for(var p of entregado)
    {
       p.mostrar();
    }
    }
}

var caja = [];
var entregado = [];
caja.push( new Billete("100", 100, 10));
caja.push( new Billete("50", 50, 40));
caja.push( new Billete("20", 20, 30));
caja.push( new Billete("cauchin", 10, 10));
caja.push( new Billete("pokacho", 5, 10));
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});

// Definición de constantes
var FMT_ENTERO = "0,0",
 FMT_NUMERO = "0,0.00",
 FMT_MONEDA = "$0,0.00",
 FMT_PORCENTAJE = "0.00%",

 /*Definir las variables con los valores correspondientes a cada input de moneda*/
 moneda1 = 0.05,
 moneda2 = 0.10,
 moneda3 = 0.50,
 moneda4 = 1.00,
 moneda5 = 2.00,
 moneda6 = 5.00,
 moneda7 = 10.00,
 moneda8 = 20.00,

 /*Definir las variables con los valores correspondientes a cada input de billete*/
 billete1 = 20,
 billete2 = 50,
 billete3 = 100,
 billete4 = 200,
 billete5 = 500,
 billete6 = 1000,

 /*Definir las variables para la salida de los resultados*/
 forma = document.getElementById("formulario"),
 Monedas = document.getElementById("salidaMoneda"),
 Billetes = document.getElementById("salidaBillete"),
 Totales = document.getElementById("salidaTotales");

 // Se puede agregar una función a todas las instancias del objeto Node.
Node.prototype.error = function (mensaje) {
    this.className = "error";
    this.textContent = mensaje;
};
Node.prototype.info = function (mensaje) {
    this.className = "";
    this.textContent = mensaje;
};

function proceso(){
    /*Declaracion de las variables moneda */
    var money1 = parseFloat["money1"].value,
        money2 = parseFloat["money2"].value,
        money3 = parseFloat["money3"].value,
        money4 = parseFloat["money4"].value,
        money5 = parseFloat["money5"].value,
        money6 = parseFloat["money6"].value,
        money7 = parseFloat["money7"].value,
        money8 = parseFloat["money8"].value;

    /*Declaracion de las variables billete */
}
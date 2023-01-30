let nombre=prompt ("Bienvenido al Similador de Plazo Fijo del BANK cor, por favor ingrese su nombre")
let apellido=prompt ("Ingrese por favor su apellido")

const anio=2023
let nombreCompleto= nombre +(" ") + apellido;
let anioNacimiento=parseInt (prompt("Ingrese su año de nacimiento"))

while(isNaN (anioNacimiento)){
    alert("ingreso un valor no numérico, por favor corrija")
    anioNacimiento=parseInt (prompt("Ingrese su año de nacimiento"))
}
const anioImposible=1910

while(anioNacimiento < anioImposible || anioNacimiento>anio){
        alert("ingreso un valor incorrecto, por favor corrija");
        anioNacimiento=parseInt (prompt("Ingrese su año de nacimiento"))
    }

let edad=anio-anioNacimiento

let numDias= parseInt (prompt ("La tasa nominal anual es del 75%, por favor ingrese la cantidad de días que quiere hacer plazo fijo (el valor aceptado es de 30 hasta 90 días) y el número 0 para salir del sistema" ))


function verificarCero () {
    while (numDias===0){
            alert ("Gracias por utilizar el simulador")
            break
    }
}
if ( numDias<30 || numDias>90 ){
    numDias= parseint( prompt("Ingrese nuevamente un valor correcto o 0 para salir"))
}    
else{
    let montoIngresador=parseInt (prompt("Ingrese el monto a depositar"))
    const interesDiario =0.2054795
    let montoPagar=montoIngresador*interesDiario+montoIngresador
    alert ("Usted recibirá " + montoPagar + " " + numDias)

}

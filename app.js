import info from './calculadora.js';
import { suma, resta, multiplicacion, division } from './calculadora.js';

function calcular(operacion, a, b) {

    let resultado;

    switch (operacion) {
        case "suma":
            resultado = suma(a, b);
            break;
        case "resta":
            resultado = resta(a, b);
            break;
        case "multiplicacion":
            resultado = multiplicacion(a, b);
            break;
        case "division":
            resultado = division(a, b);
            break;
        default:
            throw new Error("Operación no válida");
    }
    console.log("Resultado: ", resultado);
}

info();

calcular("suma", 10, 5);
calcular("resta", 20, 8);
calcular("multiplicacion", 4, 7);
calcular("division", 12, 3);

export default function info() {
    console.log('Esta es una calculadora simple que realiza operaciones básicas: suma, resta, multiplicación y división.');
}

function validar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los datos ingresados tienen que ser numeros');
    }
}

export function suma(a,b) {
    validar(a, b);
    return a + b;
}

export function resta(a,b) {
    validar(a, b);
    return a - b;
}
export function multiplicacion(a,b) {
    validar(a, b);
    return a * b;
}
export function division(a,b) {
    validar(a, b);
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    } else {
        return a / b;
    }
}
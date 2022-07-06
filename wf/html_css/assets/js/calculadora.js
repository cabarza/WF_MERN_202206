function suma(valores) {
    var suma = 0;
    for(var num of valores) {
        suma += num;
    }
    return suma;
}

function resta(valores) {
    var resta = valores[0];
    for(var i = 1; i < valores.length; i++) {
        resta -= valores[i];
    }
    return resta;
}

function division(a, b) {
    return a / b;
}

function multiplicacion(valores) {
    return valores.reduce((res, val) => res * val, 1);
}


var valores = [2, 3, 5];

console.log(valores.map((val, i) => val*i));

valores.forEach(val => console.log(val));

console.log(valores.filter(val => val >= 3));

console.log(valores.find(val => val >= 3));

function saluda(nombre) {
    if(nombre) {
        console.log(`Hola ${nombre}`);
    } else {
        console.log("HOLA");
    }
}

setTimeout(() => saluda("A todos"), 3000);


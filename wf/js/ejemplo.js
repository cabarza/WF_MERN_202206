console.log('El resultado 1 == "1" es: ', 1 == "1" );
console.log('El resultado 1 === "1" es: ', 1 === "1" );
console.log('El resultado 1 != "1" es: ', 1 != "1" );

console.log(1 == 1 && 3 === '3' && 5 == 5 && console.log('HOLA'));

console.log(1 == 1 | 3 == '3' | 5 == 6 | console.log('CHAO'));

var saludo = 'HOLAS';

if(saludo.toLowerCase() == 'hola') {
    console.log('HOLA');
} else if(saludo == 'Bla'){
    console.log('BLA');
} else {
    console.log('CHAO');
}


var fecha = new Date();

console.log(fecha);


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for(var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log('DECREMENTAR');

// for(var j = arr.length-1; j >= 0; j--) {
//     console.log(arr[j]);
// }


// console.log('ANIDADOS');

// for(var i = 0; i < arr.length; i++) {
//     console.log('Imprime:');
//     for(var j = arr.length-1; j >= i; j--) {
//         console.log(arr[j]);
//     }
// }

function impares(hasta) {
    for(var i = 1; i <= hasta; i++) {
        if(i%2 == 1) {
            console.log(i);
        }
    }
}


function divisiblesPorTres(hasta) {
    for(var i = 1; i <= hasta; i++) {
        if(i%3 == 0) {
            console.log(i);
        }
    }
}

function resta(desde, hasta, cuanto) {
    for(var i = desde;i > hasta+cuanto;) {
        i = i - cuanto;
        console.log(i);
    }
}

const sigma = (hasta) => {
    var sum = 0;
    for(var i=1; i<=hasta; i++) {
        sum += i;
    }
    console.log(sum);
}

const factorial = (hasta) => {
    var fact = 1;
    for(var i=1; i<=hasta; i++) {
        fact *= i;
    }
    return fact;
}

console.log('Impares:');
impares(20);
console.log('Divisibles por 3');
divisiblesPorTres(100);
console.log('resta');
resta(10, -10, 1.5)
console.log('sigma');
sigma(100);
console.log('factorial');
console.log(factorial(12));


var arreglo = [];
arreglo.push(1);
arreglo.push(new Date());

console.log(arreglo);

if(arreglo[1] instanceof Date) {
    console.log('Esta es una fecha');
} else {
    console.log('Esta no es una fecha');
}

if(typeof arreglo[0] == 'number') {
    console.log('Esta es un numero');
    console.log('Este código se debe ejecutar sólo si el if es verdadero');
}


var taco1 = {
    tortilla: "tortilla suave de maíz",
    protein:  "tinga de pollo",
    cheese:   "queso cotija",
    toppings: ["lechuga", "pico de gallo", "guacamole"]
}

console.log("'Nombre:'", taco1.tortilla, ", \"Topping 1\": ", taco1.toppings[0]);

console.log('"Nombre:"', taco1.tortilla, ', "Topping 1": ', taco1.toppings[0]);

console.log(`"Nombre:" ${taco1.tortilla} , "Topping 1": ${taco1.toppings[0]}`);

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.appelido = apellido;
        this.edad = edad;
    }

    showInfo() {
        console.log(`Nombre: ${this.nombre}, \n Apellido: ${this.appelido} \n Edad: ${this.edad}`);
    }
}


var p1 = new Persona('Cesar', 'Abarza', 40);
var p2 = new Persona('Juan', 'Perez', 15);

p1.showInfo();
p2.showInfo();

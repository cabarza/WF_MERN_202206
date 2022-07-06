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


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log('DECREMENTAR');

for(var j = arr.length-1; j >= 0; j--) {
    console.log(arr[j]);
}


console.log('ANIDADOS');

for(var i = 0; i < arr.length; i++) {
    console.log('Imprime:');
    for(var j = arr.length-1; j >= i; j--) {
        console.log(arr[j]);
    }
}
// const funcion1 = () => {
//     console.log('Ya paso 1 segundo');
// }

// setTimeout(funcion1, 1000);


// const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
// const groceryList = groceries.map( (item, i) => `<li>${item}, ${i}</li>` );

// const data = [];
// groceries.forEach((g, i) => data.push(`<li>${g}, ${i}</li>` ))

// console.log(groceryList);

// console.log(data);


// const filtro1 = groceries.filter(item => !item.includes('m'));

// console.log(filtro1);

// const filtro2 = groceries.find(item => item.includes('m'));

// console.log(filtro2);

// const reduccion = groceries.reduce((concatenacion, item, i) => concatenacion += item + '_' + i + ', ', '');

// console.log(reduccion);

//CURRIFICACION
function x(param1) {
    return function y(param2) {
        console.log(param1 + param2);
    }
}

x(2)(7);


//CIERRE
function outer() {
    let count = 0; // esta es una variable de recuento que tiene un alcance de la función
    // hay una función interna que incrementa el recuento y luego la consola registra
    return function inner() {
      count++;
      console.log(count);
    }
}
      
const counter = outer();   // counter es la función que devolvimos al llamar a la función externa
counter();                 // esto consola.log "1"
counter();                 // esto consola.log "2"
counter();                 // esto consola.log "3"
counter();                 // esto consola.log "4"
try {
    console.log(count);
} catch(e) {
    console.error(e.message);
}

const counter2 = outer();
counter2();
counter();

counter2();
counter2();
counter2();

const counter3 = outer();
counter3();



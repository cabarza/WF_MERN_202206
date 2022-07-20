var variable;
let variableLet;
const variableConst=1;

variableLet = 'VAR GLOBAL';
console.log(variableLet);

function test () {
    var var1;
    let varLet;
    const varConst= 2;
}


test();

const persona = {
    nombre: 'Juanito',
    apellido: 'Gonzalez',
    direccion: [
        {
            calle: 'Rio Blanco',
            numero: 123
        },
        {
            calle: 'Rio Blanco',
            numero: 321
        }

    ]
}

const persona3 = {
    nombre: 'Pepe',
    apellido: 'Tapia',
    direccion: [
        {
            calle: 'Molinos',
            numero: 76543
        }

    ]
}

const nombre = persona.nombre;
const num = persona.direccion[0].numero;
const num2 = persona.direccion[1].numero;


const { nombre: primerNombre, direccion: [ { numero }, { numero: numero2 } ] } = persona;

console.log(primerNombre, numero, numero2);

console.log(nombre, num, num2);

const arreglo = [1,2,3,4];

const arreglo2 = [0, ...arreglo, 5];

arreglo2.push(6);

console.log(arreglo2);

const persona2 = { ...persona };

persona2.nombre = 'Camila';

persona2.direccion=[{
    calle: 'Otra',
    numero: 666,
    fono: '12312132'
}];

persona3.direccion.push({
    calle: 'bajo el puente'
})

console.log(persona, persona2, persona3);



let arr1 = [1,2,3,4,5,6];
let arr2 = arr1;

arr2.push(10);

// console.log(arr1);

arr2 = [4,3,2,1];

// console.log(arr1);

// console.log(arr2);

arr1 = 2;

console.log(arr1);

console.log(arr2);

mod(arr1, arr2);

console.log(arr1); //4

console.log(arr2); //[4,3,2,1,2,4]

function mod(arr1, arr2) {
    arr2.push(arr1);
    arr1 = arr1**2;
    arr2.push(arr1);
}

let f2 = function() {
    console.log('F2');
}

const fMod = (param1, param2) => {
    console.log(param1 * param2);
}

const f3 = p1 => console.log(p1);

f2();

fMod(2,10);

f3(2000);


if(f3(1) === 2000) {
    console.log(true);
    console.log(true);
    console.log(true);
    console.log(true);
    console.log(true);

} else {
    console.log(false);
    console.log(true);
    console.log(true);

}

f3(1) === 2000?console.log(true):(a>b)?true:false;
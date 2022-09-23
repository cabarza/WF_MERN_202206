// const a = 1;
// const b = 101;

// if((a > 0 && a < 10 && b>100) || (a == 1 && b == 1)) {
//     console.log('Primer if');
// } else if(a >= 10 && b > 10 && b < 20) {
//     console.log('Segunda if');
// } else if(a == 1 || b == 1) {
//     console.log('Tercer if');
// } else {
//     console.log('No aplica');
// }



// const arreglo = [1, 2, 10, 20, 7, 3];

// for(let i = 0; i < arreglo.length; i++) {
//     console.log(arreglo[i]);  
// }

// for(let valor of arreglo) {
//     console.log(valor);
// }

// for(let valor in arreglo) {
//     console.log(valor);
// }

// const obj = {
//     nombre: 'Juan',
//     apellido: 'Lopez'
// }

// for(let valor in obj) {
//     console.log(valor + ':' + obj[valor]);
// }

// let indice = 0;

// while(indice <= 100) {
//     console.log(indice);
//     // if(indice == 49){
//     //     continue;
//     // }
//     indice++;
//     if(indice == 50) {
//         break;
//     }
// }


// const f = (nombre, apellido) => {
//     nombre = nombre+'ito';
//     console.log(nombre, apellido);
// }

// f(obj.nombre, obj.apellido);

// console.log(obj);


// const f2 = (p) => {
//     p.nombre = p.nombre+'ito';
//     console.log(p.nombre, p.apellido);
// }

// f2(obj);

// console.log(obj);



const pushFront = (arr, val) => {
    const newArr = [val, ...arr];
    return newArr;
}

const popFront = (arr) => {
    const [primero, ...newArr] = arr;
    return {primero, newArr};
}

const insertAt = (arr, pos, val) => {
    let newArr = [];
    if(pos == arr.length) {
        newArr = [...arr, val];
    } else {
        let j = 0;
        for(let i = 0; i<arr.length; i++) {
            if(j == pos) {
                newArr[j++] = val;
            }
            newArr[j++] = arr[i];
        }
    }
    pos = 100;
    return newArr;
}

const removeAt = (arr, pos) => {
    const newArr = [];
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        if(i == pos) {
            continue;
        }
        newArr[j++] = arr[i];
    }
    return newArr;
}

const reverse = (arr) =>{
    let j = arr.length-1;
    for(let i = 0; i < arr.length/2; i++) {
        const aux = arr[j];
        arr[j] = arr[i];
        arr[i] = aux;
        j--;
    }
    return arr;
}
 

const arr = [1,2,3,4,5,6,7,8]
const pos = 3

console.log('PUSH FRONT', pushFront(arr, 10));

console.log('POP FRONT', popFront(arr));

console.log('INSERT AT', insertAt(arr, pos,10));

console.log('REMOVE AT', removeAt(arr, pos));

console.log('REVERSE', reverse(arr));
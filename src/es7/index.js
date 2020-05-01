// Qué se implementó en ES7 ?
// el valor de include y las operaciones en forma exponencial.
let numbers  = [1,2,3,6,7,9];
numbers.includes(7) ? console.log('Si se encuentra el valor 7') : console.log('No se encuentra el 7');

const includesChar = numbers => numbers.includes(8) ? console.log('Si hay 6'): console.log('no hay');
includesChar(numbers)


// cómo elevar a la potencia (se puede hacer con dos asteriscos  **  )
let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result);

function potencia(num1, num2){
    return num1 ** num2;
}
console.log(potencia(5,5));

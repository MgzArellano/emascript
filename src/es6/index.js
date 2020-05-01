// como se hacía anteriormente.
function newFunction(name, age, country) {
    var name = name || 'marco';
    var age = age || 35;
    var country = country || 'Mexico';
    console.log(name, age, country);
}
newFunction('Valeria', 7, 'MX');

// ECMAScript 6
function newFunction2(name='marco', age=35, country='Mexico') {
    console.log(name, age, country);
}
newFunction2();
newFunction2('Javier', 18, 'Colombia');

// Concatenación de cadenas   - Templates Literals  -  Template Strings
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// con ECMAScript 6
let epicPhrase2 = `${hello} ${world}!`
console.log(epicPhrase2);

// LET, CONS, Multilínea y Desestructuración

// antes de es6
let lorem = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\n" 
+"praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi\n"
+"sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt \n"
+"mollitia animi, id est laborum et dolorum fuga."
console.log(lorem);
console.log('\n');

// con es6
let lorem2 = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditii 
praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
excepturi sint occaecati cupiditate non provident, similique sunt in culpa 
qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`
console.log(lorem2);

// Destructuración de Elementos
// antes de es6
let person = {
    'name': 'Marco',
    'age': 35,
    'code': 'MX',
    'country': 'México'
}
console.log(person.name, person.age, person.code);
// destructuración con es6
let {name, age, country} = person;
console.log(name, age, country);

// concatenar objetos en 1 solo
let team1 = ['Marco', 'Valeria', 'Julieta'];
let team2 = ['Lourdes', 'Santi', 'Chris'];
let education = ['Oscar', ...team1, ...team2]
console.log(education);

{
    // Variable accesible en todo el programa (archivo)
    var varGlobal = "Var Global";
}
{
    // Variable accesible únicamente dentro del bloque donde está declarada
    let globalLet = "Global Let";
    console.log(globalLet);
}
console.log(varGlobal);

// Si declaramos una variable con "const" el valor de esta no podrá ser reasignado.
const a = 'b';
console.log(a)
// no se puede cambiar al valor de esta variable 
// enviará un error: TypeError: Assignment to constant variable.
//a = 'a';
//console.log(a);


// Arrow functions, Promesas y Parámetros en Objetos.
let nombre = 'Juliette';
let edad = '5';
// se creaba un objeto de esta forma:
obj1 = { nombre: nombre, edad: edad };
console.log(obj1);

// con es6 basta con asignar al objeto las variables entre corchetes y creará el objeto con los atributos correspondientes.
obj = { nombre, edad };
console.log(obj);

// Arrow Functions
const names = [
    { name:'Juliette', age:5},
    { name: 'Valerie', age:7},
    { name: 'Verónica', age:39}
]
let listOfNames = names.map(function (item){
    //console.log(item.name);
})

// mismo ejemplo con arrow functions
let listOfNames2 = names.map( item => console.log(item.name) );
// con constante
const listOfNames3 = (name, age) => {
    //... codigo
}

//
const listOfNames4 = name => {
    //... codigo
}

// se crea una función que recibe un parámetro y hace algo con él
const square = num => num * num;
console.log(square(5));

// ASINCRONISMO
// Promesas es la solución de los callbacks que no eran escalables y tenías que hacer anidaciones
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey!');
        }else{
            reject('Ups!!');
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .then(()=>console.log('Hola!'))
    .catch(error => console.log(error));


// Clases, módulos y generadores
// se simula la programación orientada a objetos
class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,5));

import {hello} from './module';
hello();

// Generators
function* helloworld() {
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World!'
    }
};

const generatorHello = helloworld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


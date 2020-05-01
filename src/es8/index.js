// ECMAScript 8

import hello from "../es6/module";

const data = {
    frontend:'Marco',
    backend: 'Julieta',
    designer: 'Valeria'
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object values - Extrae únicamente los valores de los objetos, ignorando su nombre del atributo
const data = {
    frontend:'Marco',
    backend: 'Julieta',
    designer: 'Valeria'
};
const values = Object.values(data);
console.log(values);
console.log(values.length);

// Padding
const string = '234';
console.log(string.padStart(13,'0'));
console.log(string.padEnd(13,'0'));
//  output:
//  0000000000234
//  234000000000

// async & await
const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log('hello');
    
}
helloAsync();

// otra forma de trabajar con async y await y utilizar try & catch
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
        
    }
}
anotherFunction()
// Características en ES9 que salió en Junio del 2018
// destructuración rápida de objetos
const obj = {
    name: 'Marco',
    lastname: 'Arellano',
    age: 35,
    country: 'México'
};

let {name, ...all } = obj;
console.log(all);

// utilizar las propiedades de propagación para unir elementos de objetos a otro
const obj1 = {
    name: 'Valeria',
    firstLastName: 'González',
    age: 7
}
const obj2 = {
    ...obj1,
    country: 'México'
}
console.log(obj2);

// Promise finally, 

const helloworld = () => {
    return new Promise ((resolve, reject) =>{
        false
        ? setTimeout( () => resolve('Hello World!'), 7000 )
        : reject(new Error('Test Error'))
    });
};
helloworld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizó'))



// Regex - mejoras
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-04-20');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day);


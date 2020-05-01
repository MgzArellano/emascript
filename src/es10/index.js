//

let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));


// flat.map  - 
let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value*2, value*3]));

// trim start
let hello = '      Hello world!';
console.log(hello);
console.log(hello.trimStart());

// trim al final
let hello = 'Hello World!      '
console.log(hello);
console.log(hello.trimEnd());

// optinal catch 
try {
}catch (error){
    error
}

// from entries transforma clave valor a un objeto
let entries = [ ["name","Marco"], ["age",35]];
console.log(Object.fromEntries(entries));

// objeto tipo símbolo

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);


// qué es lo que viene en ECMAScript
// cómo se añaden nuevas características
// TC39 es un grupo de desarrolladores que se encargan de agregar nuevas características 
//   https://tc39.es/

//  Stage0: Idea    =>  Stage1: Proposal    =>  Stage2: Draft   =>  Stage3: Candidate   =>  Stage4: Ready

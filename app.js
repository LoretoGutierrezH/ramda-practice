const R = require('ramda');

const numbers = [2, 5, 399, 45, 2, 33, 56];

const mapped = R.map(x => x + 2, numbers);

console.log(mapped);


//Loreto Camila Gutiérrez
const camila = x => x + " camila";
const gutierrez = x => x + " gutiérrez";
const age = (x, y) => `${x} y tengo ${y} años`;

//Compose
//camila(gutierrez('loreto')) - right to left
const ramdaResult = R.compose(camila, gutierrez, age);
console.log(ramdaResult('loreto'));

//Pipe
//gutierrez(camila('loreto')) - left to right
const ramdaResult2 = R.pipe(camila, gutierrez, age);
console.log(ramdaResult2('loreto'));


//prop
const characteristics = {
    hair: 'brown',
    eyes: 'blue',
    skinColor: 'white'
}

console.log(R.prop('eyes', characteristics));

//includes
console.log(R.includes('maría', ['loreto', 'camila', 'patricio']));


//cond
const conditionalFn = R.cond([
    [R.equals('loreto'), () => 'Ahí está mi nombre!'],
    [R.equals('jacqueline'), () => 'Ahí está SU nombre'],
    [R.equals('fernanda'), () => 'Ahí está ESE nombre']
]);

// console.log(conditionalFn('loreto'));
// console.log(conditionalFn('jacqueline'));
// console.log(conditionalFn('fernanda'));

//cond + includes
const condFn = R.cond([
    [R.includes('loreto'), () => 'Ahí está mi nombre!'],
    [R.includes('jacqueline'), () => 'Ahí está su nombre']
])

console.log(condFn(['loreto', 'camila', 'patricio']));
console.log(condFn(['jacqueline', 'camila', 'patricio']));

//propEq
const lion = { name: 'león', species: 'felinos'}
const dog = { name: 'perro', species: 'cánidos'}
const cat = { name: 'gato', species: 'felinos'}
const parrot = { name: 'loro', species: 'aves silvestres pequeñas'}

const animals = [lion, dog, cat, parrot];

const felines = R.filter(R.propEq('species', 'felinos'), animals);

console.log(felines);


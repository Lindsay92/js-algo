// const input = process.argv[2]; //node js not Javascript
// console.log("Hello " + input);
//argv[0] = chemin dossiers juqu'à node.exe
//argv[1] = chemin dossiers jusqu'à program.js
//argv[2] = Lindsay
//argv[] c'est argument variable

const string = process.argv[2];
console.log(string); // command line argument as input

const array = string.split(","); // change in array in the terminal
//const array = source
console.log(array);

const numbers = []; // destination
for (let i = 0; i <array.length; i++) { // loop code block
    const candidate = array[i]; // type string
    // objective : convert candidate into a number
    const number = parseInt(candidate, 10); // base décimale
    numbers.push(number);
}
console.log(numbers); // copy of an array
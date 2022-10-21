const string = process.argv[2];
//console.log(string);

const array = string.split(",");
// console.log(array);

let min = 0;
let max = array.length - 1;

while (min < max) {
    let actual = array[max];
    array[max] = array[min];
    array[min] = actual;
    min++;
    max--; // attention si ++ boucle infini
}
console.log(array);



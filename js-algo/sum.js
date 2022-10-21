const string = process.argv[2];
// console.log(string);

const array = string.split(",");
//console.log(string);

let sum = 0;

for (let i = 0; i < array.length; i++) {
    let value = array[i];
    const number = parseInt(value, 10);
    sum = sum + number;  
}
console.log("Sum is equal to " + sum);

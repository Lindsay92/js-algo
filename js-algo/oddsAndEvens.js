// tiroir 3
const string = process.argv[2];
const array = string.split(",");
const input = [];

for (let i = 0; i < array.length; i++) {
    const canditate = array[i];

    const number = parseInt(canditate, 10);
    input.push(number);
}

const evens = [];
const odds = [];

let maxEven = 0;
let maxOdd = 0;

for (let i = 0; i < input.length; i++) {
    let value = input[i];

    if (value % 2 == 0) {
        evens.push(maxEven);  
        if (value > maxEven) {
            maxEven = value;
        }  
    }else{
        odds.push(maxOdd);
        if (value > maxOdd) {
            maxOdd = value;
        }
    }
}

const output = `Evens ${evens} (${evens.length}, max = ${maxEven}), Odds ${odds} (${odds.length})`;
console.log(output);



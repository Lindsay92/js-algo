const input = process.argv[2];
// console.log(input);
const numbers = input.split(",");

let numberRepeated = 0;
let combo = false;

for (let i = 0; i < numbers.length; i++) {
    let tmp = 0;
    for (let j = 0; j < numbers.length; j++){
        if (numbers[i] == numbers[j] && (numbers[j] == numbers[j-1] && numbers[j] == numbers[j+1])) {
            tmp++;
            combo = true;
        }else if (numbers[i] == numbers[j]) {
            tmp++;
        }
        if (tmp >= 3) {
            numberRepeated = numbers[i];
        }       
    }     
}

if (numberRepeated != 0 && combo) {
    console.log(`Le nombre ${numberRepeated} apparaît 3 fois de suite`); 
    // ${numberRepeated} => interpolation
}else if (numberRepeated != 0) {
    console.log(`Le nombre ${numberRepeated} apparaît 3 fois !`);
}else{
    console.log("Aucun nombre n'apparaît 3 fois");
}



const string = process.argv[2]; // input
// console.log(string);

const numbers = []; // déclaration de ma variable tableau qui va comprendre des nbr
let tmp = "" ;// déclaration de ma variable temporaire

for (let i = 0; i < string.length; i++){ //for ... loop => bloc d'instruction 
    // initialisation, condition, incrémation
    const candidate = string[i]; // on affecte l'index dans la chaine de caractère
    if(candidate != ",") {
        tmp += candidate;
    }else{
        numbers.push(tmp); // ADD tmp INTO numbers
        tmp = "";
    }
}
numbers.push(tmp); // ADD tmp INTO numbers
console.log(numbers); // OUT
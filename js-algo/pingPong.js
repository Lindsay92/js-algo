const string = process.argv[2];
// console.log(string);
const array = string.split(",");
console.log(array);

let pings = 0;
let pongs = 0;

// const array = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] == "ping") {
        pings++;
    }else{
        pongs++;
    }
}
console.log("Match result ping vs pong : " + pings + "-"+ pongs);
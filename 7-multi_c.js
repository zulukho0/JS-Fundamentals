let args = process.argv.slice(2);

let convertToNum = Number(args[0])
let message = "C is fun"

if (args[0] == convertToNum) {
    let i = 0;
    while (i < convertToNum) {
        console.log(message);
        i++;
    }

    /*-----using a for loop 
    for(a = 0; a < convertToNum; a++){
        console.log(message);
    }
        */
} else {
    console.log("Missing number of occurrences");

}
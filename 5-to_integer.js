let arguments = process.argv.slice(2);


let convert2num = Number(arguments[0]);


if (arguments[0] == convert2num){
    if (convert2num != parseInt(convert2num)) {
        convert2num = parseInt(convert2num);
        console.log(`My number: ${convert2num}`);
    } else {
        console.log(`My number: ${convert2num}`);
        
    }
}else{
    console.log("Not a number");
}



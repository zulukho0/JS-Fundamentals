function argumentsChecker(){
    let hold = arguments.length

    if (hold == 0){
        console.log("No argument");
    }else if (hold == 1) {
        console.log("Argument found");
    }else{
        console.log("Arguments found"); 
    }
}

argumentsChecker();
argumentsChecker(2);
argumentsChecker(1,2,3);

let args = process.argv.slice(2);

let args1 = parseInt(args[0])
let args2 = parseInt(args[1])

function name(params,params2) {
    let equation = params + params2
    console.log(equation);
}

name(args1, args2)
const args = process.argv.slice(2);

let convert2num = Number(args[0]);
let letter = "";

if (args[0] == convert2num) {
  if (convert2num > 0) {
    for (let i = 0; i < convert2num; i++) {
      for (let a = 0; a < convert2num; a++) {
        letter += "X";
      }
      console.log(letter);
      letter = ""; 
    }
  } 
} else {
  console.log("Missing size");
}

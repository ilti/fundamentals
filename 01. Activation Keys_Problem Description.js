function activationKeysProgram(params) {
  let workStr = params.shift();
  let command = params.shift();


  while (command !== "Generate") {
    command = command.split(">>>");


    if (command[0] == "Contains") {
      if (workStr.includes(command[1])) {
        console.log(`${workStr} contains ${command[1]}`);
      } else {
        console.log(`Substring not found!`);
      }
    } 
    
    else if (command[0] == "Flip") {
      if (command[1] === "Upper") {
        command[2] = Number(command[2]);
        command[3] = Number(command[3]);
        let str = workStr.substring(command[2], command[3]);
        let upper = str.toUpperCase();
        workStr = workStr.replace(str, upper);
        console.log(workStr);
      } else if (command[1] === "Lower") {
        command[2] = Number(command[2]);
        command[3] = Number(command[3]);
        let str = workStr.substring(command[2], command[3]);
        let lower = str.toLowerCase();
        workStr = workStr.replace(str, lower);
        console.log(workStr);
      }
    } 
    
    else if (command[0] == "Slice") {
      command[1] = Number(command[1]);
      command[2] = Number(command[2]);
      let slice = workStr.substring(command[1], command[2]);
      workStr = workStr.replace(slice, "");
      console.log(workStr);
    }
    
    command = params.shift();
  }
  console.log(`Your activation key is: ${workStr}`);
}
activationKeysProgram([
  'abcdefghijklmnopqrstuvwxyzdef',
  'Slice>>>2>>>6',
  'Flip>>>Upper>>>3>>>14',
  'Flip>>>Lower>>>5>>>7',
  'Contains>>>def',
  'Contains>>>deF',
  'Generate'])
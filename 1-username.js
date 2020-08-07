function usernameProgram(params) {
    let workStr = params.shift();
    let command = params.shift();
    while (command != 'Sign up') {
        command = command.split(' ');
        if (command[0] == 'Case') {
            if (command[1] == 'lower') {
                workStr = workStr.toLowerCase();
                console.log(workStr);
            } else if (command[1] == 'upper') {
                workStr = workStr.toUpperCase();
                console.log(workStr);
            }
        } else if (command[0] == 'Reverse') {
            let start = Number(command[1]);
            let end = Number(command[2]);
            if ((start < workStr.length && start >= 0) && (end < workStr.length && end >= 0)) {
                let sub = workStr.substring(start, end + 1)
                sub = sub.split('').reverse().join('');
                console.log(sub);
            }
        }else if(command[0]=='Cut'){
            let toBeCut = command[1];
            if(workStr.includes(toBeCut)){
                while(workStr.includes(toBeCut)){
                    workStr=workStr.replace(toBeCut,''); // check 1 or many
                }
                console.log(workStr);
            }
        }else if(command[0]=='Replace'){
            let char = command[1];
            if(workStr.includes(char)){
                while(workStr.includes(char)){
                    workStr=workStr.replace(char,'*')// check, something smells
                }
            }
            console.log(workStr);
            
        }else if(command[0]=='Check'){
            let toBeChecked= command[1]
            if(workStr.includes(toBeChecked)){
                console.log(`Valid`);
                
            }else{
                console.log(`Your username must contain ${toBeChecked}.`);   
            }
        }
        command = params.shift();
    }
}
usernameProgram(['ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up'])
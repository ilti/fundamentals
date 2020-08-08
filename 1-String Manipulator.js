function stringManProg(params) {
    let workStr = params.shift();
    let command = params.shift();
    while (command != 'End') {
        command = command.split(' ');
        if (command[0] == 'Translate') {
            let char = command[1];
            let repl = command[2];
            if (workStr.includes(char)) {
                while (workStr.includes(char)) {
                    workStr = workStr.replace(char, repl)
                }
                console.log(workStr);
            }
        } else if (command[0] == 'Includes') {
            let str = command[1];
            if (workStr.includes(str)) {
                console.log(`True`);
            } else {
                console.log(`False`);
            }
        } else if (command[0] == 'Start') {
            let str = command[1];
            if (workStr.startsWith(str)) {
                console.log(`True`);
            } else {
                console.log(`False`);
            }
        } else if (command[0] == 'Lowercase') {
            workStr = workStr.toLowerCase();
            console.log(workStr);
        } else if (command[0] == 'FindIndex') {
            let char = command[1];
            let test = workStr;
            let index = 0
            while(test.indexOf(char)>0){
                index = test.indexOf(char);
                test = test.replace(char,'-')   //check how to do it
            }
            console.log(index);
        }else if(command[0]=='Remove'){
            let start = Number(command[1]);
            let count = Number(command[2]);
            let substr = workStr.substring(start, start+count);
            workStr=workStr.replace(substr,'')
            console.log(workStr);               // check
        }
        command = params.shift();
    }
}
stringManProg([    '//Thi5 I5 MY 5trING!//',    'Translate 5 s',    'Includes string',
    'Start //This',    'Lowercase',    'FindIndex i',    'Remove 0 10',    'End'])
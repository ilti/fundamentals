function nikuldenCharity(params) {
    let workStr = params.shift();
    let command = params.shift();
    while (command != 'Finish') {
        command = command.split(' ');
        if (command[0] == 'Replace') {
            let currentChar = command[1];
            let newChar = command[2];
            if (workStr.includes(currentChar)) {
                while (workStr.includes(currentChar)) {
                    workStr = workStr.replace(currentChar, newChar);
                }
                console.log(workStr);
            }
        }
        else if (command[0] == 'Cut') {
            let startIndex = Number(command[1]);
            let endIndex = Number(command[2]);
            if ((startIndex >= 0 && startIndex < workStr.length) && (endIndex >= 0 && endIndex < workStr.length)) {
                let string = workStr.substring(startIndex, endIndex + 1);
                workStr = workStr.replace(string, '');
                console.log(workStr);
            } else {
                console.log(`Invalid indexes!`);
            }
        }
        else if (command[0] == 'Make') {
            let what = command[1];
            if (what == 'Upper') {
                workStr = workStr.toUpperCase()
            } else if (what == 'Lower') {
                workStr = workStr.toLowerCase();
            }
            console.log(workStr);
        }
        else if (command[0] == 'Check') {
            let check = command[1];
            if (workStr.includes(check)) {
                console.log(`Message contains ${check}`);
            } else {
                console.log(`Message doesn't contain ${check}`);
            }
        }
        else if (command[0] == 'Sum') {
            let start = Number(command[1]);
            let end = Number(command[2]);
            if ((start >= 0 && start < workStr.length) && (end >= 0 && end < workStr.length)) { // here
                let substr = workStr.substring(start, end + 1);
                substr = substr.split('');
                let total = 0
                for (let i = 0; i < substr.length; i++) {
                    let cur = substr[i]
                    let current = substr[i].charCodeAt();
                    total = total + current;
                }
                console.log(total);
            } else {
                console.log(`Invalid indexes!`);
            }
        }
        command = params.shift();
    }
}
nikuldenCharity([    'ILikeSharan',    'Replace a e',    'Make Upper',    'Check SHEREN',
    'Sum 1 4',    'Cut 1 4',    'Finish'])
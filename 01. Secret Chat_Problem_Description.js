function secretChat(params) {
    let workStr = params.shift();
    let flag = true;
    let command = params.shift();

    while (command != 'Reveal') {
        command = command.split(':|:');

        if (command[0] == 'InsertSpace') {
            let indexSpace = Number(command[1]);
            workStr = workStr.substring(0, indexSpace) + ' ' + workStr.substring(indexSpace);
        }

        else if (command[0] == 'Reverse') {
            if (workStr.includes(command[1])) {
                workStr = workStr.replace(command[1], '');
                let str = command[1].split('').reverse().join('');
                workStr = workStr + str // add at the end

            } else {
                console.log(`error`);
                flag = false;
            }
        }

        else if (command[0] == 'ChangeAll') {
            while (workStr.includes(command[1])) {
                workStr = workStr.replace(command[1], command[2])
            }

        }
        if (flag == true) {
            console.log(workStr);
        }
        else {
            flag = true
        }
        command = params.shift();
    }
    console.log(`You have a new text message: ${workStr}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
)
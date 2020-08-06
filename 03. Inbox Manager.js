function inboxManagerProgram(params) {
    let userObj = {};
    let command = params.shift();
    while (command != 'Statistics') {
        command = command.split('->')
        if (command[0] == 'Add') {
            let user = command[1];
            if (!userObj.hasOwnProperty(user)) {
                userObj[user] = []
            } else {
                console.log(`${user} is already registered`);
            }
        }
        else if (command[0] == 'Send') {
            let user = command[1];
            let sent = command[2];

            if (userObj.hasOwnProperty(user)) {
                userObj[user].push(sent);
            }
        }
        else if (command[0] == 'Delete') {
            let user = command[1];
            if (userObj.hasOwnProperty(user)) {
                delete userObj[user]
            } else {
                console.log(`${user} not found!`);

            }
        }
        command = params.shift();
    }
    let count = Object.keys(userObj).length
    console.log(`Users count: ${count}`);
    let workArr = Object.entries(userObj);
    let sorted = workArr.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    for (const kvp of sorted) {
        console.log(kvp[0]);
        for (let i = 0; i < kvp[1].length; i++) {
            console.log(` - ${kvp[1][i]}`);
        }
    }
}
inboxManagerProgram(['Add->Mike', 'Add->George',
    'Send->George->Hello World', 'Send->George->Your loan is overdue',
    'Add->Mike', 'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Delete->Peter', "Send->George->I'm busy", 'Send->Mike->Another random test mail',
    'Delete->George', 'Statistics'])
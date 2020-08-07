function battleManagerProgram(params) {
    let battleObj = {};
    let command = params.shift();

    while (command != 'Results') {
        command = command.split(':');

        if (command[0] == 'Add') {
            let person = command[1];
            let health = Number(command[2]);
            let energy = Number(command[3]);

            if (battleObj.hasOwnProperty(person)) {
                battleObj[person].health += health;
            } else {
                battleObj[person] = {
                    health: health,
                    energy: energy
                }
            }
        } else if (command[0] == 'Attack') {
            let attacker = command[1];
            let defender = command[2];
            let damage = Number(command[3]);

            if (battleObj.hasOwnProperty(attacker) && battleObj.hasOwnProperty(defender)) {
                battleObj[defender].health -= damage;
                if (battleObj[defender].health <= 0) {
                    console.log(`${defender} was disqualified!`);
                    
                    delete battleObj[defender]
                }
                battleObj[attacker].energy -= 1;
                if (battleObj[attacker].energy <= 0) {
                    console.log(`${attacker} was disqualified!`);
                    
                    delete battleObj[attacker];
                }
            }
        }else if(command[0]=='Delete'){
            if(command[1]=='All'){
                battleObj={}
            }else{
                delete battleObj[command[1]];  //check
            }
        }
        command = params.shift();
    }
    let workArr= Object.entries(battleObj);
 
    let sorted = workArr.sort((a,b)=> b[1].health - a[1].health || a[0].localeCompare(b[0]));
    console.log(`People count: ${sorted.length}`);
    
    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1].health} - ${kvp[1].energy}`);
        
    }

}
battleManagerProgram([
    'Add:Bonnie:3000:5',
    'Add:Johny:4000:10',
    'Attack:Johny:Bonnie:400',
    'Add:Chicken:1000:1',
    'Add:Rabbit:3000:5',
    'Add:Buggy:1259:10',
    'Attack:Chicken:Rabbit:1000',
    'Results'
  ])
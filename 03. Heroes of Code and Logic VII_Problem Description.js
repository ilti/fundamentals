function heroesGame(params) {
    let n = params.shift();
    n = Number(n);
    let heroesObj = {};
    for (let i = 0; i < n; i++) {
        let command = params.shift().split(' ');
        let hero = command[0]
        let hp = Number(command[1]);
        let mp = Number(command[2]);
        heroesObj[hero] = {
            health: hp,
            mana: mp
        }
    }
    let tokens = params.shift();
    while (tokens != 'End') {
        tokens = tokens.split(' - ');
        if (tokens[0] == 'CastSpell') {
            let name = tokens[1]
            let mpNeeded = Number(tokens[2]);
            let spellName = tokens[3]
            if (heroesObj[name].mana >= mpNeeded) {
                heroesObj[name].mana -= mpNeeded;
                console.log(`${name} has successfully cast ${spellName} and now has ${heroesObj[name].mana} MP!`);

            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }
        }
        else if (tokens[0] == 'TakeDamage') {
            let name = tokens[1];
            let damage = Number(tokens[2]);
            let attacker = tokens[3];
            heroesObj[name].health -= damage
            if (heroesObj[name].health >= 1) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroesObj[name].health} HP left!`);
            }
            else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete heroesObj[name]
            }
        }
        else if (tokens[0] == 'Recharge') {
            let name = tokens[1];
            let amount = Number(tokens[2]);
            if (heroesObj[name].mana + amount > 200) {
                let needed = 200 - heroesObj[name].mana
                heroesObj[name].mana = 200;
                console.log(`${name} recharged for ${needed} MP!`);
            } else {
                heroesObj[name].mana += amount;
                console.log(`${name} recharged for ${amount} MP!`);
            }
        }
        else if (tokens[0] == 'Heal') {
            let name = tokens[1];
            let amount = Number(tokens[2]);

            if (heroesObj[name].health + amount > 100) {
                let needed = 100 - heroesObj[name].health
                heroesObj[name].health = 100
                console.log(`${name} healed for ${needed} HP!`);
            }
            else {
                heroesObj[name].health += amount;
                console.log(`${name} healed for ${amount} HP!`);

            }
        }
        tokens = params.shift();
    }
    let newArr = Object.entries(heroesObj);
    let sorted = newArr.sort((a, b) => {
        if (a[1].health == b[1].health) {
            return a[0].localeCompare(b[0])
        } else {
            return b[1].health - a[1].health
        }
    })
    for (const kvp of newArr) {
        console.log(kvp[0]);
        console.log(`  HP: ${kvp[1].health}`);
        console.log(`  MP: ${kvp[1].mana}`);
    }
}
heroesGame([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])
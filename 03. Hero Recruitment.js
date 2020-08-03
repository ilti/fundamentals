function heroRecrProgr(params) {

    let ObjHeroes = {}

    let command = params.shift();
    while (command != 'End') {
        command = command.split(' ');
        if (command[0] == 'Enroll') {
            let name = command[1];

            if (ObjHeroes.hasOwnProperty(name)) {
                console.log(`${name} is already enrolled.`);

            } else {
                ObjHeroes[name] = [];
            }
        }
        else if (command[0] == 'Learn') {
            let name = command[1];
            let spell = command[2];

            if (ObjHeroes.hasOwnProperty(name)) {
                let test = ObjHeroes.name;
                let test1 = ObjHeroes[name];
                let test2 = ''
                if (ObjHeroes[name].includes(spell)) {

                    console.log(`${name} has already learnt ${spell}.`);

                } else {
                    ObjHeroes[name].push(spell);
                }
            } else {
                console.log(`${name} doesn't exist.`);

            }
        }
        else if (command[0] == 'Unlearn') {
            let name = command[1];
            let spell = command[2];

            if (ObjHeroes.hasOwnProperty(name)) {
                if (ObjHeroes[name].includes(spell)) {
                    let index = ObjHeroes[name].indexOf(spell);
                    ObjHeroes[name].splice(index, 1);
                }else{
                    console.log(`${name} doesn't know ${spell}.`);
                    
                }
            } else {
                console.log(`${name} doesn't exist.`);

            }
        }



        command = params.shift();
    }

    let workArr = Object.entries(ObjHeroes);

    let sorted= workArr.sort((a,b)=>(b[1].length- a[1].length)||(a[0].localeCompare(b[0])) )
    console.log(`Heroes:`);
    
    for (const kvp of sorted) {
        console.log(`== ${kvp[0]}: ${kvp[1].join(', ')}`);
        
    }
    
    

}
heroRecrProgr([
    'Enroll Stefan',
    'Enroll Pesho',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stamat ItShouldNotWork',
    'Unlearn Gosho Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
])
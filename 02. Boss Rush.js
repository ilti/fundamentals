function bossRush(params) {
    let n = params.shift();
    n=Number(n);
    for (let 	i = 0; 	i <=n-1; 	i++) {
        let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/g
        let match = pattern.exec(params[i]);

        if(match){
            console.log(`${match.groups.name}, The ${match.groups.title}`);
            console.log(`>> Strength: ${(match.groups.name).length}`);
            console.log(`>> Armour: ${(match.groups.title).length}`);
            
        }else{
            console.log(`Access denied!`);
            
        }
        
        
    }
}

bossRush([
    '3',
    '|PETER|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'
  ]
  )
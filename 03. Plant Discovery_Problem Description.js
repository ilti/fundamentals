function plantDiscovery(params) {
    function checkTotalRating(arr) {
        let n = arr.length
        let total = 0
        for (let i = 0; i < n; i++) {
            let current = arr[i]
            total += current
        }
        total = total / n
        if(n==0){
            return 0
        }else return total
    }
    let n = Number(params.shift());
    let plantObj = {};
    for (let i = 0; i < n; i++) {
        let current = params.shift();
        current = current.split('<->')
        if (plantObj.hasOwnProperty(current[0])) {
            plantObj[current[0]] = {
                rarity: Number(current[1]),
                rating: []
            }
        } else {
            plantObj[current[0]] = {

                rarity: Number(current[1]),
                rating: []
            }
        }
    }
    let command = params.shift();
    while (command != 'Exhibition') {
        subCommand = command.split(':')
        if (subCommand[0] == 'Rate') {
            let specs = subCommand[1].trimStart();
            specs = specs.split(' - ');
            let type = specs[0];
            let rating = Number(specs[1])
            if (plantObj.hasOwnProperty(type)) {
                plantObj[type].rating.push(rating)
            }else{
                console.log(`error`);
                
            }
        }
        else if (subCommand[0] == 'Update') {
            let specs = subCommand[1].trimStart();
            specs = specs.split(' - ');
            let type = specs[0];
            let rarity = Number(specs[1]);

            if (plantObj.hasOwnProperty(type)) {
                plantObj[type].rarity = rarity;
            }else{
                console.log(`error`);
                
            }
        } else if (subCommand[0] == 'Reset') {
            let specs = subCommand[1].trimStart();

            if (plantObj.hasOwnProperty(specs)) {
                plantObj[specs].rating = []
            }else{
                console.log(`error`);
                
            }
        }else{
            console.log(`error`);
            
        }

        command = params.shift()
    }
    let workArr = Object.entries(plantObj);
   // let sorted = workArr.sort((a, b) => b[1].rarity - a[1].rarity ||checkTotalRating(b[1].rating - checkTotalRating(a[1].rating))) - neeeee!!!! 
   let sorted = workArr.sort((a, b) => {
    if (b[1].rarity === a[1].rarity) {
        let plantA = a[1].rating
        let plantB = b[1].rating
        let avA = checkTotalRating(plantA)
        let avB = checkTotalRating(plantB)
      return avB - avA;
    }
    return b[1].rarity - a[1].rarity;
  });
    console.log(`Plants for the exhibition:`);
    for (const kvp of sorted) {
        console.log(`- ${kvp[0]}; Rarity: ${kvp[1].rarity}; Rating: ${(checkTotalRating(kvp[1].rating)).toFixed(2)}`);
        
    };
}
plantDiscovery([    '2',    'Candelabra<->10',    'Oahu<->10',
    'Rate: Oahu - 7',    'Rate: Candelabra - 6',    'Exhibition'  ])
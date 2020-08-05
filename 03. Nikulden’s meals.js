function nikudensMealsProgram(params) {
    let command = params.shift();
    let mealsObj = {};
    let removed = 0;
    while(command!='Stop'){
        command=command.split('-');
        if(command[0]=='Like'){
            let name = command[1];
            let meal= command[2];
            if(mealsObj.hasOwnProperty(name)){ 
                if(mealsObj[name].includes(meal)){

                }else{
                    mealsObj[name].push(meal);
                }               
            }else{
                mealsObj[name]=[];
                mealsObj[name].push(meal);
            }
        }else if(command[0]=='Unlike'){
            let name = command[1];
            let meal = command[2];
            if(mealsObj.hasOwnProperty(name)){
                if(mealsObj[name].includes(meal)){
                    let index = mealsObj[name].indexOf(meal);
                    mealsObj[name].splice(index,1);
                    console.log(`${name} doesn't like the ${meal}.`);
                    removed++ 
                }else{
                    console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                }
            }else{
                console.log(`${name} is not at the party.`);              
            }
        }
        command=params.shift();
    }
    let workArr = Object.entries(mealsObj);
    let sorted = workArr.sort((a,b)=>b[1].length - a[1].length ||a[0].localeCompare(b[0]))
    for (const kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    }
    console.log(`Unliked meals: ${removed}`);
}
nikudensMealsProgram([    'Like-Krisi-shrimps',    'Like-Krisi-kebapce',
    'Like-Krisi-banica',    'Like-Krisi-soup',    'Like-Krisi-soup',
    'Unlike-Krisi-soup',    'Like-Misho-salad',    'Like-Pena-dessert',
    'Like-Pena-kebapce',    'Like-Pena-banana',    'Stop'  ])
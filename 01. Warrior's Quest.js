function wariorsQuest(params) {
    let skillStr = params.shift();
    let command = params.shift();
    while(command!='For Azeroth'){
        command=command.split(' ');
        if(command[0]=='GladiatorStance'){
            skillStr=skillStr.toUpperCase();
            console.log(skillStr);
        }
        else if(command[0]=='DefensiveStance'){
            skillStr=skillStr.toLowerCase();
            console.log(skillStr);
        }
        else if(command[0]=='Dispel'){
            let index = Number(command[1]);
            let letter = command[2];
            let test = skillStr.length;
            if(index>=0 && index<skillStr.length){
                skillStr=skillStr.replace(skillStr[index],letter);

              
               console.log(`Success!`);
               
            }else{
                console.log(`Dispel too weak.`);
                
            }
        }

        else if(command[0]=='Target'){
            if(command[1]=='Change'){
                let toBeReplaced = command[2];
                let replacement = command[3];
    
                if(skillStr.includes(toBeReplaced)){
                    while(skillStr.includes(toBeReplaced)){   ///// check
                        skillStr=skillStr.replace(toBeReplaced,replacement)
                    }
                    console.log(skillStr);
                    
                }
            }
            else if(command[1]=='Remove'){
                let toBeRemoved = command[2];

                if(skillStr.includes(toBeRemoved)){
                    while(skillStr.includes(toBeRemoved)){
                        skillStr=skillStr.replace(toBeRemoved,'');
                    }
                }
                console.log(skillStr);
                
            }
            else{
                console.log(`Command doesn't exist!`);
            }
           
        }
        else{
            console.log(`Command doesn't exist!`);
            
        }

        command=params.shift();
    }

    console.log();
    

}

wariorsQuest([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance',
    'Target Change d D',
    'target change D d',
    'For Azeroth'
  ])
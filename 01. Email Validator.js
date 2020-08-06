function emailValidator(params) {
    let workStr= params.shift();
    let command = params.shift();
    while(command!='Complete'){
        command=command.split(' ');
        if(command[0]=='Make'){
            if(command[1]=='Upper'){
                workStr=workStr.toUpperCase();
            }
            else if(command[1]=='Lower'){
                workStr=workStr.toLowerCase();
            }
            console.log(workStr);   // check
        }        else if(command[0]=='GetDomain'){
            let n = Number(command[1]);
            let sub = workStr.substring(workStr.length-n)  // check
            console.log(sub);
        }        else if(command[0]=='GetUsername'){
            if(workStr.includes('@')){
                let index = workStr.indexOf('@');
                let sub = workStr.substring(0,index);
                console.log(sub);
                
            }else{
                console.log(`The email ${workStr} doesn't contain the @ symbol.`);
            }
        }        else if(command[0]== 'Replace'){
            let char = command[1];
            if(workStr.includes(char)){
                while(workStr.includes(char)){
                    workStr=workStr.replace(char,'-')
                }
            }
            console.log(workStr);   // check where to be printed
        }        else if(command[0]=='Encrypt'){
            let emptyArr = [];
            let arr = workStr.split('');
            for (let i = 0; i < arr.length; i++) {
                let current = workStr[i].charCodeAt();
                emptyArr.push(current)
            }
            console.log(emptyArr.join(' '));
        }
        command=params.shift();
    }
}
emailValidator([    'Mike123@somemail.com',    'Make Upper',    'GetDomain 3',
    'GetUsername',    'Encrypt',    'Complete'  ])
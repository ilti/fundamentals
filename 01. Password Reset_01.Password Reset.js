function passwordResetProgram(params) {
    let workStr = params.shift();
    let commnad = params.shift();
    let flag = true;

    while(commnad!='Done'){
        commnad=commnad.split(' ');

        if(commnad[0]=='TakeOdd'){
            let emptyArr = [];
            for (let i = 0; i < workStr.length; i++) {
                if(i%2!=0){
                    emptyArr.push(workStr[i])
                }            
            }
            workStr=emptyArr.join('')
        }
        else if(commnad[0]=='Cut'){    
            let substr = workStr.substr(commnad[1],commnad[2]);
            workStr=workStr.replace(substr,'');
        }
        else if(commnad[0]=='Substitute'){
            if(workStr.includes(commnad[1])){
                
                while(workStr.includes(commnad[1])){
                    workStr=workStr.replace(commnad[1], commnad[2]);
                }
            }
            else{
                console.log(`Nothing to replace!`);
                flag=false;
            }
        }
        if(flag){
            console.log(workStr);
        }
        flag=true
        commnad = params.shift();
    }
    console.log(`Your password is: ${workStr}`);    
}
passwordResetProgram([    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',    
'TakeOdd',    'Cut 18 2',    'Substitute ! ***',    'Substitute ? .!.',
    'Done'
  ])
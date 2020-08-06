function registrationProgram(params) {
   let n = params.shift();
   let counter = 0

   for (let i = 0; i <n; i++) {
       let currentReg = params[i];
       let pattern = /U\$(?<userName>[A-Z][a-z]{2,})U\$P@\$(?<pass>[A-Za-z]{5,}[0-9]+)P@\$/g
       let match = pattern.exec(currentReg)

       if(match){
           let userN = match.groups.userName;
           let passW = match.groups.pass;
        console.log(`Registration was successful`);
        console.log(`Username: ${userN}, Password: ${passW}`);
        counter++
       }
       else{
           console.log(`Invalid username or password`);
       }
   }
   
   console.log(`Successful registrations: ${counter}`);
}
registrationProgram([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
  ])
function messageEncr(params) {
   let n =params.shift();

   for (let i = 0; i < n; i++) {
       let pattern = /([*@]{1})(?<tag>[A-Z]{1}[a-z]{2,})\1: \[(?<f>[A-Za-z])\]\|\[(?<s>[A-Za-z])\]\|\[(?<t>[A-Za-z])\]\|$/g
       let match = pattern.exec(params[i])
       if(match){
           console.log(`${match.groups.tag}: ${(match.groups.f).charCodeAt()} ${(match.groups.s).charCodeAt()} ${(match.groups.t).charCodeAt()}`);
           
       }
       else{
           console.log(`Valid message not found!`);
           
       }
   }
}
messageEncr([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
  ])
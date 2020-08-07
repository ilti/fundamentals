function passwordProgram(params) {
    let n = params.shift();

    for (let i = 0; i < n; i++) {
        let pattern =/(?<start>.+)\>(?<nums>[0-9]{3})\|(?<lower>[a-z]{3})\|(?<upper>[A-Z]{3})\|(?<symbols>[^\<\>]{3})\<\1/gm

        let match = pattern.exec(params[i])

        if(match){
            let nums = match.groups.nums;
            let lower = match.groups.lower;
            let upper = match.groups.upper;
            let symbols=match.groups.symbols;

            let full = nums+lower+upper+symbols
            console.log(`Password: ${full}`);
            
        }else{
            console.log(`Try another password!`);
        }   
    }
}
passwordProgram([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
  ]
  )
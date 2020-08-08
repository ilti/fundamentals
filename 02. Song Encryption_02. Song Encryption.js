function songEncryptionProg(params) {
    let command = params.shift();
    while(command!='end'){
        let pattern = /^(?<artist>[A-Z][a-z\s']*):(?<song>[A-Z\s]*$)/g

        let match = pattern.exec(command)

        if(match){
            
            let artist = match.groups.artist;
            let key = artist.length
            let artistArr=[];
            for (let i = 0; i < artist.length; i++) {
                let current = artist[i].charCodeAt()+key;
                let check = artist[i].charCodeAt()
                if(check>=65 && check<=90){
                    if(current>90){
                        current=current-26
                    }
                    artistArr.push(String.fromCharCode(current))
                }else if(check>=97 && check<=122){
                    if(current>122){
                        current=current-26
                    }
                    artistArr.push(String.fromCharCode(current))
                }else{
                    artistArr.push(String.fromCharCode(check))
                }
                
                
            }

            artist=artistArr.join('')

            let song = match.groups.song;
            let songArr=[];
            for (let i = 0; i < song.length; i++) {
                let current = song[i].charCodeAt()+key;
                
                let check = song[i].charCodeAt()
                if(check>=65 && check<=90){
                    if(current>90){
                        current=current-26
                    }
                    songArr.push(String.fromCharCode(current))
                }else if(check>=97 && check<=122){
                    if(current>122){
                        current=current-26
                    }
                    songArr.push(String.fromCharCode(current))
                }else{
                    songArr.push(String.fromCharCode(check))
                }
            }
            song=songArr.join('')
            let toBeEncr = artist+'@'+song;
            console.log(`Successful encryption: ${toBeEncr}`);
        }else{
            console.log(`Invalid input!`);
        
        }
        
        command=params.shift();
    }
}

songEncryptionProg([
    'Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end'
  ])
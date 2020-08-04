function messageTranslator(params) {
    let n = params.shift();
    for (let i = 0; i < n; i++) {

        let token = params.shift();
        let pattern = /!(?<command>[A-Z]{1}[a-z]{2,})!:\[(?<text>[A-Za-z]{8,})\]/g
        let match = pattern.exec(token)

        if (match) {

            let foundCommand = match.groups.command;
            let foundText = match.groups.text;
            let emptyArr = []
            let foundTextArr = foundText.split('');
            for (let f = 0; f < foundText.length; f++) {
                let current = foundText[f].charCodeAt()
                emptyArr.push(current);

            }
            console.log(`${foundCommand}: ${emptyArr.join(' ')}`);

        } else {
            console.log(`The message is invalid`);

        }
    }
}
messageTranslator(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]'])
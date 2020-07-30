function mirrorWordsProgram(params) {
    let text = params.shift()
    let pattern = /([@#]){1}(?<first>[A-Za-z]{3,})\1{2}(?<second>[A-Za-z]{3,})\1/g
    let valid = 0
    let workArr = [];

    let match = pattern.exec(text)
    while (match) {

        let firstWord = match.groups.first;
        let secondWord = match.groups.second;
        let reverse = firstWord.split('').reverse().join('');
        valid++;
        if (reverse === secondWord) {
            let str = `${firstWord} <=> ${secondWord}`
            workArr.push(str)
        }
        match = pattern.exec(text)
    }

    if (valid > 0) {
        console.log(`${valid} word pairs found!`);

    } else {
        console.log("No word pairs found!");
    }
    if (workArr.length > 0) {
        console.log("The mirror words are:");
        console.log(workArr.join(', '));
    }
    else {
        console.log(`No mirror words!`);
    }
}
mirrorWordsProgram([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)
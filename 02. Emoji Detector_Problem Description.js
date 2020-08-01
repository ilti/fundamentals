function emojiDetectroProgram(params) {
    let patternEmoji = /(?<emoji>([:]{2}|[*]{2})[A-Z][a-z]{2,}\2)/g;
    let patternNums = /\d/g;
    let coolTreshhold = 1;
    let text = params.shift();
    let counter = 0;
    let emptyArr = [];
    let nums = text.match(patternNums).map(Number)
    for (let i = 0; i < nums.length; i++) {
        coolTreshhold = coolTreshhold * nums[i];
    }
    console.log(`Cool threshold: ${coolTreshhold}`);
    let emojis = patternEmoji.exec(text);
    while (emojis) {
        let current = emojis.groups.emoji;
        counter++   
        emojis = patternEmoji.exec(text);
        let currentEmojiPrint = current;
        current = current.split('');
        let currentCoolness = 0
        for (let i = 0; i < current.length; i++) {
            if ((current[i].charCodeAt() >= 65 && current[i].charCodeAt() <= 90) || (current[i].charCodeAt() >= 97 && current[i].charCodeAt() <= 122)) {
                currentCoolness += current[i].charCodeAt();
            }
        }
        if(currentCoolness>=coolTreshhold){
            emptyArr.push(currentEmojiPrint);  
        }
    }
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    for (let g = 0; g < emptyArr.length; g++) {
        console.log(`${emptyArr[g]}`);
    }
}
emojiDetectroProgram([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
  ])
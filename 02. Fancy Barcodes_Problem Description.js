function fancyBarcodesProgram(params) {
    let number = params.shift()
    number = Number(number)
    for (let i = 0; i < number; i++) {
        let pattern = /(@[#]{1,})(?<code>[A-Z]([A-Za-z\d]{4,})[A-Z])\1/g;
        let match = pattern.exec(params[i])
        if (match) {
            let product = match.groups.code
            let workArr = product.split('');
            let emptyArr = []
            for (let i = 0; i < workArr.length; i++) {
                let test = workArr[i].charCodeAt()
                if (workArr[i].charCodeAt() >= 48 && workArr[i].charCodeAt() <= 57) {
                    emptyArr.push(workArr[i])
                }
            }
            if (emptyArr.length > 0) {
                console.log(`Product group: ${emptyArr.join('')}`);
            } else {
                console.log(`Product group: 00`);
            }
        }
        else {
            console.log(`Invalid barcode`);
        }
    }
}
fancyBarcodesProgram([
    '6',
    '@###Val1d1$%teM@###',
    '@#####ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
])
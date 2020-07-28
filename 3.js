function softUniBar(params) {
    
    
    let total = 0

    for (let command of params){
        let check = /%(?<name>[A-Z][a-z]+)\%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.]*?(?<price>\d+([.]\d+)?)\$/g.exec(command)

        if(check){
            let current = Number(check.groups.quantity) * Number(check.groups.price)
            console.log(`${check.groups.name}: ${check.groups.product} - ${current.toFixed(2)}`);
            total=total+current
            
        }

    }
    console.log(`Total income: ${total.toFixed(2)}`);


}
softUniBar([
    '%Peter%<Gum>|1|1.3$',
    '%George%<Croissant>|2|10.3$',
    
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])
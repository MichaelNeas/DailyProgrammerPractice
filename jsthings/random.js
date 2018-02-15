//nothing to see heres
let fs = require('fs');

let out = fs.readFileSync('random.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split("    "))
    .reduce((cart, purchase) => {
        cart[purchase[0]] = cart[purchase[0]] || [];
        cart[purchase[0]].push({
            quantity: purchase[1],
            item: purchase[2],
            cost: purchase[3]
        })
        return cart;
    },{});

console.log(out)

//Random way to check for bad words!
let res = str.replace(/\W/g, ' ').split(' ').filter(val => !!~censoredList.indexOf(val));

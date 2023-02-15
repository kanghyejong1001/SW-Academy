// [하] [스택] 올바른 괄호 쌍

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line;
}).on('close', function () {
    const str = [...input]
    let stack = [] 
    let result = true
    str.map(item => {
        item == '(' ?
            stack.push(item) :
            stack.length == 0 ? result = false : stack.pop()
    })
    
    console.log((stack.length == 0 && result) ? 'YES' : 'NO')
});
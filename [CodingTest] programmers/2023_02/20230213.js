// [하] [스택] 스택

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' '));
}).on('close', function () {
    input.shift()
    let result = []
    input.map( stack => {
        if (stack[0] == 'push') {
            result.push(stack[1])
        } else {
            console.log(result.length == 0 ? -1 : result.pop())
        }
    })
    
});
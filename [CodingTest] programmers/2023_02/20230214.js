// [하] [큐] 큐

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
    let startPoint = 0
    let endPoint = -1
    
    input.map( queue => {
        if (queue[0] == 'push') {
            result.push(queue[1])
            endPoint++
        } else {
            console.log( startPoint > endPoint ? -1 : result[startPoint++])
        }
    })
    
});
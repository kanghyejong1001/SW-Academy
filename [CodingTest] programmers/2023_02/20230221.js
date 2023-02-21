// [하] [그래프] 인접 리스트

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(item => Number(item)))
}).on('close', function () {
    const list = Array.from(Array(input.shift()[0] + 1), () => [])
    
    input.map(item => {
        list[item[0]].push(item[1])
        list[item[1]].push(item[0])
    })
    
    list.shift()
    list.map(item => {
        if(item.length > 0) {
            console.log(...item.sort((a, b) => a - b))
        } else {
            console.log(-1)
        }
    })
});
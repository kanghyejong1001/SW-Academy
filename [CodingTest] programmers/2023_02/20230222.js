// [중] [그래프] 단순 그래프

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(item => Number(item) - 1))
}).on('close', function () {
    const n = input.shift()[0] + 1
    let graph = Array.from(Array(n), () => new Array(n).fill(0))    
    let result = true
    
    input.map(item => {
        if(graph[item[0]][item[1]] || graph[item[1]][item[0]] || item[0] == item[1]){
            result = false
        } else {
            graph[item[0]][item[1]] = 1
        }
    })
    
    console.log(result ? 'YES' : 'NO');
});
// [하] [그래프] 인접 행렬

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(item => Number(item)))
}).on('close', function () {
    const n = input.shift()[0]
    
    let graph = Array.from(Array(n), () => Array(n).fill(0))
    
    input.map(item => {
        const x = item[0] - 1
        const y = item[1] - 1
        graph[x][y] = 1
        graph[y][x] = 1
    })
    
    graph.map(item => console.log(...item)) 
});
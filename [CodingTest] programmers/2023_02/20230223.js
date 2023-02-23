// [중] [그래프] 정점의 차수

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(item => Number(item)))
}).on('close', function () {
    const n = input.shift()[0] + 1
    let graph = Array.from(Array(n), () => [])
    
    input.map(item => {
        graph[item[0]].push(item[1])
        graph[item[1]].push(item[0])
    })
    
    console.log(graph.reduce((a, b) => a + b.length, 0))
});
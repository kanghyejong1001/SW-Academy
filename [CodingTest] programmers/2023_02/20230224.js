// [상] [그래프] 경로

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
    let arr = Array.from(Array(n), () => [])
    const route = input.pop()
    const route_length = input.pop()[0]
    
    input.map(item => {
        arr[item[0]].push(item[1])
        arr[item[1]].push(item[0])
    })
    
    let result = true
    for(let i = 1; i < route_length; i++){
        if (!arr[route[i - 1]].includes(route[i])) {
            result = false 
        }
    }
    
    console.log(result ? 'YES' : 'NO')
});
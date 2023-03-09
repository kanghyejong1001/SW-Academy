// [중] [그래프] 격자 거리

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' '))
}).on('close', function () {
    const row_num = Number(input[0][0])
    const col_num = Number(input.shift()[1])
    input = input.map(item => item[0])
    
    visit = Array.from(Array(row_num), () => new Array(col_num).fill(false))
    queue = [[0, 0, 0]]
    result = Array.from(Array(row_num), () => new Array(col_num).fill(-1))
    
    while (queue.length > 0) {
        const x = queue[0][0]
        const y = queue[0][1]
        let distance = queue.shift()[2] 
        
        if (x < 0 || x >= row_num || y < 0 || y >= col_num) { continue }
        if (visit[x][y] || input[x][y] === '#') { continue }
        
        visit[x][y] = true
        result[x][y] = distance++
        
        queue.push([x - 1, y, distance])
        queue.push([x + 1, y, distance])
        queue.push([x, y - 1, distance])
        queue.push([x, y + 1, distance])
    }
    
    result.map(item => console.log(...item))
});
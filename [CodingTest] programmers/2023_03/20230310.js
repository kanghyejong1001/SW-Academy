// [상] [그래프] 색 채우기

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
    const start_row = Number(input[0][0]) - 1
    const start_col = Number(input.shift()[1]) - 1
    input = input.map(item => item[0])
    
    queue = [[start_row, start_col]]
    result = [...input].map(item => [...item])
    
    while (queue.length > 0) {
        const x = queue[0][0]
        const y = queue.shift()[1]
        
        if (x < 0 || x >= row_num || y < 0 || y >= col_num) { continue }
        if (result[x][y] === '#' || result[x][y] === '@'){ continue }
        
        result[x][y] = '@'
        
        queue.push([x - 1, y])
        queue.push([x + 1, y])
        queue.push([x, y - 1])
        queue.push([x, y + 1])
    }
    
    result.map(item => console.log(item.join('')))
});
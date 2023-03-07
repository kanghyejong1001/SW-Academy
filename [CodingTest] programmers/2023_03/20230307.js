// [중] [그래프] 격자 탈출

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

    let visit = Array.from(Array(row_num), () => new Array(col_num).fill(0))
    let queue = [[0, 0]]
    let result = false
    while (queue.length > 0) {
        const x = queue[0][0]
        const y = queue.shift()[1]

        if (x < 0 || x >= row_num || y < 0 || y >= col_num) { continue }
        if (input[x][y] === '#' || visit[x][y] === 3) { continue }
        
        visit[x][y] += 1
        if (x === row_num - 1 && y === col_num - 1) {
            result = true
            break
        }
        queue.push([x - 1, y])
        queue.push([x + 1, y])
        queue.push([x, y - 1])
        queue.push([x, y + 1])
    }
    
    console.log(result ? 'YES' : 'NO')
});
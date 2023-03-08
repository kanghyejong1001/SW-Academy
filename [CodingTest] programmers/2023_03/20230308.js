// [중] [그래프] 격자 연결 요소

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
    let queue = []
    let result = 0
    
    for (let i = 0; i < row_num; i++) {
        for (let j = 0; j < col_num; j++) {
            if (visit[i][j] !== 0 || input[i][j] !== "#") {
                continue
            }
            queue.push([i, j])
            result++
            while (queue.length > 0) {
                const x = queue[0][0]
                const y = queue.shift()[1]

                if (x < 0 || x >= row_num || y < 0 || y >= col_num) { continue }
                if (visit[x][y] === 3 || input[x][y] === ".") { 
                    visit[x][y] = 3
                    continue 
                }

                visit[x][y] += 1
                
                queue.push([x - 1, y])
                queue.push([x + 1, y])
                queue.push([x, y - 1])
                queue.push([x, y + 1])
            }
        }
    }
    
    console.log(result)
});
// [중] [그래프] 격자 그래프

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' '))
}).on('close', function () {
    const row_num = input[0][0]
    const col_num = input.shift()[1]
    let result = 0
    input.map((row, i) => {
        row.map(item => {
            [...item].map((col, j) => {
                if (col === ".") {
                    if (i > 0) {
                        result += (input[i - 1][0][j] === '.' ? 1 : 0)
                    } 
                    if (i < row_num - 1) {   
                        result += (input[i + 1][0][j] === '.' ? 1 : 0)
                    } 
                    if (j > 0) {
                        result += (input[i][0][j - 1] === '.' ? 1 : 0)
                    } 
                    if (j < col_num - 1) {
                        result += (input[i][0][j + 1] === '.' ? 1 : 0)
                    }
                }
            })
        })
    })
    
    console.log((row_num * col_num) + ' ' + (result / 2));
});
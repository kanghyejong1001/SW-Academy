// [하] [이분 탐색] 이분 탐색

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(item => Number(item)))
}).on('close', function () {
    let low = -1
    let high = input[0][0]
    const x = input.shift()[1]
    const arr = input.shift()
    
    while (low + 1 < high) {
        console.log(low + ' ' + high)
        const mid = Math.floor((low + high) / 2)
        if (arr[mid] < x) {
            low = mid
        } else {
            high = mid
        }
    }
    console.log(high)
});
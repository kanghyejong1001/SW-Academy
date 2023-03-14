// [중] [이분 탐색] 등차수열의 합

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;

rl.on('line', function (line) {
    input = Number(line)
}).on('close', function () {
    let low = -1
    let high = input
    const x = input
    const func = (x) => x * (x + 1) / 2
    
    while (low + 1 < high) {
        const mid = Math.floor((low + high) / 2)
        if (func(mid) < x) { low = mid } 
        else { high = mid }
    }
    console.log(high)
});
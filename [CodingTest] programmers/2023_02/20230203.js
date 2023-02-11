// [하] 평탄화 작업

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map((item) => parseInt(item));
}).on('close', function () {
    console.log(
        input.map((item, index, arr) => item - Math.min(...arr))
        .reduce((a, b) => a + b, 0)
    )
});
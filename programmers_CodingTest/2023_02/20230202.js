// [하] 레이저 포인터

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map((item) => parseInt(item));
}).on('close', function () {
    console.log((input[0] == input[2] || input[1] == input[3]) ? 0 : 1);
});
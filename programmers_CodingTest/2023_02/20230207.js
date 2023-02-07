// [하] [누적 합] 누적 합

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(item => Number(item)));
}).on('close', function () {
    let result = [];
    input[1].reduce((accumulator, currentValue) => {
        result.push(accumulator + currentValue)
        return accumulator + currentValue;
    }, 0);
    
    console.log(...result);
});
// [B1] 320개

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let n = Number(input[0]);
    let bab = input[1].split(' ').map((item) => parseInt(item));
    
    // [index, 밥알 개수] 
    console.log(
        bab
            .map((item, index) => {
                return [Math.abs(item - 320), index + 1];
            }).sort((a, b) => a[0] - b[0])[0][1]
    );
            
    process.exit();
});
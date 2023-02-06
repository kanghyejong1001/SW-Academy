// [하] [누적 합] 구간 합

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' '));
}).on('close', function () {
    input.shift();
    // 배열을 number type으로 변경
    const arr = input.shift().map((item) => Number(item));
    
    input
        // index number type으로 변경
        .map((item) => [Number(item[0]), Number(item[1])])
        .map((item) => {
        if(item[0] == item[1]){
            console.log(arr[item[0] - 1]);
        }else{
            console.log(
                arr
                    // 입력의 인덱스만큼 누적
                    .filter((temp, index) => 
                        item[0] - 1 <= index && index < item[1])
                    .reduce((accumulator, currentValue) => 
                        accumulator + currentValue, 0));
        }
    });
});
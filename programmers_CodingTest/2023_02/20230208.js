// [중] [누적 합] 최대 구간 합

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(item => Number(item)));
}).on('close', function () {
    const n = input[0][0];
    const arr = input[1];
    
    // 누적합 저장할 2차원 배열
    let acc = 
        Array.from(Array(n), () => 
            Array(n).fill(Number.MIN_SAFE_INTEGER));
    
    // 배열 한 번 순회
    arr.map((row, i) => {
        // i값이 커질 때마다 그보다 큰 인덱스 부분만 filter
        arr.filter((col, j) => i <= j )
            // 순회하면서 누적한 값을 저장
            .reduce((accumulator, currentValue, currentIndex) => {
                acc[i][i + currentIndex] = accumulator + currentValue
                return acc[i][i + currentIndex];
            }, 0);
    });
    
    // acc.map(item => console.log(item));
    console.log( Math.max( ...acc.map( item => Math.max( ...item ) ) ) );
});
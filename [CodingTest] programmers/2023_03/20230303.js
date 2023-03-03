// [상] [그래프] 거리

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(item => Number(item)))
}).on('close', function () {
    const n = input.shift()[0] + 1
    let arr = Array.from(Array(n), () => [])
    
    // 그래프 그리기
    input.map(item => {
        arr[item[0]].push(item[1])
        arr[item[1]].push(item[0])
    })
    
    // 오름차순을 위한 정렬
    arr.map(item => item.sort((a, b) => a - b))
    
    let result = new Array(n)
    ;[result[0], result[1]] = [0, 0]
    
    let visit = new Array(n).fill(false)
    ;[visit[0], visit[1]] = [true, true]
    
    let queue = [ ]
    queue.push(1)

    while(queue.length > 0) {
        const current = queue.shift()
        arr[current].map(item => {
            if(!visit[item]) {
                queue.push(item)
                visit[item] = true
                result[item] = result[current] + 1
            }
        })
    }
    
    result.shift()
    console.log(...result)
});
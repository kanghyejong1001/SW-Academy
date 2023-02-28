// [중] [그래프] BFS

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
    
    let visit = new Array(n).fill(false)
    let result = [ 1 ]
    let queue = [ 1 ]
    ;[visit[0], visit[1]] = [true, true]
    
    // 모든 정점에 방문할 때까지 반복
    while(queue.length > 0) {
        const current = queue[0]

        // 모든 곳을 방문한 경우 체크
        let check = true
        arr[current].map(item => {
            if(!visit[item]) {
                queue.push(item)
                visit[item] = true
                result.push(item)
                check = false
            }
        })
        
        // 모든 정점에 방문했던 경우 스택에서 현재 정점 제거
        if (check) {
            queue.shift()
        }
    }

    console.log(...result)
});
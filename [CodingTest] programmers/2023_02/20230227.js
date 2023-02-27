// [중] [그래프] DFS

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
    let result = []
    let stack = [ 1 ]
    visit[0] = true
    
    // 모든 정점에 방문할 때까지 반복
    while(visit.includes(false)) {
        const current = stack[stack.length - 1]
        
        // 처음 방문하는 경우
        // 방문 처리하고 결과값에 추가
        if (!visit[current]) {
            visit[current] = true
            result.push(current)
            continue
        }
        
        // 처음 방문이 아닌 경우
        // 방문하지 않은 처음 정점을 스택에 넣고 종료
        let check = true
        arr[current].map(item => {
            if(!visit[item] && check) {
                stack.push(item)
                check = false
            }
        })
        
        // 모든 정점에 방문했던 경우 스택에서 현재 정점 제거
        if (check) {
            stack.pop()
        }
    }

    console.log(...result)
});
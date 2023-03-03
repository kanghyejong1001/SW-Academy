// [상] 연결 요소

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
    let result = 0
    let queue = [ ]
    visit[0] = true
    
    for(let i of Array.from(Array(n - 1), (_, i) => i + 1)) {
        if (!visit[i]) {
            visit[i] = true
            
            // 배열이 비어있는 경우 혼자만 있는 노드를 제외하고 큐에 넣기
            if(typeof arr[i] !== 'undefined') {
                queue.push(i)
            }
            result += 1

                // 모든 곳을 방문한 경우 체크
            while(queue.length > 0) {
                const current = queue.shift()
                arr[current].map(item => {
                    if(!visit[item]) {
                        queue.push(item)
                        visit[item] = true
                    }
                })
            }
        }
    }
    console.log(result)
});
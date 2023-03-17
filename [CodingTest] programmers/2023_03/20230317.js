// [중] [우선순위 큐] 홀수 만들기 놀이

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(item => Number(item)))
}).on('close', function () {
    input.shift()
    let queue = input.shift().sort((a, b) => a - b)
//     let queue = []
//     let temp = input.shift()
//     while (temp.length > 0) {
//         let high = queue.length
//         let low = -1
        
//         while (low + 1 < high) {
//             const mid = Math.floor((low + high) / 2)
//             if (queue[mid] < temp[0]) { low = mid } 
//             else { high = mid }
//         }
//         queue.splice(high, 0, temp[0])
//         temp.shift()
//     }
    
    while (queue.length >= 2) {
        const item = queue.shift() + queue.shift()
        if (item % 2 === 0) { continue }
//         let high = queue.length
//         let low = -1

//         while (low + 1 < high) {
//             const mid = Math.floor((low + high) / 2)
//             if (queue[mid] < item) { low = mid } 
//             else { high = mid }
//         }
//         queue.splice(high, 0, item)
        queue.push(item)
        queue.sort((a, b) => a - b)
    }
    console.log(queue.length === 0 ? -1 : queue[0])
});
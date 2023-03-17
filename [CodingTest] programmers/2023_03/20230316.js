// [하] [우선순위 큐] 우선순위 큐

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' '))
}).on('close', function () {
    input.shift()
    let queue = []
    
    while (input.length > 0) {
        const operation = input[0][0]
        if (operation === 'pop') {
            if(queue.length === 0) { console.log(-1) }
            else { console.log(queue.shift()) }
        } else {
            let high = queue.length
            let low = -1
            const item = Number(input[0][1])

            while (low + 1 < high) {
                const mid = Math.floor((low + high) / 2)
                if (queue[mid] < item) { low = mid } 
                else { high = mid }
            }
            
            queue.splice(high, 0, item)
        }
        input.shift() 
    }
});
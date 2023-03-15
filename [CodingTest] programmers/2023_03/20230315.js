// [상] [이분 탐색] 지금 무슨 노래 듣고 있어요? 3

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(item => Number(item)))
}).on('close', function () {
    const playList_num = input.shift()[0]
    let playList = input.shift()
    playList.reduce((acc, value, index) => {
        playList[index] = acc + value
        return acc + value
    }, 0)
    const Q_num = input.shift()[0]
    const Question = input.shift().map(item => {
        const temp = playList[playList.length - 1]
        while (temp < item) {
            item -= temp
        }
        return item 
    })
    
    let total = 0
    for (let i = 0; i < Q_num; i++) {
        let low = -1
        let high = playList_num
        while (low + 1 < high) {
            const mid = Math.floor((low + high)/2)
            if (playList[mid] < Question[i]) {
                low = mid 
            } else {
                high = mid
            }
        }
        result.push(high + 1)
        total = (total + high + 1) % 1000000007
    }

    console.log(total)
});
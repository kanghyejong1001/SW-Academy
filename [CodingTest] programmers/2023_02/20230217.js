// [중] [큐] 밑돌 빼서 윗돌 괴기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const temp = input.shift().split(' ').map(item => Number(item))
    const [n, m] = [temp[0], temp[1]]
    let arr = Array.from(Array(n), (x, i) => i + 1)
    
    input.map( item => {
        const pop = arr.shift()
        if ( arr.length == 0 ) {
            arr.push(pop)
        } else if (item == 'raise') {
            arr.push(pop)
        }
    })
    
    console.log(arr[0]) 
    
    // input.map( item => {
    //     const pop = arr.shift()
    //     if ( arr.length == 0 ) {
    //         arr.push(pop)
    //     } else {
    //         if (item == 'raise') {
    //             arr.push(pop)
    //         }
    //     }
    // })
});
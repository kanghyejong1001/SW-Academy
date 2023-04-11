// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     const bread = Math.floor(input[0] / 2)
//     const patty = input[1]

//     console.log(Math.min(bread, patty))
// });





// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = Number(line)
// }).on('close', function () {
//     input = input % 3
//     if (input === 0) {
//         console.log('3 1 2')
//     } else if (input === 1) {
//         console.log('1 2 3')
//     } else {
//         console.log('2 3 1')
//     }
// });



// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split('')
// }).on('close', function () {
//     let stack = [input.shift()]
//     let check = true
//     while (check && input.length > 0) {
//         const current = input.shift()
        
//         if (current === '(' || current === '{' || current === '[') {
//             stack.push(current)
//         } else {
//             if (stack.length === 0) {
//                 check = false
//             } else {
//                 const prev = stack.pop()
//                 if (current === ')') {
//                     if (prev !== '(') {
//                         check = false
//                     }
//                 } else if (current === '}') {
//                     if (prev !== '{') {
//                         check = false
//                     }
//                 } else if (current === ']') {
//                     if (prev !== '[') {
//                         check = false
//                     }
//                 }
//             }
//         }
//     }
//     console.log(check && stack.length === 0 ? 'YES' : 'NO')
// });



// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input.push(line.split(' ').map(item => Number(item)))
// }).on('close', function () {
//     const num = input[0][0]
//     const correct = input[0][1]
//     let current = input[0][2]
//     const arr = input[1]
//     arr.unshift(0)
//     let visit = new Array(num + 1).fill(false)

//     let check = false
//     while (!check) {
//         if (visit[current]) { break }
//         visit[current] = true
//         if (arr[current] === correct) {
//             check = true
//             break
//         } else {
//             current = arr[current]
//         }
//     }
//     // console.log(arr, visit)
//     console.log(check ? 'YES' : 'NO')
// });


// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input.push(line.split(' ').map(item => Number(item)))
// }).on('close', function () {
//     const n = input[0][0]
//     let arr = Array.from(Array(n + 1), () => [])
//     let result = new Array(n + 1).fill(0)
//     input.shift()
//     input.map(item => {
//         arr[item[0]].push(item[1])
//         arr[item[1]].push(item[0])
//     })
    
//     for (let i = 1; i <= n; i++) {
//         let fire = new Array(n + 1).fill(-1)
//         fire[i] = 0
//         let queue = [i]
//         while (queue.length > 0) {
//             const current = queue.shift()

//             if (arr[current].length > 0) {
//                 arr[current].map(item => {
//                     if(fire[item] === -1) {
//                         queue.push(item)
//                         fire[item] = fire[current] + 1
//                     }
//                     // console.log(i, fire[item], fire[current]) 
//                 })
//             }
//         }
//         result[i] = Math.max(...fire)
//         // console.log('result', result[i])
//     }

//     result.shift()
//     console.log(Math.min(...result))
// });
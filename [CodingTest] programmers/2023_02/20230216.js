// [상] [스택] 책 페이지 넘기기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' '));
}).on('close', function () {
    let book = [...input.shift()[0]]
    
    let bookLeft = [book.shift()]
    let bookRight = [...book.reverse()]
    
    input.shift()
    input.map(item => {
        if (item[0] == 'move') {
            if (item[1] == 'left') {
                if (bookLeft.length > 1) {
                    bookRight.push(bookLeft.pop())
                }
            } else {
                if (bookRight.length > 1) {
                    bookLeft.push(bookRight.pop()) 
                } 
            }
        } else {
            if (item[1] == 'left') {
                if (bookLeft.length > 1) {
                    bookLeft.pop()
                }
            } else {
                if (bookRight.length > 1) {
                    bookRight.pop()
                }
            }
        }
    })

    // console.log('book left: ' + bookLeft)
    // console.log('book right: ' + bookRight)
    
    console.log(bookLeft.pop() + ' ' + bookRight.pop())
});
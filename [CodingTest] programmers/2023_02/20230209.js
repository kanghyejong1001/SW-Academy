// [중] [누적 합] 알파벳 빈도

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' '));
}).on('close', function () {
    input.shift();
    let arr = [...input.shift()[0]];
    
    input.map(index => {
        const i = index[0] - 1;
        const j = index[1] - 1;

        console.log(
            arr
            .filter( ( temp, index ) => { return i <= index && index <= j } )
            .reduce( ( accumulator, currentValue ) => {
                return ( currentValue == 'e' ? accumulator + 1 : accumulator )
            }, 0)
        );
    })
    
});
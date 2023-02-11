// [상] [누적 합] 서식지 분할

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [...line];
}).on('close', function () {
    console.log(
        // 2분할 될 수 있는 모든 경우의 수 중에서 가장 큰 값을 반환
        Math.max(
            // 2분할 될 수 있는 모든 경우의 수 확인
            ...input.map( ( temp, index ) => {
                let result = [];
                // 2분할 중 앞쪽 부분
                const a = input.filter( ( temp, i ) => ( i <= index ) )
                    .map( item => {
                        // 이미 나왔던 문자인지 확인하여 배열 변환
                        if(typeof result.find( element => element == item) == 'undefined'){
                            result.push(item);
                            return 1;
                        }else{
                            return 0;
                        }
                    })
                    // 총 알파벳 종류의 개수 확인
                    .reduce( ( accumulator, currentValue ) => 
                            accumulator + currentValue, 0)
                    
                result = [];
                // 2분할 중 뒷쪽
                const b = input.filter( ( temp, i ) => ( i > index ) )
                    .map( item => {
                        if(typeof result.find( element => element == item) == 'undefined'){
                            result.push(item);
                            return 1;
                        }else{
                            return 0;
                        }
                    })
                    .reduce( ( accumulator, currentValue ) => 
                            accumulator + currentValue, 0);
                
                return a + b;
            })
        )
    );
});
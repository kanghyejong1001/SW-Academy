// [하] 스파이를 찾아라!

#include <iostream>

using namespace std;

int main(void) {
    int T;
    cin >> T;
    
    for(int i = 0; i < T; i++){
        int num;
        cin >> num;
        
        // 수열
        int list[num];
        bool isSame[num];
        cin >> list[0];
        
        // 수열입력 받으면서 서로 다른 값 검사
        // isSame의 현재 인덱스 값은 list의 이전 인덱스 값과 현재 인덱스의 값이 같은지 저장
        for(int j = 1; j < num; j++){
            cin >> list[j];
            isSame[j] = list[j - 1] == list[j] ? true : false;
        }

        // 처음과 마지막이 같은지 검사하여 0번째 인덱스에 저장
        isSame[0] = (list[0] == list[num - 1]) ? true : false;
        
        // 이전 인덱스와 현재 인덱스 모두 false인 경우 이전 인덱스의 값이 스파이
        // 0인 경우 맨 마지막 인덱스 isSame과 비교
        for(int j = 0; j < num; j++){
            if(!isSame[(j == 0 ? num - 1 : j - 1)] && !isSame[j]){
                cout << (j == 0 ? num : j)  << endl;
                break;
            }
        }
        
    }
    
    return 0;
}
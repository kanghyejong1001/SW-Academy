// [하] 중요한 건 꺾이지 않는 마음 1

#include <iostream>

using namespace std;

int main(void) {
    int T;
    cin >> T;
    
    for(int i = 0; i < T; i++){
        int n, sellPrice, buyDate;
        cin >> n >> sellPrice >> buyDate;
        
        // 날짜별 주가 저장
        int stock[n + 1];
        for(int j = 1; j <= n; j++){
            cin >> stock[j];
        }
        
        // 판매 가능 여부 확인
        bool canSell = false;
        for(int j = buyDate + 1; j <= n; j++){
            if(stock[j] - stock[buyDate] >= sellPrice){
                cout << j << endl;
                canSell = true;
                break;
            }
        }
        
        // 팔지 못했을 경우 'JB' 출력
        if(!canSell){
            cout << "JB" << endl;
        }
    }
    return 0;
}
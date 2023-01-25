// [하] 세뱃돈

#include <iostream>
#include <algorithm>

using namespace std;

int main(void) {
    int n;
    cin >> n;
    
    // 세뱃돈 입력
    int money[n];
    for(int i = 0; i < n; i++){
        cin >> money[i];
    }
    
    // 새뱃돈 비교
    int compare[n];
    
    // 0으로 초기화
    fill_n(compare, n, 0);
    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            // 자기 자신보다 적은 금액 검사
            if(money[i] > money[j]){
                compare[i]++;
            }    
        }
        
        cout << compare[i] << " " << n - 1 - compare[i] << endl;
    }
    
    return 0;
}
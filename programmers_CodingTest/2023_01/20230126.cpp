// [하] 빌딩

#include <iostream>

using namespace std;

int main(void) {
    int n;
    cin >> n;
    // 빌딩 배열 입력
    int building[n];
    int max[2] = {0, 0};
    int result[2] = {0, 0};
    
    // 최댓값 비교 & 왼편에서 보는 개수
    for(int i = 0; i < n; i++){
        cin >> building[i];
        if(max[0] < building[i]){
            max[0] = building[i];
            result[0]++;
        }
    }
    
    // 오른편에서 보는 개수
    for(int i = n - 1; i >= 0; i--){
        if(max[1] < building[i]){
            max[1] = building[i];
            result[1]++;
        }
    }
    
    cout << result[0] << " " << result[1] << endl;
    return 0;
}
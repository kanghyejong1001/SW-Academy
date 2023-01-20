// [하] 윷놀이

#include <iostream>

using namespace std;

int main(void) {
    string rod;
    cin >> rod;
    
    int result = 0;
    for(int i = 0; i < 4; i++){
        // char to int
        // 아스키 코드를 사용하여 48을 빼준다.
        result += (int)rod[i] - 48;
    }
    
    cout << (result == 0 ? 5 : result) << endl;
    
    return 0;
}
// [하] Umm 문자열 1

#include <iostream>

using namespace std;

int main(void) {
    int T;
    cin >> T;
    
    // T 만큼 반복
    for(int i = 0; i < T; i++){
        int n;
        cin >> n;
        
        char S[n + 1];
        cin >> S;
        
        int A, B;
        cin >> A >> B;
        
        // Umm 문자열 확인
        bool isUmm = true;
        
        // 입력 글자 수 & 추출 글자 수 확인
        if(n < 3 || (B - A < 2)){
            // cout << "S can not be Umm String" << endl;
            isUmm = false;
        }
        
        // 첫 글자 확인
        else if(S[A - 1] != 'U'){
            // cout << "First char is not 'U'" << endl;
            isUmm = false;
        }
        
        // 나머지 글자 확인
        else{
            for(int j = A; j < B; j++){
                if(S[j] != 'm'){
                    isUmm = false;
                    // cout << "after first char is not 'm'" << endl;
                    break;
                }
            }    
        }
        cout << (isUmm ? "YES" : "NO") << endl;
    }
    
    return 0;
}
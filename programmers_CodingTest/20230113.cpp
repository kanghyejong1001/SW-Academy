// [하] 하지만 빨랐죠

#include <iostream>

using namespace std;

int main(void) {
    int N;
    cin >> N;
    
    for(int i = 0; i < N; i++){
        int A, B;
        cin >> A >> B;
        
        bool result = true;
        for(int j = 2; j <= B; j++){
            if(A % j == 0 && B % j == 0){
                result = false;
                break;
            }
        }
        cout << (result ? "Perfect" : "Not even close") << endl;
    }
    
    return 0;
}
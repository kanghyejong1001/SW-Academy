// n번째 fibonacci 구하기

#include <iostream>

using namespace std;


int main(void) {
    int n;
    cin >> n;
    
    int* fibo = 0;
    fibo = new int[n + 1];
    fibo[0] = 0;
    fibo[1] = 1;
    
    if(n <= 1){
        cout << n << endl;
        return 0;
    }
    
    for(int i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    
    cout << fibo[n] << endl;
    return 0;
}
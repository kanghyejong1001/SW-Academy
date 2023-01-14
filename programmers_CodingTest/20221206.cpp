// 뒤집어도 같은 수

#include <iostream>
#include <cmath>

using namespace std;

int main(void) {
    int n;
    cin >> n;
    
    if(n % 2 == 0){
        cout << (4 * pow(5, n/2 - 1))<< endl;
    }else{
        cout << (4 * pow(5, n/2 - 1) * 3) << endl;
    }
    
    return 0;
}
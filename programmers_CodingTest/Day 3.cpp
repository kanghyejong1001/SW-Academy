#include <iostream>

using namespace std;

int main(void) {
    int a, b;
    cin >> a >> b;
    
    int r = a % b;
    if(r == 0){
        cout << b << endl;
        return 0;
    }
    
    while(r != 0){
        r = a % b;
        a = b;
        b = r;
    }
    
    cout << a << endl;
    return 0;
}
// [하] 성심당 작은 메아리

#include <iostream>

using namespace std;

int main(void) {
    char breadName1[11];
    int breadPrice1;
    char breadName2[11];
    int breadPrice2;
    cin >> breadName1 >> breadPrice1 >> breadName2 >> breadPrice2;
    
    if(breadPrice1 > breadPrice2){
        cout << breadName1;
    }else{
        cout << breadName2;
    }
    
    return 0;
}
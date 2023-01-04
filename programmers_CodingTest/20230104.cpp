// [하] 개미 탈출 1

#include <iostream>

using namespace std;

int main(void) {
    char s[8];
    cin >> s;
    
    int wall = 0;
    string out = "HAHA!";
    
    for(int i = 1; i < 6; i++){
        if(s[i] == '#'){
            wall++;
        }
        if(wall > 1){
            out = "HELP!";
            break;
        }
    }
    
    cout << out << endl;
    return 0;
}
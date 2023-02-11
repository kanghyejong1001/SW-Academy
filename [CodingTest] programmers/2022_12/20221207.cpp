// Anagram 판별

#include <iostream>
#include <string>

using namespace std;

int main(void) {
    string str[2];
    cin >> str[0] >> str[1];
    
    // 문자 길이만큼 반복
    for(int i = 0; i < str[0].length(); i++){
        // 비교하는 문자가 존재할 경우에만 검사
        if(str[1].find(str[0][i]) != string::npos){
            // 비교하는 문자의 위치에서 한 칸만 지움
            str[1].erase(str[1].find(str[0][i]), 1);
        }else{
            break;
        }
    }
        
    cout << ((str[1].length() == 0) ? "True" : "False") << endl;
    
    return 0;
}
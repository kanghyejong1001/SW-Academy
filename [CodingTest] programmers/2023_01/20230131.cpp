// [하] 리포그램

#include <iostream>
#include <set>
#include <cctype>

using namespace std;

int main(void) {
    string s;
    getline(cin, s);
    
    // set을 이용하여 중복 제거하여 소문자의 알파벳만 수집
    set<char> alphabet;
    for(char c : s){
        if(c == ' '){
            continue;
        }
        alphabet.insert(tolower(c));
    }
    
    // set을 순회하면서 없는 문자 확인
    string result = "";
    int alpha[26] = {false, };
    for (set<char>::iterator iter = alphabet.begin(); iter != alphabet.end(); iter++) {
	    alpha[(int)*iter - 97] = true;
    }
    
    // 리포그램 확인
    cout << (alphabet.size() != 26 ? "YES" : "NO") << endl;
    
    // 없는 문자 출력
    for(int i = 0; i < 26; i++){
        if(!alpha[i]){
            cout << (char)(i + 97);
        }    
    }    
    
    return 0;
}
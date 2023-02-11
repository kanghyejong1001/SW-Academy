// [하] 팬그램

#include <iostream>
#include <set>
#include <cctype>

using namespace std;

int main(void) {
    string s;
    getline(cin, s);
    
    set<char> alphabet;
    for(char c : s){
        if(c == ' '){
            continue;
        }
        alphabet.insert(tolower(c));
    }
    
    cout << (alphabet.size() == 26 ? "YES" : "NO") << endl;
    
    return 0;
}
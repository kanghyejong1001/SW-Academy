// [하] 개미 탈출 2

#include <iostream>

using namespace std;

int main(void) {
    int T;
    cin >> T;
    
    for(int i = 0; i < T; i++){
        int n;
        int m;
        cin >> n >> m;
        
        char s[n + 1];
        cin >> s;
        
        bool check = false;
        const char* result = "HAHA!";
        
        for(int j = 0; j < n + 1; j++){
            if(check){
                if(s[j] == '#'){
                    if(m == 0){
                        result = "HELP!";
                        break;
                    }
                    m--;
                }else if(s[j] == '@' || s[j] == 'O'){
                    break;
                } 
            }else{
                if(s[j] == '@' || s[j] == 'O'){
                    check = check ? false : true;
                }
            }
        }
        cout << result << endl;    
    }
    
    
    return 0;
}
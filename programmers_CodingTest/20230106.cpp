// [하] 개미 탈출 3

#include <iostream>

using namespace std;

int main(void) {
    int T;
    cin >> T;
    
    for(int i = 0; i < T; i++){
        int n;
        int wall;
        cin >> n >> wall;
        
        char dimension[n + 1];
        cin >> dimension;
        
        bool me = false;
        bool gauntlet_check = false;
        bool exit_check = false;
        int gauntlet = 0;
        int exit = 0;
        for(int j = 0; j < n; j++){
            switch(dimension[j]){
                case '@':
                    me = true;
                    break;
                case 'O':
                    exit_check = true;
                    break;
                case 'G':
                    gauntlet_check = true;
                    break;
                case '#':
                    exit = (me ^ exit_check) ? ++exit : exit;
                    gauntlet = (me ^ gauntlet_check) ? ++gauntlet : gauntlet;
            }
        }
        
        const char* result = (exit <= wall || gauntlet <= wall) ? "HAHA!" : "HELP!";
        
        cout << result << endl;
    }
    
    return 0;
}
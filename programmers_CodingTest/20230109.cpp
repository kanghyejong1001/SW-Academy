// [중] 개미 탈출 4

#include <iostream>

using namespace std;

int main(void) {
    int T;
    cin >> T;
    
    for(int i = 0; i < T; i++){
        int n;
        int wall_num;
        cin >> n >> wall_num;
        
        char* dimension = new char[n + 1];
        cin >> dimension;
        
        // player[0] == 위치
        // player[1] == ATK
        // player[2] == HP
        int* player = new int[3];
        cin >> player[1] >> player[2];
        
        // monster[0] == 위치
        // monster[1] == ATK
        // monster[2] == HP
        int* monster = new int[3];
        cin >> monster[1] >> monster[2];
        
        // 출구들의 개수 & 위치
        int exit_num = 0;
        int* exit= new int[n];
        for(int j = 0; j < n; j++){
            exit[j] = -1;    
        }
        
        // 벽들의 위치
        int* wall = new int[n];
        
        // 1차원 문자들 검사 & 위치 입력
        for(int j = 0; j < n; j++){
            switch(dimension[j]){
                case '@':
                    player[0] = j;
                    break;
                case '&':
                    monster[0] = j;
                    break;
                case 'O':
                    exit[j] = 1;
                    exit_num++;
                    break;
                case '#':
                    wall[j] = 1;
                    break;       
            }
        }
        
        // n번만큼 다시 돌면서 출구마다 탈출이 가능한지 확인
        bool can_exit = false;
        for(int j = 0; j < n; j++){
            if(exit[j] == 1){
                int wall_count = 0;
                int start = j < player[0] ? j : player[0];
                int end = j > player[0] ? j : player[0];
                
                // 출구마다 player와 사이에 벽개수 확인
                for(int k = start + 1; k < end; k++){
                    if(wall[k] == 1){
                        wall_count++;
                    } 
                }
                
                // 탈출이 불가능하다면 신경 안씀
                // 탈출이 가능하다면 몬스터가 있는지 확인해서 이길 수 있는지 확인
                if(wall_count <= wall_num){
                    if(start < monster[0] && end > monster[0]){
                        // 몬스터와 대결
                        // player가 이겼는지 확인
                        while(player[2] > 0 && monster[2] > 0){
                            monster[2] -= player[1];
                            if(monster[2] <= 0){
                                can_exit = true;
                                // cout << "player win" << endl;
                                break;
                            }
                            player[2] -= monster[1];
                            if(player[2] <= 0){
                                break;
                            }
                        }
                    }else{
                        // cout << "there is not monster" << endl;
                        can_exit = true;
                    }
                }
                exit_num--;
                if(exit_num == 0){ break; }
            }
            // cout << endl;
            if(can_exit){ break; }
        }
        
        cout << (can_exit ? "HAHA!" : "HELP!") << endl;
        
    }
    
    return 0;
}
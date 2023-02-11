// [하] 준식이의 모엄 2

#include <iostream>

using namespace std;

int main(void) {
    int T;
    cin >> T;
    
    for(int i = 0; i < T; i++){
        // map 크기
        int x, y;
        cin >> x >> y;
        
        // map 모양 & 현재 위치 확인
        string map[x];
        int player[2];
        for(int j = 0; j < x; j++){
            cin >> map[j];
            if(map[j].find('@') != string::npos){
                player[0] = j;
                player[1] = map[j].find('@');
            }
        }
        
        // 움직임 개수
        int num;
        cin >> num;
        
        // 움직임 순서
        char move[num + 1];
        cin >> move;
        
        // 데미지
        int damage = 0;
            
        for(int j = 0; j < num; j++){
            switch(move[j]){
                case 'R':
                    if(player[1] < y - 1 && map[player[0]][player[1] + 1] != '#'){
                        player[1]++;
                    }
                    break;
                case 'L':
                    if(player[1] > 0 && map[player[0]][player[1] - 1] != '#'){
                        player[1]--;
                    }
                    break;
                case 'U':
                    if(player[0] > 0 && map[player[0] - 1][player[1]] != '#'){
                        player[0]--;
                    }
                    break;
                case 'D':
                    if(player[0] < x - 1 && map[player[0] + 1][player[1]] != '#'){
                        player[0]++;
                    }
                    break;
            }
            if(map[player[0]][player[1]] == '^'){
                damage++;
            }
        }
        cout << player[0] + 1 << " " << player[1] + 1 << " " << damage << endl;
    }
    
    return 0;
}
// [하] 제설

#include <iostream>

using namespace std;

int main(void) {
    int n;
    cin >> n;
    
    // 마당 초기화
    char garden[n][n];
    fill_n(&garden[0][0], n * n, '*');
    
    int row[2];
    int column[2];
    cin >> row[0] >> column[0] >> row[1] >> column[1];
    
    // 시작 지점과 끝 지점 설정
    int start[2] ={(row[0] <= row[1] ? row[0] : row[1]) - 1, 
                    (column[0] <= column[1] ? column[0] : column[1]) - 1};
    int end[2] ={(row[0] > row[1] ? row[0] : row[1]), 
                    (column[0] > column[1] ? column[0] : column[1])};  
    
    for(int i = start[0]; i < end[0]; i++){
        for(int j = start[1]; j < end[1]; j++){
            garden[i][j] = '.';
        }
    }
    
    for(int i = 0; i < n; i++){
        for(char snow : garden[i]){
            cout << snow;
        }
        cout << endl;
    }
    
    return 0;
}
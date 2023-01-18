// [중] 지금 무슨 노래 듣고 있어요? 2

#include <iostream>

using namespace std;

int main(void) {
    // 리스트 개수
    int listLength;
    cin >> listLength;
    
    // 리스트 노래 제목
    string playlist[listLength]; 
    getline(cin, playlist[0]);
    for(int i = 0; i < listLength; i++){
        getline(cin, playlist[i]);
    }
    
    // 리스트 노래 길이 & 전곡 길이
    int playTime[listLength];
    int totalPlayTime = 0;
    for(int i = 0; i < listLength; i++){
        cin >> playTime[i];
        totalPlayTime += playTime[i];
        if(i != 0){
            playTime[i] += playTime[i - 1];
        }
    }
    
    // 질문 개수
    int questionLength;
    cin >> questionLength;
    
    // 질문 리스트
    int question[questionLength];
    for(int i = 0; i < questionLength; i++){
        cin >> question[i];
        // 전체 노래 길이 넘어가는 경우 처음부터 반복하도록 함
        while(question[i] > totalPlayTime){
                question[i] -= totalPlayTime;
        }
        
        // 현재 노래 확인
        for(int j = 0; j < listLength; j++){
            if(playTime[j] >= question[i]){
                cout << playlist[j] << endl;
                break;
            }
        }    
    }
    return 0;
}
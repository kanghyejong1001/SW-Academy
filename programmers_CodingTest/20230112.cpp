// [하] 지금 무슨 노래 듣고 있어요? 1

#include <iostream>

using namespace std;

int main(void) {
    int listLength;
    cin >> listLength;
    
    string playlist[listLength]; 
    getline(cin, playlist[0]);
    for(int i = 0; i < listLength; i++){
        getline(cin, playlist[i]);
    }
    
    int playTime[listLength];
    for(int i = 0; i < listLength; i++){
        cin >> playTime[i];
        if(i != 0){
            playTime[i] += playTime[i - 1];
        }
    }
    
    int questionLength;
    cin >> questionLength;
    
    int question[questionLength];
    for(int i = 0; i < questionLength; i++){
        cin >> question[i];
        for(int j = 0; j < listLength; j++){
            if(playTime[j] >= question[i]){
                cout << playlist[j] << endl;
                break;
            }
        }
    }
    
    
    
    return 0;
}
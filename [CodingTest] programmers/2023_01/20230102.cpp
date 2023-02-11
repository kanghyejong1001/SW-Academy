// [하] 부분 합

#include <iostream>

using namespace std;

int main(void) {
    // 배열의 크기
    int n;
    cin >> n;
    
    // 배열
    int* arr;
    arr = new int[n];
    for(int i = 0; i < n; i++){
        cin >> arr[i];
    }
    
    // 질문 개수
    int q;
    cin >> q;
    
    // 질문
    int** Question;
    Question = new int* [q];
    for(int i = 0; i < q; i++){
        Question[i] = new int[2];
    }
    
    
    for(int i = 0; i < n; i++){
        cin >> Question[i][0] >> Question[i][1];
    }
    
    // 부분한 계산
    for(int i = 0; i < q; i++){
        int first = Question[i][0] - 1;
        int second = Question[i][1] - 1;
        int sum = arr[first];
        for(int j = first + 1; j <= second; j++){
            sum += arr[j];
        }
        cout << sum << endl;        
    }
    
    return 0;
}
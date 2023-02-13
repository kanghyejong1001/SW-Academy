console.clear()

function loadImgInfo (id) {
  fetch(`https://picsum.photos/id/${id}/info`)
    .then ( (data) => data.json())
    .then ( (data) => { // doucument.getElementsByTagName('img')
      const $img = document.getElementsByTagName('img')[0]
      $img.src = `${data["download_url"]}` 
      // $img.setAttribute(`${data["download_url"]}`) 
    })
    .catch ( (err) => {
    
    })
}

console.log(document.getElementsByName('img-no')[0].value)
loadImgInfo(document.getElementsByName('img-no')[0].value)


// open API 사용해보기
// const promise = fetch("https://picsum.photos/v2/list?page=1&limit=3")

// promise.then((data) => data.json())
//   .then((data) => {
//     console.log(data[2]['author'])
// }).catch((err) => {
//   console.log(err.message)
// })

// promise.then 이용
//  const myFirstPromise = new Promise ((resolve, reject) => {
//    setTimeout(() => { 
//     resolve(10)
//    }, 2000)
//    // reject(new Error('에러 발생'))
//  })
 
//  myFirstPromise
//    .then((data) => {
//     console.log('성공1')
//     console.log(data)
//     return data
//   })
//   .then((data) => {
//    return new Promise((resolve, reject) => {
//     console.log('성공2')
//     setTimeout(() => {
//       resolve(data + 10)
//     }, 2000)
//    })
//   })
//   .then((data) => {
//     console.log(data)
//   })

// myFirstPromise.catch((err) => {
//   console.log('실패')
//   console.log(err.message)
// })


// callback 함수를 이용한 결과값
// function a (callback) {
//   console.log('a 실행')
  
//   setTimeout(() => {
//     callback(10)
//     console.log('a 실행완료')
//   }, 3000)
// }

// function b (input) {
//   console.log('b 실행')
//   setTimeout(() => {
//     console.log(`최종결과 ${input + 10}`)
//   })
// }

// a(b)



// 비동기로 인한 원치 않는 작업 순서
// function a () {
//   console.log ('a 실행')
  
//   setTimeout (() => {
//     console.log('setTime 실행')
//     return 10
//   }, 1000)   
// }

// const result = a()
// console.log(result);


// 함수 리턴값 활용
// function a () {
//   console.log('a 실행')
  
//   return 10
// }

// function b (input) {
//   console.log('b 실행')
  
//   return input + 10
// }

// function c (input) {
//   console.log('c 실행')
  
//   return input + 10
// }

// console.log(c(b(a())))
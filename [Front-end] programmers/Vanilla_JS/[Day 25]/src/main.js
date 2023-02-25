import App from "./App.js"


// const DUMMY_DATA = [
//     {
//         id: 1,
//         title: 'test1'
//     },
//     {
//         id: 2,
//         title: 'test2'
//     },
//     {
//         id: 3,
//         title: 'test3'
//     }
// ]

const $target = document.querySelector('#app')

new App({ $target })

// const postEditPage = new PostEditPage({
//     $target,
//     initialState: {
//         postId: 'new'
//     }
// })

// postEditPage.setState({
//     postId: 2
// })

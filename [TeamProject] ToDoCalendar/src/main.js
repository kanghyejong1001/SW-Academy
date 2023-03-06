// import { request } from "./api.js";

// const $div = document.createElement('div')
// request(``).then(item => {
//     $target.appendChild(() => $div.innerHTML = `${item}`)
//     console.log(item)
// })

import App from "./App.js";

const $target = document.querySelector('.app');

new App({ $target })
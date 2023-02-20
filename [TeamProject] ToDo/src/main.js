import { request } from "./api.js";


const $target = document.querySelector('.app');
const $div = document.createElement('div')
request(``).then(item => {
    $target.appendChild(() => $div.innerHTML = `${item}`)
    console.log(item)
})
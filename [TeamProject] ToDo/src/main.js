import { request } from "./api.js";


const $target = document.querySelector('#app');

request(``).then(item => console.log(item))
// import ProductOptions from "./ProductOptions.js"
import ProductPage from "./ProductPage.js";

// const dummyData = [
//     {
//         optionId: 1,
//         optionName: '더미 데이터!',
//         optionPrice: 10000,
//         stock: 10
//     },
//     {
//         optionId: 2,
//         optionName: '더미 데이터!2',
//         optionPrice: 20000,
//         stock: 5
//     },
//     {
//         optionId: 3,
//         optionName: '더미 데이터!3',
//         optionPrice: 30000,
//         stock: 0
//     }
// ]

const $target = document.querySelector('#app');

// new ProductOptions({
//     $target: $app,
//     // initialState: dummyData,
//     initialState: [],
//     onSelect: (option) => {
//         alert(option.optionName)
//     }
// })

new ProductPage({
    $target,
    initialState: {
        productId: 1
    }

})
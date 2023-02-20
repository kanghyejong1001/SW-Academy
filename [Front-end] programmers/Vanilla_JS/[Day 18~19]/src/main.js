import App from "./App.js";
import { getItem } from "./storage.js";


const initialState = getItem('todos', []);

const $app = document.querySelector('.app');

new App({
    $target: $app,
    initialState
})

// new TodoForm({ 
//     $target: $app,
//     onSubmit: (text) => {
//         const nextState = [...todoList.state, {
//             text
//         }];
//         todoList.setState(nextState)
//     }
// });

// const todoList = new TodoList({
//     $target: $app,
//     initialState: data
// });

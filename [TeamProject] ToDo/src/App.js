import Time from "./Time.js"
import { request } from "./api.js";
import TodoList from "./TodoList.js";

export default function App ({ $target }) {
    this.state = {
        user: 'k'
    }
    const $clock = document.createElement('div');
    $target.appendChild($clock)

    const $todoList = document.createElement('div')
    $target.appendChild($todoList)
    
    const time = new Time({
        $target: $clock 
    })

    const todoList = new TodoList({ 
        $target: $todoList,
        initalState: this.state
    })

}
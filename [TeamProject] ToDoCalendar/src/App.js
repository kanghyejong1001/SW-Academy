import Time from "./Time.js"
import { request } from "./api.js";
import TodoList from "./TodoList.js";

const DUMMY_DATA = [
    {
        _id: 1,
        content: 'aaaaaaa',
        isCompleted: false
    },
    {
        _id: 2,
        content: 'bbbbbbbb',
        isCompleted: false
    },
    {
        _id: 3,
        content: 'ccccccccc',
        isCompleted: false
    },
    {
        _id: 4,
        content: 'ddddddddd',
        isCompleted: false
    },
    {
        _id: 5,
        content: 'eeeeeeee',
        isCompleted: false
    },
    {
        _id: 6,
        content: 'ffffffff',
        isCompleted: false
    },
    {
        _id: 7,
        content: 'ggggggggg',
        isCompleted: false
    },
]

export default function App ({ $target }) {
    this.state = {
        user: 'k',
        todos: DUMMY_DATA
    }
    const $clock = document.createElement('div');
    $target.appendChild($clock)

    const $todoList = document.createElement('div')
    $target.appendChild($todoList)
    
    // this.state.todos = DUMMY_DATA
    const time = new Time({
        $target: $clock 
    })

    const todoList = new TodoList({ 
        $target: $todoList,
        initalState: {
            todos: this.state.todos
        }
    })

}
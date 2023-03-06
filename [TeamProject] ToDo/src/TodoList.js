import { getDate } from "./Current.js"
import TodoListView from "./TodoListView.js"

export default function TodoList ({
    $target,
    initalState = [],

}) {
    const $todoList = document.createElement('div')
    $todoList.className = 'TodoList'
    const $progress = document.createElement('h1')
    $progress.className = 'Progress'
    $target.appendChild($todoList)
    $target.appendChild($progress)

    this.state = initalState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    const todoListView = new TodoListView({
        $target: $todoList,
        initialState: this.state
    })

    this.render = () => {
        todoListView.setState({
            $target: $todoList,
            initalState: this.state 
        })
    }

    this.render()

}
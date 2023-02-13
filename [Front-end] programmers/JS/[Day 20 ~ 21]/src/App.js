import TodoList from "./TodoList.js";
import TodoComments from "./TodoComments.js";
import { request } from "./api.js";

export default function App({ $app }){
    this.state = {
        selectedTodo: null,
        todos: [],
        comments: []
    };

    this.setState = nextState => {
        this.state = nextState;
        todoList.setState(this.state.todos);
        todoComments.setState({
            selectedTodo: this.state.selectedTodo,
            comments: this.state.comments
        })
    };

    const todoList = new TodoList({
        $target: $app,
        initialState: this.todos,
        onClick: async (id) => {
            const selectedTodo = this.state.todos.find(todo => todo.id == id);
            this.setState({
                ...this.state,
                selectedTodo
            });

            try{
                const data = await request('https://mwu.roto-frontend.programmers.co.kr/comments?todo.id=${id}');
                this.setState({
                    ...this.state,
                    comments: data
                });
            } catch(e) {
                console.log(e);
            } finally {
                console.log('request 완료');
            }
            
        }
    });

    const todoComments = new TodoComments({
        $target: $app,
        initialState: {
            selectedTodo: this.state.selectedTodo,
            comments: this.state.comments
        }
    });

    const init = async () => {
        try {
            const data = await request('https://mwu.roto-frontend.programmers.co.kr/todos')
            this.setState({
                ...this.state,
                todos: data
            });
        } catch(e) {
            console.log(e);
        } finally {
            console.log('request 완료');
        }
    };

    init();
}
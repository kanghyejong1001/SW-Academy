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

export default function TosoListView ({ $target, initialState }) {
    const $todoListView = document.createElement('div')
    $target.appendChild($todoListView)

    this.state = initialState

    console.log(this.state)

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        let { todos } = this.state
        todos = DUMMY_DATA
        $todoListView.innerHTML = `
            <ul>
                ${todos.map(({ _id, content, isCompleted }) => `
                    <li data-id="${_id}", class="todo-item">
                        ${isCompleted ? `<s>${content}</s>` : content}
                        <button class="remove">x</button>
                    </li>
                `).join('')}
            </ul>
        `
    }

    this.render()

    $todoListView.addEventListener('click', (e) => {
        let { todos } = this.state
        todos = DUMMY_DATA
        const $li = e.target.closest('.todo-item')
        if ($li) {
            const { id } = $li.dataset
            const { className } = e.target
            if (className === 'remove') {
                todos.splice(id - 1, 1)
            } else {
                todos[id - 1].isCompleted = !todos[id - 1].isCompleted
            }
        }
        this.render()
    })
}
export default function UserList({
    $target,
    initialState,
    onSelect
}) {
    const $UserList = document.createElement('divv')
    $target.appendChild($UserList)

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $UserList.innerHTML = `
            <h1>Users</h1>
            <ul>
                ${this.state.map(username => `
                    <li data-username="${username}">${username}</li>
                `).join('')}
                <li>
                    <form>
                        <input clase="new-user" type="text" placeholder="add username">
                    </form>
                </li>
            </ul>
        `
    }

    this.render()

    $UserList.addEventListener('click', e => {
        const $li = e.target.closest('li[data-username')
        if($li){
            const { username } = $li.dataset
    
            onSelect(username)
        }
    })

    $UserList.addEventListener('submit', e => {
        const $newUser = $UserList.querySelector('.new-users')
        const newUserValue = $newUser.value

        if(newUserValue.length > 0) {
            onSelect(newUserValue)
            $newUser.value = ''
        }
    })
}
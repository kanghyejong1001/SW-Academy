export default function Header ({ 
    $target,
    initialState
}) {
    const $header = document.createElement('h2')

    $target.appendChild($header)

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }
    this.render = () => {
        const { selectedUsername, isLoading } = this.state
        if (!selectedUsername) {
            $header.innerHTML = ''
            return
        }
        $header.innerHTML = `${selectedUsername}'s To do List ${isLoading ? ' (Loading...)' : ''}`
    }

    this.render()

}
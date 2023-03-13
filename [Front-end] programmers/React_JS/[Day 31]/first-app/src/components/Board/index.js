import PropTypes from 'prop-types'

const Board = ({ articles }) => {
    return (
        <div>
            <h1>Board</h1>

            <ul>
                {articles.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

Board.prototypes = {
    articles: PropTypes.array
}

export default Board
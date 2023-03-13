import logo from './logo.svg';
import PropTypes from 'prop-types'

// 비구조 할당으로 디폴트 값 넣기
function Logo({ size = 200 }) {
// function Logo(props) {
    return (
        <img 
            src={logo} 
            className="App-logo" 
            alt="logo" 
            style={{width: size, height: size}}
            // style={{width: props.size, height: props.size}}
        />
    )
}

// prop의 디폴트 값 지정
Logo.defaultProps = {
    size: 200
}

// prop의 타입 제한
Logo.prototype = {
    size: PropTypes.number
}

export default Logo
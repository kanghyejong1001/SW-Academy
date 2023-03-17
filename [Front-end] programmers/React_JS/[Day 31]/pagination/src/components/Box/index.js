import "./Box.css"

// const Box = ({ bgColor }) => {
//     return (
//         <div className="box" style={{ backgroundColor: bgColor}}></div>
//     )
// }

// emotion styled 적용
import styled from "@emotion/styled"

// styled component
const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: yellow;
`

export default Box
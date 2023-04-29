import React from 'react'

const Box = React.memo(() => {
    const style = {
        width: 100,
        height: 100,
        backgroundColor: "yellow"
    }
    return <div style={style}></div>
})

export default Box
import React from "react";

const Input = React.forwardRef((_, ref) => {
    return (
        <>
            input <input ref={ref} />
        </>
    )
})

export default Input
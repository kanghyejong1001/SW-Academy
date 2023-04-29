import React from 'react' 

const CheckBox = React.memo(({ label, on, onChange }) => {
    return (
        <label>
            {label}
            <input type="CheckBox" defaultChecked={on} onChange={onChange}/>
        </label>
    )
})

export default CheckBox

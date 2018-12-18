import React from 'react'


const Toggle = (props) => {
    let checked = props.theme == true ? 'checked' : '';
    return (
        <label className="switch">
            <input onChange={() => props.click()} type="checkbox" checked={checked}/>
            <span className="slider round"></span>
        </label>
    );
}

export default Toggle;
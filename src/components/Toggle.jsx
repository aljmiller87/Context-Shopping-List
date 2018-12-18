import React from 'react'


const Toggle = (props) => {
   return (
        <label className="switch">
            <input onChange={() => props.click()} type="checkbox"  />
            <span className="slider round"></span>
        </label>
   );
}

export default Toggle;
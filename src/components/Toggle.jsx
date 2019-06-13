import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

const Toggle = (props) => {
    const { state, dispatch } = useContext(ThemeContext);

    const toggleTheme = () => {
        console.log('toggleTheme');
        dispatch({type: 'SWITCH_THEME'})
    }
    let checked = state.darkTheme === true ? 'checked' : '';

    return (
        <label className="switch">
            <input onChange={() => toggleTheme()} type="checkbox" checked={checked}/>
            <span className="slider round"></span>
        </label>
    );
}

export default Toggle;
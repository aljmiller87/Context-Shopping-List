import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

const Toggle = (props) => {
    const { state, dispatch } = useContext(ThemeContext);

    const toggleTheme = () => {
        console.log('toggleTheme');

        dispatch({type: 'SWITCH_THEME'});
        window.localStorage.setItem("saved_theme", JSON.stringify(state.darkTheme));
    }

    let checked = state.darkTheme === true ? 'checked' : '';

    useEffect(() => {
        window.localStorage.setItem("saved_theme", JSON.stringify({darkTheme: state.darkTheme}));
        // let savedTheme = JSON.parse(window.localStorage.getItem("saved_theme"));

        // if (savedTheme) {
        //     dispatch({type: 'SWITCH_THEME'})
        // }

    }, [state.darkTheme])

    return (
        <label className="switch">
            <input onChange={() => toggleTheme()} type="checkbox" checked={checked}/>
            <span className="slider round"></span>
        </label>
    );
}

export default Toggle;
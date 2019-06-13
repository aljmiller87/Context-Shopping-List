import React, { createContext, useReducer } from 'react';

let ThemeContext = createContext();
const initialState = {
    darkTheme: false
}

let reducer = (state, action) => {
     // eslint-disable-next-line default-case
     switch(action.type) {
         case 'SWITCH_THEME': {
             console.log('accessing case SWITCH_THEME');
             return { ...state, darkTheme: !state.darkTheme }
         }
     }

     return state;
 }

 function ThemeContextProvider(props) {
    const fullInitialState = {
        ...initialState
    }

    let [state, dispatch] = useReducer(reducer, fullInitialState);
    let value = { state, dispatch };

    return (
        <ThemeContext.Provider value={value}>
            <div className={ state.darkTheme === true ? 'ThemeDark' : ''}>
                {props.children}
            </div>
        </ThemeContext.Provider>
    );
 }

 let ThemeContextConsumer = ThemeContext.Consumer;

 export { ThemeContext, ThemeContextProvider, ThemeContextConsumer}

// export default class ThemeProvider extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             darkTheme: false,
//             changeTheme: this.changeTheme.bind(this)
//         }
//     }

//     // Checks if state exists in local storage
//     componentDidMount() {
        let state = JSON.parse(window.localStorage.getItem("saved_theme"));

        if (state) {
          this.setState({
            darkTheme: state.darkTheme
          });
        }
//     }

//     // Sets state in local storage
//     componentDidUpdate() {
//         let state = {
//             darkTheme: this.state.darkTheme
//         };
//         window.localStorage.setItem("saved_theme", JSON.stringify(state))
//     }


//     changeTheme() {
//         this.setState({
//             darkTheme: !this.state.darkTheme
//         });
//     }

//     render() {
//         let themeClass = this.state.darkTheme === true ? 'ThemeDark' : '';
//       return (
//         <ThemeContext.Provider
//             value={{ ...this.state }}
//             >
//             <div className={themeClass}>
//                 {this.props.children}
//             </div>
//         </ThemeContext.Provider >
//       )
//     }
//   }


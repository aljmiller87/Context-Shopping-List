import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {$,jQuery} from '../node_modules/jquery/dist/jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

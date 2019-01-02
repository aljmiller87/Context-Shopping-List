import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';

import App from './App';
import Checkout from './components/Checkout';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>                                
        <App>
            <Route exact path="/" component={ProductList} />
            <Route path="/products/:name" component={ProductDetails} />
            <Route path="/checkout" component={Checkout} />
        </App>
    </HashRouter>   
    , document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Checkout from './components/Checkout';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={hashHistory}>                                
        <Route path="/" component={App}>
            <IndexRoute component={ProductList} />
            <Route path="/products/:name" component={ProductDetails} />
            <Route path="/checkout" component={Checkout} />
        </Route>
    </Router>
    ,document.getElementById('root')
);

registerServiceWorker();

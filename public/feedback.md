## Feedback

### Dependencies
So many! I know its a quick start and get going but I think it was a bit much. Projects can get really heavy really fast like this.
There is also no need for additional JS (jquery) when using react. All the dom manipulation should be handled by reacts state management.
Use imports for deps instead of flat files and http request to load those extra js/css files

### Structure
I personally would have tossed the router and all into the App.js file and not in the index.js file.

        ReactDOM.render(<App/>, document.getElementById('root'));

vs

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

Also relative to routing, I would leave the constant components (header, footer) outside of the router. Below is an example of something I have written before.

        <AppProvider>
            <Router history={history}>
                <React.Fragment>
                    <Header/>
                    <Route render={({ location }) => (
                        <Switch location={location}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/cart" component={Cart} />
                            <Route render={() => <NotFound>Not Found</NotFound>} />
                        </Switch>
                    )} />
                    <Footer/>
                </React.Fragment>
            </Router>
        </AppProvider>

### React stuff
- Instead of using a blank `<div>` use `<React.Fragment>` or if you import Fragment from react then just `<Fragment>`.
- You can export a Provider and Consumer from the same file.

        const initialState = {...stuff};
        const {
            Provider,
            Consumer: AppConsumer
        } = createContext(initialState);
        ... create and export your provider component
        export { AppConsumer };

- General eslint warnings

        ./src/components/Footer.jsx
            Line 25:  Links must not point to "#". Use a more descriptive href or use a button instead                                              jsx-a11y/href-no-hash
            Line 27:  Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener  react/jsx-no-target-blank
            Line 31:  Anchors must have content and the content must be accessible by a screen reader                                               jsx-a11y/anchor-has-content
            Line 31:  Links must not point to "#". Use a more descriptive href or use a button instead                                              jsx-a11y/href-no-hash
            Line 32:  Anchors must have content and the content must be accessible by a screen reader                                               jsx-a11y/anchor-has-content
            Line 32:  Links must not point to "#". Use a more descriptive href or use a button instead                                              jsx-a11y/href-no-hash
            Line 33:  Anchors must have content and the content must be accessible by a screen reader                                               jsx-a11y/anchor-has-content
            Line 33:  Links must not point to "#". Use a more descriptive href or use a button instead                                              jsx-a11y/href-no-hash
            Line 34:  Anchors must have content and the content must be accessible by a screen reader                                               jsx-a11y/anchor-has-content
            Line 34:  Links must not point to "#". Use a more descriptive href or use a button instead                                              jsx-a11y/href-no-hash
        
        ./src/components/Cart.jsx
            Line 37:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
        
        ./src/components/ProductDetails.jsx
            Line 48:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
            Line 55:  Anchors must have content and the content must be accessible by a screen reader   jsx-a11y/anchor-has-content
            Line 55:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
            Line 56:  Anchors must have content and the content must be accessible by a screen reader   jsx-a11y/anchor-has-content
            Line 56:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
            Line 57:  Anchors must have content and the content must be accessible by a screen reader   jsx-a11y/anchor-has-content
            Line 57:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
            Line 58:  Anchors must have content and the content must be accessible by a screen reader   jsx-a11y/anchor-has-content
            Line 58:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
            Line 69:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
        
        ./src/components/OrderReview.jsx
            Line 75:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
        
        ./src/formik/CheckoutForm.jsx
            Line 81:  Unnecessary escape character: \+  no-useless-escape
            Line 81:  Unnecessary escape character: \.  no-useless-escape
            Line 81:  Unnecessary escape character: \.  no-useless-escape
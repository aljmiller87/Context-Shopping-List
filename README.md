


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# State Management with React's Context API

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Conclusions


### Ease of Learning
I found this to have a low to moderate learning curve. Main concepts are:
1) Creating a context
2) Creating a provider
3) Placing consumer where the providers data is needed

### Performance
There is no hit to performance as this is the same Context that Redux uses.

### Scalability

#### Pros
If the main problem with your application ends up being passing data via props, then Context is the way to go

#### Cons
My practice has been to place all relevant state data and methods in a Provider component. Depending on the size of the project, I can easily see this Provider component growing to thousands of lines of code.

Context is not as debuggable as Redux.
* If you need to use middleware for various purposes. For example logging actions, error reporting, dispatching other requests depending on the server’s response, etc
* Redux enables tracking actions and data change

### Cleanliness/Readability

Personally, I find the data flow simpler and easier to read than Redux. 

I think the best way to organize is to have a context folder where you have all context files and providers files located.


### Reusability
Reusability has the potential to take a hit because it correlates a component with a context.

*Question for team:* How does this compare with correlating a component with a state or store?
*Question for team:* Can this be alleviated with higher order components that somehow merge a component with a Context?

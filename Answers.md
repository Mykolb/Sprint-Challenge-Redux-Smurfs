1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map(), .filter(), .concat() and Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: info that contains action type and datat that we want associated with that action type; on;y way to modify state app

reducers: JS functions that take in state/action and return a new state

store: object that represents data of our app 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is stored within a component and you can't access it unless it's passed as a prop. App state is global and canbe accessed by the store

1.  What is middleware?

Programming tool that intercepts action before it flows through to reducers, a function that returns a function that returns a function 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Middleware that gives ability to handle async operations inside action creators. You can add Middleware to an action creator to make API calls.

1.  Which `react-redux` method links up our `components` with our `redux store`?

The connect()
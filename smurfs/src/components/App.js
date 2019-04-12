import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getSmurf } from '../actions';
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs'


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

 //need CDM to call the action, so I need constructor function...
class App extends Component {
  constructor() {
    super();
  }

componentDidMount() {
this.props.getSmurf();
}


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
     smurfs: state.smurfs,
     fetchingSmurfs: state.fetchingSmurfs,
     addingSmurf: state.addingSmurf,
     error: state.error
  }
}

export default connect(
  mapStateToProps, 
  {getSmurf})(App);


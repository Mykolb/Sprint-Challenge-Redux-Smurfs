import React, { Component } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';
//import connect and action creator 

class  SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurf: {
                name: '',
                age: '',
                height: ''
            }
        }
    }



//change handler for form input 

onChange = event => {
   this.setState({
       smurf: {
           ...this.state.smurf,
           [event.target.name]: event.target.value
       }
   });
        }
    


//onsubmit for form 
onSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf)

// this.setState({
//     smurf: {
//         name: '',
//         age: '',
//         height: '',
//     }
// })
};


render() {
    return(
        <div className='form'>
            <form onSubmit={this.onSubmit}>
            <input
            onChange={this.onChange}
            name='name'
            value={this.state.smurf.name}
            placeholder='name'
            />
            <input
             onChange={this.onChange}
             name='age'
             value={this.state.smurf.age}
             placeholder='age'
            />
            <input
             onChange={this.onChange}
             name='height'
             value={this.state.smurf.height}
             placeholder='height'
            />
            <button type='submit'>Add smurf</button>

            </form>

        </div>
    );
}

}

const mapStateToProps = state => {
    console.log(state);
    return {
        // smurfs: state.smurfs,
        addingSmurf: state.addingSmurf,
        error: state.error,
        // fetchingSmurfs: state.fetchingSmurfs
    }
}


export default connect(
    mapStateToProps,
    {addSmurf})(SmurfForm);

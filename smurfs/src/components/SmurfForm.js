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
                height: '',
                id: ''
            }
        }
    }



//change handler for form input 

onChange = event => {
    console.log('smurf handler is firing ');
    event.persist();

    let value = event.target.value


    this.setState(prevState => ({
        smurf: {
            ...prevState.smurf,
            [event.target.name]: value
        }
    }))
}


//onsubmit for form 
onSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf)

this.setState({
    smurf: {
        name: '',
        age: '',
        height: '',
        id: ''
    }
})
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
            <input
             onChange={this.onChange}
             name='id'
             value={this.state.smurf.id}
             placeholder='id'
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
        smurfs: state.smurfs,
        addingSmurf: state.addingSmurf,
        error: state.error
    }
}


export default connect(
    mapStateToProps,
    {addSmurf})(SmurfForm);

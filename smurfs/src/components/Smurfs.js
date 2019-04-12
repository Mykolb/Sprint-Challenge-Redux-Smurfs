import React, { Component } from 'react';
import Smurf from './Smurf';


class Smurfs extends Component {
    render() {
     return(
         <div>
        <ul>
        {this.props.smurfs.map(smurf => {
            return(
                <Smurf 
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                id= {smurf.id}
                key={smurf.id}
                />
            )
        })}
        </ul>
            </div>
     )
    }
}

export default Smurfs;
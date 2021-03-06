import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

//Actions
export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

//get request
export const getSmurf= () => dispatch => {
  dispatch({ type: FETCH_SMURF});
  axios.get('http://localhost:3333/smurfs')
  .then(response =>
    dispatch({type: FETCH_SMURF_SUCCESS, payload: response.data})
    )
  .catch(error => 
    dispatch({ type: FETCH_SMURF_FAILURE, payload: error }))
}


//Actions
export const CREATE_SMURF = 'CREATE_SMURF';
export const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS';
export const CREATE_SMURF_FAILURE = 'CREATE_SMURF_FAILURE';

export const addSmurf = smurfs => dispatch => {
  dispatch({ type: CREATE_SMURF});
  axios.post('http://localhost:3333/smurfs', smurfs)
  .then(response =>
    dispatch({ type: CREATE_SMURF_SUCCESS, payload: response.data})
    )
  .catch(error => 
    dispatch({ type: CREATE_SMURF_FAILURE, payload: error})
    )
}





/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

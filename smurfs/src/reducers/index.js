/*
  Be sure to import in all of the action types from `../actions`
*/
import {
FETCH_SMURF,
FETCH_SMURF_SUCCESS,
FETCH_SMURF_FAILURE,
CREATE_SMURF,
CREATE_SMURF_SUCCESS,
CREATE_SMURF_FAILURE
} from '../actions';


//  Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
  //  updatingSmurf: false
  //  deletingSmurf: false
   error: null
}

export const smurfReducer = (state = initialState, action) => {
  console.log('smurfReducer', action);
  switch (action.type) {
    case FETCH_SMURF: {
      return {
        ...state,
        fetchingSmurfs: true,
      };
    }
      case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: true,
      };
      case FETCH_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false,
      };
      case CREATE_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
      case CREATE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        addingSmurf: true,
        // fetchingSmurfs: false
      };
      case CREATE_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload
      }
      default: 
        return state;
    }
  }

export default smurfReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import axios from "axios";

export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHED_SMURF = "FETCH_SMURF";
export const ADDING_SMURF = "ADDING_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATING_SMURF ="UPDATING_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const DELETING_SMURF = "DELETING_SMURF"
export const SUBMIT_SMURF = "SUBMIT_SMURF";
export const EDIT_SMURF = "EDIT_SMURF";

// Action Types Go Here!
// Be sure to export each action type so you can pull it into your reducer


export const fetch_smurfs = () => {
  const getSmurfs = axios.get('http://localhost:3000/smurfs');
  return function( dispatch) {
    dispatch({
       type: FETCHING_SMURFS
       });  

    getSmurfs
      .then(response => {
        dispatch({
           type: FETCH_SMURFS,
           payload: response.data
           })
          })
          .catch(error =>{
            dispatch({
              type:ERROR,
              payload: error
            })
          })
        }
      }
  
export const addSmurfs = smurf => {
  console.log(smurf)
  const add = axios.get('http://localhost:3000/smurfs');
  return function (dispatch) {
    dispatch({
       type: ADDING_SMURF ,
       
      });
    add
      .then( response  => {
        dispatch({ 
          type: ADD_SMURF,
          payload:response.data
      })
    })
      .catch(error => {
        dispatch({
          type:ERROR,
          payload:error
        })
        
      });
  };
};
export const deleteSmurf = id => {
  const getInfo = axios.delete(`http://localhost:3333/api/smurfs/${id}`);
  return dispatch => {
    getInfo
      .then(({ data }) => {
        dispatch({ type: DELETE_SMURF, smurfs: data });
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const editSmurf = (id, smurfs) => {
  return { type: EDIT_SMURF, smurfs, id };
};
export const submitSmurf = nsmurf => {
  console.log(nsmurf);
  const getInfo = axios.put(
    `http://localhost:3333/api/smurfs/${nsmurf.id}`,
    nsmurf
  );
  return dispatch => {
    getInfo
      .then(({ data }) => {
        dispatch({ type: SUBMIT_SMURF, smurfs: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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

import * as api from '../../api';

//Action creators

export const getUsers=() =>async(dispatch)=>{

  try {
    const {data} =await api.fetchUser();
    dispatch({type: 'FETCH_ALL', payload: data})
  } catch (error) {
    console.log(error.message);
    
  }
  
}

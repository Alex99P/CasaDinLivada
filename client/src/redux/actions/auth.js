import * as api from '../../api';
import { AUTH } from "../../constants/actionTypes";


export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log(data);
    
  
    dispatch({ type: AUTH, data });

    navigate("/rezervare")
  
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", data: error?.response.data });

  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    console.log(data);


    dispatch({ type: AUTH, data });
    navigate("/rezervare")
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", data: error?.response.data });

  }
};
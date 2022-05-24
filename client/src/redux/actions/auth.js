import * as api from '../../api';
import { AUTH } from "../../constants/actionTypes";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


    


export const signin = (formData, navigate) => async (dispatch) => {
      
  try {
    const { data } = await api.signIn(formData);
    console.log(data);
    
  
    dispatch({ type: AUTH, data });
    toast.success('Login successful', {
      position: "top-center",
      autoClose: 1500,
      pauseOnHover: false,
      }
      );

    navigate("/rezervare")
  
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", data: error?.response.data });
    toast.error('Error', {
      position: "top-center",
      autoClose: 1500,
      pauseOnHover: false,
      }
      );

  }
};

export const signup = (formData, navigate) => async (dispatch) => {


  try {
    const { data } = await api.signUp(formData);
    console.log(data);


    dispatch({ type: AUTH, data });
    toast.success('Account successfully created', {
      position: "top-center",
      autoClose: 1500,
      pauseOnHover: false,
      }
      );

    navigate("/rezervare")
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", data: error?.response.data });
    toast.error('Error', {
      position: "top-center",
      autoClose: 1500,
      pauseOnHover: false,
      }
      );
  }
};
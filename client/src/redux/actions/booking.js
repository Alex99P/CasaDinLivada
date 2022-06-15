import * as api from '../../api';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const bookingHouse = (reqObj) => async (dispatch) => {
  try {
    console.log(reqObj);
    
    await api.bookingHouse(reqObj);
    toast.success('Booking successfully', {
      position: "top-center",
      autoClose: 2000,
      pauseOnHover: false,
      });
    
  
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", data: error?.response.data });

  }
};


export const bookingCiubar = (reqObj) => async (dispatch) => {
  try {
    // console.log(reqObj);
    
    await api.bookingCiubar(reqObj);
    toast.success('Booking successfully', {
      position: "top-center",
      autoClose: 2000,
      pauseOnHover: false,
      }
      );
    
  
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", data: error?.response.data });

  }
};
export const feedback = (reqObj) => async (dispatch) => {
  try {
    
    await api.feedback(reqObj);
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", data: error?.response.data });

  }
};
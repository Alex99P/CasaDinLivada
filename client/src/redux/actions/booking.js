import * as api from '../../api';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const bookingHouse = (reqObj) => async (dispatch) => {
  try {
    console.log(reqObj);
    
    await api.bookingHouse(reqObj);
    // await axios.post("http://localhost:5000/booking/bookingHouse" , reqObj);
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
    // console.log(reqObj);
    
    await api.feedback(reqObj);
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
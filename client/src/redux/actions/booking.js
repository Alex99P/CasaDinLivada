import * as api from '../../api';
import axios from 'axios';

export const bookingHouse = (reqObj) => async (dispatch) => {
  try {
    console.log(reqObj);
    
    const { data } = await api.bookingHouse(reqObj);
    // await axios.post("http://localhost:5000/booking/bookingHouse" , reqObj);
    console.log(data);
    
  
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", data: error?.response.data });

  }
};

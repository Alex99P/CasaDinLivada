// import * as actionType from "../../constants/actionTypes"
import { AUTH, LOGOUT } from "../../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      //salvez tokenu local storage pt a ramane connectat in caz de refresh
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
      break;
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
      break;
      case "ERROR":
        return { state, authData: action?.data };
        case "REMOVE_ERROR":
          return { ...state, authData: null };
    default:
      return state;
      break;
  }
};

export default authReducer;

import { UPLOAD_PICTURE } from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_PICTURE:
      return { ...state, picture: action.payload };
    default:
      return state;
  }
}

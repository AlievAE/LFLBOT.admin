const initialState = {
    user: null,
};
  
export const SET_USER = "SET_USER";
export const CLEAN_USER = "CLEAN_USER";

export function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case CLEAN_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}
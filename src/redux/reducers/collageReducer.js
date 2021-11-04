import { types } from "../types/types";

const initialState = {
  data: [],
};

export const collageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getcollage:
      return {
        data: action.payload
      };

    default:
      return state;
  }
};

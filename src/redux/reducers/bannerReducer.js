import { types } from "../types/types";

const initialState = {
  data: [],
};

export const bannersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getBanners:
      return {
        data: action.payload
      };
    default:
      return state;
  }
};

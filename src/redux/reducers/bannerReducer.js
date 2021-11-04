import { types } from "../types/types";

const initialState = {
  data: [],
};

export const bannersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getBanners:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};

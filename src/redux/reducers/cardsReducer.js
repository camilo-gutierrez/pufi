import { types } from "../types/types";

const initialState = {
  data: [],
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getCards:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};

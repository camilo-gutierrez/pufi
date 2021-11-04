import { types } from "../types/types";

const initialState = {
  data: [],
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getCards:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};

import { getCards } from "../../api/cards";
import { types } from "../types/types";

export const cardsData = () => {
  return async (dispatch) => {
    dispatch(getCardsData(getCards));
  };
};

export const getCardsData = (data) => {
    return {
      type: types.getCards,
      payload: data,
    };
  };
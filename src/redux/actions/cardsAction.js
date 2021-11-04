import { getCards } from "../../api/cards";
import { types } from "../types/types";

export const cardsData = () => {
  return async (dispatch) => {
    const response = await getCards()
    dispatch(getCardsData(response))
  };
};

export const getCardsData = (data) => {
    return {
      type: types.getCards,
      payload: data,
    };
  };
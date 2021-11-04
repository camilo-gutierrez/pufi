import { getBanners } from "../../api/banner";
import { types } from "../types/types";

export const bannersData = () => {
  return async (dispatch) => {
    dispatch(getBannersData(getBanners));
  };
};

export const getBannersData = (data) => {
    return {
      type: types.getBanners,
      payload: data,
    };
  };
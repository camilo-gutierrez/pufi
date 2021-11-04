import { getBanners } from "../../api/banner";
import { types } from "../types/types";

export const bannersData = () => {
  return async (dispatch) => {
    const response = await getBanners()
    dispatch(getBannersData(response));
  };
};

export const getBannersData = (data) => {
    return {
      type: types.getBanners,
      payload: data,
    };
  };
import { types } from "../types/types";
 import { getCollage } from "../../api/collage";


export const collageData = () => {
  return async (dispatch) => {
   const response = await getCollage()
   dispatch(getCollageData(response));
  };
}; 

export const getCollageData = (data) => {
    return {
      type: types.getcollage,
      payload: data,
    };
  };
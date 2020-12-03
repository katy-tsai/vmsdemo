import * as types from '../actionTypes';
import {getMaps} from '../../api/index';
export function  getMapsList(){
    return async (dispatch) => {
      const floorPlanList = await getMaps();
      return dispatch(getMapsSuccess(floorPlanList));
  }
}

export function getMapsSuccess(floorPlanList){
  return {
    type: types.MAP_INIT,
    payload: {
      floorPlanList
    }
}
}
import apiRequest from "../../../api/apiRequest";
import { getTrackingShipmentUrl } from "../../../api/paths";
import {
  GET_TRACKING_SHIPMENT_FAILED,
  GET_TRACKING_SHIPMENT_LOADING,
  GET_TRACKING_SHIPMENT_SUCCESS,
} from "../types/trackingShipment";

export const getTrackingShipmenAction = (trackingNumber) => {
  return async (dispatch) => {
    const onLoading = () => {
      dispatch({
        type: GET_TRACKING_SHIPMENT_LOADING,
      });
    };
    const onSuccess = (responseData) => {
      dispatch({
        type: GET_TRACKING_SHIPMENT_SUCCESS,
        payload: { data: responseData },
      });
      // history.push('/talkybots');
    };
    const onError = (e) => {
      dispatch({
        type: GET_TRACKING_SHIPMENT_FAILED,
        payload: { error: e },
      });
    };

    apiRequest.get({
      url: getTrackingShipmentUrl(trackingNumber),
      onSuccess,
      onError,
      onLoading,
    });
  };
};

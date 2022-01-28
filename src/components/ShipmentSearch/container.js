import { connect } from "react-redux";
import { getTrackingShipmenAction } from "../../store/actions/creators/trackingShipment";

const mapStateToProps = (state) => {
  return {
    loading: state.tracking.loading,
    error: state.tracking.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTrackingShipmen: (trackingNumber, callbackSuccess) =>
      dispatch(getTrackingShipmenAction(trackingNumber, callbackSuccess)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);

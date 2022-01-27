import { connect } from "react-redux";
import { getTrackingShipmenAction } from "../../store/actions/creators/trackingShipment";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTrackingShipmen: (trackingNumber) =>
      dispatch(getTrackingShipmenAction(trackingNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);

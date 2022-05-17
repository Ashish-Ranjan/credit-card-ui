import Row from "./Row";
import "./CardDetails.scss";

const CardDetails = (props) => {
  return (
    <Row className="row">
      <div className="flex-row first">{props.name}</div>
      <div className="flex-row">{props.cardnumber}</div>
      <div className="flex-row">
        <span>£</span>
        {props.balance}
      </div>
      <div className="flex-row">
        <span>£</span>
        {props.limit}
      </div>
    </Row>
  );
};

export default CardDetails;

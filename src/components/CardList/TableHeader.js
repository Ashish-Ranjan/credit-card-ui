import Row from "./Row";
import "./TableHeader.scss";

const TableHeader = (props) => {
  return (
    <Row className="header">
      <div className="flex-row first">{props.nameHeader}</div>
      <div className="flex-row">{props.cardnumberHeader}</div>
      <div className="flex-row">{props.balanceHeader}</div>
      <div className="flex-row">{props.limitHeader}</div>
    </Row>
  );
};

export default TableHeader;

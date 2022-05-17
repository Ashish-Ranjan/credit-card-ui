import "./Row.scss";

const Row = (props) => {
  const classes = `flex-table ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Row;

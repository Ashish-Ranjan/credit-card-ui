import "./ErrorLabel.scss";

const ErrorLabel = (props) => {
  const classes = `${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default ErrorLabel;

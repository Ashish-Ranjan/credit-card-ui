import "./SectionHeading.scss";

const SectionHeading = (props) => {
  const classes = `${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default SectionHeading;

import classes from "./Paragraph.module.css";

function Paragraph(props) {
  return <div className={classes.container}>{props.children}</div>;
}

export default Paragraph;

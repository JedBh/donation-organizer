import classes from "./Card.module.css";
import styled from "styled-components";

function Card(props) {
  const Container = styled.div`
    width: ${props.width};
  `;
  return (
    <Container>
      <div className={classes.card}>{props.children}</div>
    </Container>
  );
}

export default Card;

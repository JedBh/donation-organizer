import classes from "./Button.module.css";
import styled from "styled-components";

function Button(props) {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props.flex};
  `;

  return (
    <div className={classes.actions}>
      <Container>
        <button onClick={props.onClick}>{props.buttonText}</button>
      </Container>
    </div>
  );
}

export default Button;

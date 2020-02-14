import styled, { css } from "styled-components";

const Button = styled.button`
  display: block;
  width: 80%;
  height: 5vh;
  margin: auto;
  border-radius: 2.5px;
  background-color: #54668e;
  border: 1px solid lightgray;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  ${props =>
    props.value.innerWidth <= 600 &&
    css`
      grid-column: 3 / 9;
    `}
`;

export default Button;

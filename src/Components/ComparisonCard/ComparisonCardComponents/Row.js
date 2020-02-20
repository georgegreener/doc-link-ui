import styled, { css } from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${props =>
    props.value.innerWidth <= 600 &&
    css`
      flex-direction: column;
    `}
`;

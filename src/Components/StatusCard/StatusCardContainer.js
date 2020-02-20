import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ResponsiveContext } from "../../Context/ResponsiveContext";

export const StatusCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 2 / 10;
  grid-row: 2 / 3;
  ${props =>
    props.value.innerWidth <= 600 &&
    css`
      flex-direction: column;
      align-items: center;
      align-content: center;
      justify-content: space-between;
      grid-column: 2 / 10;
      grid-row: 2 / 4;
    `}
`;

// const StatusCardContainer = props => {
//   const value = useContext(ResponsiveContext);

//   return (
//     <StyledStatusCardContainer value={value}>
//       {props.children}
//     </StyledStatusCardContainer>
//   );
// };

// export default StatusCardContainer;

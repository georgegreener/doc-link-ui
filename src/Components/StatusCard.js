import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ResponsiveContext } from "../Context/ResponsiveContext";

const StyledStatusCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin-top: auto;
  margin-bottom: auto;
  width: 30%;
  height: 65%;
  border: 1px solid #54668e;
  border-radius: 2.5px;
  background-color: #e8e8e8;
  ${props =>
    props.value.innerWidth <= 600 &&
    css`
      width: 100%;
      height: 30%;
      margin: auto;
      justify-content: space-between;
    `}
`;

const Quantity = styled.div`
  margin: auto;
  font-weight: 500;
  font-size: ${props => (props.children === "Project: " ? "1.25em" : "1.25em")};
`;

const Description = styled.div`
  margin: auto;
  font-weight: 500;
  font-size: 1.25em;
`;

const ArrowIcon = styled.i``;

const StyledArrowIcon = props => (
  <ArrowIcon
    className="material-icons"
    style={{ margin: "auto", fontSize: "4vh" }}
    onClick={props.onClick}
  >
    {props.value}
  </ArrowIcon>
);

const StatusCard = props => {
  const value = useContext(ResponsiveContext);
  return (
    <StyledStatusCard value={value}>
      {props.children ? (
        <StyledArrowIcon
          value="keyboard_arrow_left"
          onClick={() => props.switchProject("left")}
        />
      ) : null}
      <Quantity>{props.quantity}</Quantity>
      <Description>{props.description}</Description>
      {props.children ? (
        <StyledArrowIcon
          value="keyboard_arrow_right"
          onClick={() => props.switchProject("right")}
        />
      ) : null}
    </StyledStatusCard>
  );
};

export default StatusCard;

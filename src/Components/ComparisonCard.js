import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ResponsiveContext } from "../Context/ResponsiveContext";

const StyledComparisonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #e8e8e8;
  margin: 2vh 0;
  padding: 1vh 1vw;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${props =>
    props.value.innerWidth <= 600 &&
    css`
      flex-direction: column;
    `}
`;

const PropertyContainer = styled.div`
  display: block;
  text-align: left;
  width: 25%;
`;

const Property = styled.div`
  text-decoration: underline;
  font-size: 1em;
`;

const Value = styled.div`
  font-size: 1em;
`;

const ComparisonCard = props => {
  const value = useContext(ResponsiveContext);

  return (
    // <StyledComparisonCard style={props.style}>
    // <Row>
    //   <div></div>
    //   <div onClick={() => props.displayComparison(props.point)}>X</div>
    // </Row>
    <React.Fragment>
      {value.innerWidth <= 600 ? (
        <StyledComparisonCard style={props.style}>
          <Row value={value}>
            <div></div>
            <div onClick={() => props.displayComparison(props.point)}>X</div>
          </Row>
          <Row value={value}>
            <PropertyContainer>
              <Property>ID:</Property>
              <Value>{props.point.id}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>X-Value:</Property>
              <Value>{props.point.data.x}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>Y-Value</Property>
              <Value>{props.point.data.y}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>X-Value:</Property>
              <Value>{props.point.data.x}</Value>
            </PropertyContainer>
          </Row>
          <Row value={value}>
            <PropertyContainer>
              <Property>X-Value:</Property>
              <Value>{props.point.data.x}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>Y-Value</Property>
              <Value>{props.point.data.y}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>Y-Value</Property>
              <Value>{props.point.data.y}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>X-Value:</Property>
              <Value>{props.point.data.x}</Value>
            </PropertyContainer>
          </Row>
          <Row value={value}>
            <PropertyContainer>
              <Property>Y-Value</Property>
              <Value>{props.point.data.y}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>Series</Property>
              <Value>{props.point.serieId}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>X-Value:</Property>
              <Value>{props.point.data.x}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>Y-Value</Property>
              <Value>{props.point.data.y}</Value>
            </PropertyContainer>
          </Row>
        </StyledComparisonCard>
      ) : (
        <StyledComparisonCard style={props.style}>
          <Row value={value}>
            <div></div>
            <div onClick={() => props.displayComparison(props.point)}>X</div>
          </Row>
          <Row value={value}>
            <PropertyContainer>
              <Property>ID:</Property>
              <Value>{props.point.id}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>X-Value:</Property>
              <Value>{props.point.data.x}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>Y-Value</Property>
              <Value>{props.point.data.y}</Value>
            </PropertyContainer>
          </Row>
          <Row value={value}>
            <PropertyContainer>
              <Property>X-Value:</Property>
              <Value>{props.point.data.x}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>X-Value:</Property>
              <Value>{props.point.data.x}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>Y-Value</Property>
              <Value>{props.point.data.y}</Value>
            </PropertyContainer>
          </Row>
          <Row value={value}>
            <PropertyContainer>
              <Property>Y-Value</Property>
              <Value>{props.point.data.y}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>X-Value:</Property>
              <Value>{props.point.data.x}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>Y-Value</Property>
              <Value>{props.point.data.y}</Value>
            </PropertyContainer>
          </Row>
          <Row value={value}>
            <PropertyContainer>
              <Property>Series</Property>
              <Value>{props.point.serieId}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>X-Value:</Property>
              <Value>{props.point.data.x}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>Y-Value</Property>
              <Value>{props.point.data.y}</Value>
            </PropertyContainer>
          </Row>
        </StyledComparisonCard>
      )}
    </React.Fragment>
    /* </StyledComparisonCard> */
  );
};

export default ComparisonCard;

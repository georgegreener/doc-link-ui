import React, { useContext } from "react";
import { ResponsiveContext } from "../../Context/ResponsiveContext";

// ComparisonCard Components
import { StyledComparisonCard } from "./ComparisonCardComponents/StyledComparisonCard";
import { Row } from "./ComparisonCardComponents/Row";
import { PropertyContainer } from "./ComparisonCardComponents/PropertyContainer";
import { Property } from "./ComparisonCardComponents/Property";
import { Value } from "./ComparisonCardComponents/Value";

const ComparisonCard = props => {
  const value = useContext(ResponsiveContext);
  const data = props.data;
  const hookArray = props.hookArray;
  console.log(props.point);
  let role;
  props.data.forEach(d => {
    // console.log(d);
    // console.log(props.point.data.x);
    if (props.point.data.x === d.date) {
      // console.log("match");
      role = d.role_dict;
    }
  });

  console.log(role);
  let counter = Object.keys(role);
  let values = Object.values(role);
  let length = counter.length;

  console.log(counter);
  console.log(values);

  return (
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
              <Value>{props.point.serieId}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>Date:</Property>
              <Value>{props.point.data.x}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>Amount</Property>
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
              <Property>Borrower:</Property>
              <Value>{props.point.serieId}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>Date:</Property>
              <Value>{props.point.data.x}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>Amount</Property>
              <Value>{"$" + props.point.data.y}</Value>
            </PropertyContainer>
          </Row>
          <Row value={value}>
            <PropertyContainer>
              <Property>{counter[0] ? counter[0] : null}</Property>
              <Value>{values[0] ? values[0] : null}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>{counter[1] ? counter[1] : null}</Property>
              <Value>{values[1] ? values[1] : null}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>{counter[2] ? counter[2] : null}</Property>
              <Value>{values[2] ? values[2] : null}</Value>
            </PropertyContainer>
          </Row>
          {/* <Row value={value}>
            <PropertyContainer style={{ width: "100%" }}>
              <Property>Joint Lead Arrangers</Property> */}
              {/* <Value>{data.joint_lead_arrangers.join(", ")}</Value> */}
            {/* </PropertyContainer> */}
            {/* <PropertyContainer>
              <Property>X-Value:</Property>
              <Value>{props.point.data.x}</Value>
            </PropertyContainer>
            <PropertyContainer>
              <Property>Y-Value</Property>
              <Value>{props.point.data.y}</Value>
            </PropertyContainer> */}
          {/* </Row> */}
          {/* <Row value={value}>
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
          </Row> */}
        </StyledComparisonCard>
      )}
    </React.Fragment>
  );
};

export default ComparisonCard;

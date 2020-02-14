import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import Graph from "../../Components/Graph";
import ComparisonCard from "../../Components/ComparisonCard";
import { ResponsiveContext } from "../../Context/ResponsiveContext";

const ProjectPage = props => {
  const value = useContext(ResponsiveContext);
  const [getArray, setArray] = useState([]);
  const [counter, changeCounter] = useState(0);

  const GraphContainer = styled.div`
    display: block;
    border-right: 1px solid #54668e;
    border-bottom: 1px solid #54668e;
    border-left: 1px solid #54668e;
    background-color: #e8e8e8;
    ${props =>
      props.value.innerWidth <= 600 &&
      css`
        grid-column: 1 / 11;
        grid-row: 4 / 7;
      `}
    ${props =>
      props.value.innerWidth > 600 &&
      css`
        grid-column: 2 / 10;
        grid-row: 3 / 7;
      `}
  `;

  const ComparisonCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-column-gap: 3.5vw;
    overflow: hidden;
    ${props =>
      props.value.innerWidth <= 600 &&
      css`
        grid-column: 1 / 11;
        grid-row: 7 / 11;
      `}
    ${props =>
      props.value.innerWidth > 600 &&
      css`
        grid-column: 2 / 10;
        grid-row: 7 / 11;
      `}
  `;

  if (props.projectContext) {
    const index = props.projects.indexOf(props.projectContext);
    if (counter !== index) {
      changeCounter(index);
      props.selectProject(null, "/project");
    }
  }

  function displayComparison(point) {
    const data = getArray.find(i => i.id === point.id);

    if (data) {
      const checkEqual = element => element.id === point.id;
      const index = getArray.findIndex(checkEqual);
      getArray.splice(index, 1);
      setArray([...getArray]);
      return;
    }
    if (getArray.length < 3) {
      setArray([...getArray, point]);
    }
  }

  return (
    <React.Fragment>
      <GraphContainer value={value}>
        <Graph selectPoint={displayComparison} />
      </GraphContainer>
      <ComparisonCardContainer value={value}>
        {getArray.map(el => {
          const index = getArray.indexOf(el);
          let styling;
          switch (index) {
            case 0:
              if (value.innerWidth <= 600) {
                styling = { gridColumn: "1 / 5", gridRow: "1 / 13" };
              } else {
                styling = { gridColumn: "1 / 5", gridRow: "1 / 13" };
              }
              break;
            case 1:
              if (value.innerWidth <= 600) {
                styling = { gridColumn: "5 / 9", gridRow: "1 / 13" };
              } else {
                styling = { gridColumn: "5 / 9", gridRow: "1 / 13" };
              }
              break;
            case 2:
              if (value.innerWidth <= 600) {
                styling = { gridColumn: "9 / 13", gridRow: "1 / 13" };
              } else {
                styling = { gridColumn: "9 / 13", gridRow: "1 / 13" };
              }
              break;
            default:
              break;
          }
          return (
            <ComparisonCard
              point={el}
              displayComparison={displayComparison}
              style={styling}
            />
          );
        })}
      </ComparisonCardContainer>
    </React.Fragment>
  );
};

export default ProjectPage;

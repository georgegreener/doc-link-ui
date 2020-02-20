import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ResponsiveContext } from "../../Context/ResponsiveContext";

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
  ${props =>
    props.showModal &&
    css`
      position: relative;
      overflow: scroll;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: 800%;
      z-index: 1;
      margin-top: 1.7vh;
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

const ProjectCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 80%;
  height: 10%;
  text-align: center;
  margin: 1%;
  /* margin-top: 10%; */
`;

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
    <StyledStatusCard
      value={value}
      onClick={props.onClick}
      showModal={props.showModal}
      projects={props.projects}
      agreements={props.agreements}
      // selectProject={props.selectProject}
      selectedGroup={props.selectedGroup}
      groups={props.groups}
      borrowerGroupArray={props.borrowerGroupArray}
    >
      {props.showModal ? (
        <React.Fragment>
          {props.borrowerGroupArray.map(a => {
            let page = "/project";
            if (props.displayedPage === "/upload") {
              page = "/upload";
            }
            return (
              // <ProjectCard onClick={() => props.selectProject(a, page)}>
              //   {a.name}
              // </ProjectCard>
              <ProjectCard onClick={() => props.selectBorrowerGroup(a, page)}>
                {a[0]}
              </ProjectCard>
            );
          })}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* {props.children ? (
            <StyledArrowIcon
              value="keyboard_arrow_left"
              onClick={() => props.switchProject("left")}
            />
          ) : null} */}
          <Quantity>{props.quantity}</Quantity>
          <Description>{props.description}</Description>
        </React.Fragment>
      )}
      {/* {props.children ? (
        <StyledArrowIcon
          value="keyboard_arrow_right"
          onClick={() => props.switchProject("right")}
        />
      ) : null} */}
    </StyledStatusCard>
  );
};

export default StatusCard;

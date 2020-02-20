import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ResponsiveContext } from "../Context/ResponsiveContext";

const Title = styled.div`
  display: block;
  margin: auto;
  font-weight: 500;
  font-size: xx-large;
  font-style: oblique;
  width: 50%;
  ${props =>
    props.value.innerWidth <= 600 &&
    css`
      width: 50%;
    `}
`;

const Links = styled.div`
  margin: auto;
  justify-content: space-evenly;
  display: flex;
  width: 25%;
  ${props =>
    props.value.innerWidth <= 600 &&
    css`
      width: 50%;
    `}
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  grid-column: 1 / 11;
  grid-row: 1;
  border-bottom: 1px solid #54668e;
  background-color: #e8e8e8;
  ${props =>
    props.value.innerWidth <= 600 &&
    css`
      flex-direction: column;
      justify-content: center;
      text-align: center;
    `}
`;

const activeStyling = {
  borderBottom: "2px solid #353958",
  paddingBottom: "0.5vh"
};

const Header = props => {
  const value = useContext(ResponsiveContext);
  return (
    <StyledHeader value={value}>
      <Title value={value}>Legal Document Linking Dashboard</Title>
      <Links value={value}>
        <div
          style={{
            textDecoration: "none",
            color: "inherit"
          }}
          onClick={() => props.updateDisplayedPage("/dashboard")}
        >
          <i
            className="material-icons"
            style={props.displayedPage === "/dashboard" ? activeStyling : null}
          >
            dashboard
          </i>
        </div>
        <div
          to="/project"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => props.updateDisplayedPage("/project")}
        >
          <i
            className="material-icons"
            style={props.displayedPage === "/project" ? activeStyling : null}
          >
            {" "}
            trending_up
          </i>
        </div>
        <div
          to="/upload"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => props.updateDisplayedPage("/upload")}
        >
          <i
            className="material-icons"
            style={props.displayedPage === "/upload" ? activeStyling : null}
          >
            cloud_upload
          </i>
        </div>
      </Links>
    </StyledHeader>
  );
};

export default Header;

import React, { useContext } from "react";
import styled, { css } from "styled-components";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import { ResponsiveContext } from "../../Context/ResponsiveContext";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 12.5vw);
  grid-template-rows: repeat(8, 12.5vh);
  width: 100%;
  height: 100%;
`;

const LoginFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  grid-column: 3 / 7;
  grid-row: 3 / 7;
  border: 1px solid #54668e;
  border-radius: 2.5px;
  background-color: #e8e8e8;
  ${props =>
    props.value.innerWidth <= 600 &&
    css`
      grid-column: 2 / 8;
    `}
`;

const Greeting = styled.div`
  margin: auto;
`;

const Input = styled.input`
  border: none;
  box-sizing: border-box;
  width: 80%;
  padding: 12px 20px;
  height: 10%;
  margin: auto;
  font-size: medium;
  color: #353958;
  background-color: #e8e8e8;
  border-bottom: 1px solid #54668e;
`;

const Login = props => {
  const value = useContext(ResponsiveContext);

  return (
    <MainContainer>
      <Header value={value} />
      <LoginFieldsContainer value={value}>
        <Greeting>Please log in</Greeting>
        <Input
          placeholder="Username"
          value={props.username}
          onChange={event => props.handleChange(event, "username")}
        ></Input>
        <Input
          type="Password"
          placeholder="Password"
          value={props.password}
          onChange={event => props.handleChange(event, "password")}
        ></Input>
        <Button
          value={value}
          title={"Submit"}
          onClick={props.loginUser}
          style={{ marginTop: "5vh" }}
        >
          Submit
        </Button>
      </LoginFieldsContainer>
    </MainContainer>
  );
};

export default Login;

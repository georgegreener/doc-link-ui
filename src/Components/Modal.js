import React, { useContext, useState } from "react";
import { ResponsiveContext } from "../Context/ResponsiveContext";
import styled from "styled-components";
import Button from "./Button";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e8e8e8;
  enable-background: new;
  border-radius: 5px;
  border: 1px solid #54668e;
  z-index: 1;
`;

const Exit = styled.div`
  text-align: center;
  align-self: flex-end;
  margin: 15px 15px 0 0;
  font-size: x-large;
  width: 30px;
  height: 30px;
`;

const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
`;

const Instruction = styled.div`
  text-align: center;
  width: 100%;
  height: 20%;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 20%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 20%;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 20%;
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

const Body = styled.div`
  width: 90%;
  height: 90%;
  overflow: scroll;
`;

const Modal = props => {
  const value = useContext(ResponsiveContext);
  const [name, updateName] = useState("");
  const [description, updateDescription] = useState("");
  const [category, updateCategory] = useState("");

  const handleClick = (name, description, category) => {
    props.addNewProject({
      name,
      description,
      category
    });
    props.exitModal();
  };

  function getGrid(page, width) {
    if (page === "Dashboard" && width <= 600) {
      return {
        gridColumn: "2 / 10",
        gridRow: "3 / 7",
        paddingBottom: "2vh"
      };
    } else if (page === "Upload" && width <= 600) {
      return {
        gridColumn: "1 / 11",
        gridRow: "2 / 11",
        paddingBottom: "2vh"
      };
    } else if (page === "Dashboard" && width > 600) {
      return {
        gridColumn: "4 / 8",
        gridRow: "3 / 7",
        paddingBottom: "2vh"
      };
    }
    else if (page === "Upload" && width > 600) {
      return {
        gridColumn: "2 / 10",
        gridRow: "2 / 11",
        paddingBottom: "2vh"
      };
    }
  }

  return (
    <StyledModal style={getGrid(props.page, value.innerWidth)}>
      {props.addNewProject ? (
        <React.Fragment>
          <Exit onClick={() => props.exitModal()}>X</Exit>
          <DescriptionArea>
            <Instruction>Enter project details below</Instruction>
            <NameContainer>
              <Input
                placeholder="Name"
                type="text"
                value={name}
                onChange={event => updateName(event.target.value)}
              ></Input>
            </NameContainer>
            <DescriptionContainer>
              <Input
                placeholder="Description"
                type="text"
                value={description}
                onChange={event => updateDescription(event.target.value)}
              ></Input>
            </DescriptionContainer>
            <CategoryContainer>
              <Input
                placeholder="Category"
                type="text"
                value={category}
                onChange={event => updateCategory(event.target.value)}
              ></Input>
            </CategoryContainer>
          </DescriptionArea>
          <Button
            value={value}
            title="Save"
            onClick={() => handleClick(name, description, category)}
          >
            Save
          </Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Exit onClick={() => props.exitModal()}>X</Exit>
          <Body>{props.doc ? props.doc.contents : "No file"}</Body>
        </React.Fragment>
      )}
    </StyledModal>
  );
};

export default Modal;

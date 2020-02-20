import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { MyDropzone } from "./Dropzone";
import Button from "./Button";
import { ResponsiveContext } from "../Context/ResponsiveContext";

const StyledUploadRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  grid-column: 2 / 10;
  grid-row: 9 / 10;
  border: 1px solid #54668e;
  background-color: #e8e8e8;
  ${props =>
    props.value.innerWidth <= 600 &&
    css`
      grid-column: 1 / 11;
    `}
`;

const Input = styled.input`
  border: none;
  box-sizing: border-box;
  width: 20%;
  padding: 12px 20px;
  height: 10%;
  margin: auto;
  font-size: medium;
  color: #353958;
  background-color: #e8e8e8;
  border-bottom: 1px solid #54668e;
  ${props =>
    props.value.innerWidth <= 600 &&
    css`
      width: 2px;
    `}
`;

const UploadRow = props => {
  const value = useContext(ResponsiveContext);
  const [getSLNo, setSLNo] = useState("");
  const [getName, setName] = useState("");
  const [getLink, setLink] = useState("");
  const [getFile, setFile] = useState({});

  const newDocument = {
    getSLNo,
    getName,
    getLink,
    getFile
  };

  const handleUpload = (projectContext, newDocument) => {
    props.uploadDocument(projectContext, newDocument);
    setSLNo("");
    setName("");
    setLink("");
    setFile("");
  };

  return (
    <StyledUploadRow value={value}>
      <i className="material-icons" style={{ margin: "auto" }}>
        add_circle_outline
      </i>
      <Input
        type="text"
        placeholder="SL No"
        value={getSLNo}
        onChange={event => setSLNo(event.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Name"
        value={getName}
        onChange={event => setName(event.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Link"
        value={getLink}
        onChange={event => setLink(event.target.value)}
      ></Input>
      <MyDropzone
        value={value}
        uploadFile={(file, contents) => setFile({ file, contents })}
        uploadDocument={props.uploadDocument}
      />
      <Button
        value={value}
        title="Upload"
        onClick={() => handleUpload(props.projectContext, newDocument)}
      >
        Upload
      </Button>
    </StyledUploadRow>
  );
};

export default UploadRow;

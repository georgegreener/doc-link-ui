import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Button from "./Button";

export function MyDropzone(props) {
  const onDrop = useCallback(
    acceptedFiles => {
      acceptedFiles.forEach(file => {
        const reader = new FileReader();
        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onloadend = () => {
          const binaryStr = reader.result;
          props.uploadFile(file, binaryStr);
        };
        reader.readAsText(file);
      });
    },
    [props]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Button
      value={props.value}
      title={<i class="material-icons">attach_file</i>}
      {...getRootProps()}
      style={{ backgroundColor: "inherit", border: "none", color: "inherit" }}
    >
      <i class="material-icons">attach_file</i>
      <input {...getInputProps()} />
    </Button>
  );
}

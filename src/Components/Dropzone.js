import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "./Button";
import axios from "axios";

export function MyDropzone(props) {
  const [returnMsg, setReturnMsg] = useState("");
  const [file, setFile] = useState(null);
  const [isFileUploaded, uploadFile] = useState(false);
  const [isFileClassified, classifyFile] = useState(false);

  const onDrop = useCallback(
    acceptedFiles => {
      console.log(acceptedFiles);
      acceptedFiles.forEach(file => {
        console.log(file);
        const reader = new FileReader();
        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onloadend = () => {
          let data = new FormData();
          data.append("file", file);
          const binaryStr = reader.result;
          props.uploadFile(file, binaryStr);
          setFile(data);
        };
        reader.readAsText(file);
      });
    },
    [props]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  if (file) {
    if (!isFileUploaded) {
      axios
        .post("http://18.222.132.180:5000/upload", file)
        .then(response => {
          console.log(response);
          setReturnMsg(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      uploadFile(true);
      setFile(null);
      classifyFile(false);
    }
  }

  if (returnMsg === "file uploaded") {
    if (!isFileClassified) {
      axios
        .get("http://18.222.132.180:5000/classify")
        .then(response => {
          console.log(response);
          props.uploadDocument();
        })
        .catch(error => {
          console.log(error);
        });
    }
    uploadFile(false);
    setReturnMsg("");
    classifyFile(true);
  }

  return (
    // <form
    //   enctype="multipart/form-data"
    //   action="http://0.0.0.0:5000/upload"
    //   method="post"
    // >
    //   <input type="file"></input>
    //   <input type="submit" value="submit"></input>
    <Button
      value={props.value}
      title={"Upload"}
      {...getRootProps()}
      // style={{ backgroundColor: "inherit", border: "none", color: "inherit" }}
    >
      Upload
      {/* <i class="material-icons">attach_file</i> */}
      <input {...getInputProps()} />
    </Button>
    /* </form> */
  );
}

// <input id="image-file" type="file" />

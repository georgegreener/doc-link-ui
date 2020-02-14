import React, { useState } from "react";
import Modal from "../../Components/Modal";
import Table from "../../Components/Table";
import UploadRow from "../../Components/UploadRow";
import ProgressBar from "../../Components/ProgressBar";

const UploadPage = props => {
  const [counter, changeCounter] = useState(0);
  const [isModalOpen, changeModalState] = useState(false);
  const [getFile, setFile] = useState({});

  if (props.newProjectRedirect) {
    props.disableNewProjectRedirect();
  }

  if (props.projectContext) {
    const index = props.projects.indexOf(props.projectContext);
    if (counter !== index) {
      changeCounter(index);
      props.selectProject(null, "/upload");
    }
  }

  const { documents } = props.projects[props.counter];

  const renderDocuments = documents.map(doc => {
    return [
      doc.getSLNo,
      doc.getName,
      <i class="material-icons" onClick={() => readFile(doc.getFile)}>
        open_in_new
      </i>,
      doc.date,
      doc.uploadedBy
    ];
  });

  const readFile = doc => {
    setFile(doc);
    changeModalState(true);
  };

  return (
    <React.Fragment>
      {isModalOpen ? (
        <Modal page="Upload" exitModal={changeModalState} doc={getFile} />
      ) : null}
      <Table
        page="Upload"
        columns={["SL No.", "Name", "Link", "Upload Date", "Uploaded By"]}
        rows={renderDocuments}
      />
      <UploadRow
        uploadDocument={props.uploadDocument}
        projectContext={props.projects[props.counter]}
      />
      <ProgressBar
        style={{
          gridColumn: "2 / 10",
          gridRow: "10 / 11"
        }}
        percentage={85}
      />
    </React.Fragment>
  );
};

export default UploadPage;

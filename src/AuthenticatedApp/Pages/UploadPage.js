import React, { useState, useEffect } from "react";
import Modal from "../../Components/Modal";
import Table from "../../Components/Table/Table";
import UploadRow from "../../Components/UploadRow";
import ProgressBar from "../../Components/ProgressBar";

const UploadPage = props => {
  const [counter, changeCounter] = useState(0);
  const [isModalOpen, changeModalState] = useState(false);
  const [getFile, setFile] = useState({});
  const [percentage, updatePercentage] = useState(0);
  const [renderAgreementDocuments, setRenderAgreementDocuments] = useState([]);

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

  // const { documents } = props.projects[props.counter];

  // const renderDocuments = documents.map(doc => {
  //   return [
  //     doc.getSLNo,
  //     doc.getName,
  //     <i className="material-icons" onClick={() => readFile(doc.getFile)}>
  //       open_in_new
  //     </i>,
  //     doc.date,
  //     doc.uploadedBy
  //   ];
  // });

  const renderAgreements = props.agreements.map(a => {
    return [
      a.getSLNo,
      a.getName,
      <i className="material-icons" onClick={() => readFile(a.getFile)}>
        open_in_new
      </i>,
      a.date,
      a.uploadedBy
    ];
  });

  console.log(props);

  useEffect(() => {
    let array = [];
    props.getAllAgreements.forEach(a => {
      if (a.borrower === props.selectedBorrowerGroup[0]) {
        const date = new Date(a.Date);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        array.push([
          a.Group,
          a.File,
          <i className="material-icons" onClick={() => readFile(a.getFile)}>
            open_in_new
          </i>,
          formattedDate,
          "Current User"
        ]);
      }
    });

    console.log(array);
    setRenderAgreementDocuments(array);
  }, [props.selectedBorrowerGroup, props.getAllAgreements]);

  // props.getAllAgreements.forEach(a => {
  //   if (a.borrower === props.selectedBorrowerGroup[0]) {
  //     array.push(
  //       a.Group,
  //       a.File,
  //       <i className="material-icons" onClick={() => readFile(a.getFile)}>
  //         open_in_new
  //       </i>,
  //       a.Date,
  //       "Current User"
  //     );
  //   }
  // });

  // console.log(array);
  // setRenderAgreementDocuments([...array]);

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
        rows={renderAgreementDocuments}
      />
      <UploadRow
        uploadDocument={props.uploadDocument}
        projectContext={props.projects[props.counter]}
        updatePercentage={updatePercentage}
      />
      <ProgressBar
        style={{
          gridColumn: "2 / 10",
          gridRow: "10 / 11"
        }}
        percentage={percentage}
      />
    </React.Fragment>
  );
};

export default UploadPage;

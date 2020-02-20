import React, { useContext, useState } from "react";
import Table from "../../Components/Table/Table";
import Modal from "../../Components/Modal";
import Button from "../../Components/Button";
import { ResponsiveContext } from "../../Context/ResponsiveContext";

const DashboardPage = props => {
  const value = useContext(ResponsiveContext);
  const [isModalOpen, changeModalState] = useState(false);
  console.log(props);
  // const projects = props.projects.map(project => {
  //   return [
  //     <div
  //       style={{ textDecoration: "none", color: "inherit" }}
  //       onClick={() => props.selectProject(project, "/project")}
  //     >
  //       <strong>{project.name}</strong>
  //     </div>,
  //     project.documents.length,
  //     project.contributors.join(", "),
  //     <div
  //       style={{ textDecoration: "none", color: "inherit" }}
  //       onClick={() => props.selectProject(project, "/upload")}
  //     >
  //       <i class="material-icons">edit</i>
  //     </div>
  //   ];
  // });

  const agreements = props.agreements.map(agreement => {
    return [
      <div
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => props.selectAgreement(agreement, "/project")}
      >
        <strong>{agreement.file_name}</strong>
      </div>,
      agreement.group,
      "Current User",
      <div
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => props.selectAgreement(agreement, "/upload")}
      >
        <i className="material-icons">edit</i>
      </div>
    ];
  });

  const groups = props.groups.map(group => {
    return [
      <div
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => props.selectGroup(group, "/project")}
      >
        <strong>{group}</strong>
      </div>,
      group,
      "Current User",
      <div
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => props.selectGroup(group, "/upload")}
      >
        <i className="material-icons">edit</i>
      </div>
    ];
  });

  const borrowers = props.borrowerGroupArray.map(borrowerGroup => {
    return [
      <div
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => props.selectBorrowerGroup(borrowerGroup, "/project")}
      >
        <strong>{borrowerGroup[0]}</strong>
      </div>,
      borrowerGroup[1],
      "Current User",
      <div
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => props.selectBorrowerGroup(borrowerGroup, "/upload")}
      >
        <i className="material-icons">edit</i>
      </div>
    ];
  });

  return (
    <React.Fragment>
      {isModalOpen ? (
        <Modal
          page="Dashboard"
          exitModal={changeModalState}
          addNewProject={props.addNewProject}
        />
      ) : null}
      <Button onClick={changeModalState} value={value}>
        New Agreement
      </Button>
      <Table
        value={value}
        page="Dashboard"
        columns={["Agreements", "Group No.", "Contributors", "Edit"]}
        rows={borrowers}
      />
    </React.Fragment>
  );
};

export default DashboardPage;

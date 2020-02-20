import React, { Component } from "react";
import DashboardPage from "./Pages/DashboardPage";
import ProjectPage from "./Pages/ProjectPage";
import UploadPage from "./Pages/UploadPage";
import { projects } from "../Data/projects";
import Grid from "../Components/Grid";
import Header from "../Components/Header";
import { StatusCardContainer } from "../Components/StatusCard/StatusCardContainer";
import StatusCard from "../Components/StatusCard/StatusCard";
import { switchProject } from "../Functions/switchProject";
import { switchAgreement } from "../Functions/switchAgreement";
// import Modal from "../Components/Modal";
import { ResponsiveContext } from "../Context/ResponsiveContext";
import axios from "axios";

class AuthenticatedApp extends Component {
  state = {
    user: null,
    displayedPage: "/dashboard",
    AgreementContext: null,
    agreementContext: null,
    selectedGroup: 1,
    projects,
    newProjectRedirect: false,
    counter: 0,
    showModal: false,
    agreements: [],
    groups: [],
    uploadPercentage: 0,
    getAllAgreements: [],
    borrowerGroupArray: [],
    selectedBorrowerGroup: null
  };

  componentDidMount = () => {
    this.getAllAgreementsService();
    // let groups = [];
    // for (let i = 1; i < 21; i++) {
    //   groups.push(i);
    // }
    // this.setState({ groups });
    // axios
    //   // .get("http://0.0.0.0:5000/list")
    //   .get("http://18.222.132.180:5000/get-all")
    //   .then(response => {
    //     console.log(response);
    //     // let agreements = [];
    //     let getAllAgreements = [];
    //     let borrowerArray = [];
    //     let groupArray = [];
    //     let borrowerGroupArray = [];
    //     response.data.forEach(d => {
    //       if (!borrowerArray.includes(d.borrower)) {
    //         borrowerArray.push(d.borrower);
    //         borrowerGroupArray.push([d.borrower, d.Group]);
    //         // groupArray.push(d.Group);
    //       }
    //       getAllAgreements.push(d);
    //     });
    //     this.setState(
    //       {
    //         getAllAgreements,
    //         borrowerArray,
    //         groupArray,
    //         borrowerGroupArray,
    //         selectedBorrowerGroup: borrowerGroupArray[0],
    //         selectedGroup: borrowerGroupArray[0][1],
    //         // displayedPage: "/project",
    //         groups
    //       },
    //       () => {
    //         console.log(this.state);
    //       }
    //     );
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  getAllAgreementsService = () => {
    let groups = [];

    for (let i = 1; i < 21; i++) {
      groups.push(i);
    }
    this.setState({ groups });
    axios
      // .get("http://0.0.0.0:5000/list")
      .get("http://18.222.132.180:5000/get-all")
      .then(response => {
        console.log(response);
        // let agreements = [];
        let getAllAgreements = [];
        let borrowerArray = [];
        let groupArray = [];
        let borrowerGroupArray = [];

        response.data.forEach(d => {
          if (!borrowerArray.includes(d.borrower)) {
            borrowerArray.push(d.borrower);
            borrowerGroupArray.push([d.borrower, d.Group]);
            // groupArray.push(d.Group);
          }
          getAllAgreements.push(d);
        });

        this.setState(
          {
            getAllAgreements,
            borrowerArray,
            groupArray,
            borrowerGroupArray,
            selectedBorrowerGroup: borrowerGroupArray[0],
            selectedGroup: borrowerGroupArray[0][1],
            // displayedPage: "/project",
            groups
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  updateDisplayedPage = displayedPage => this.setState({ displayedPage });

  addNewProject = project => {
    let projectContext = {
      ...project,
      documents: [],
      contributors: []
    };
    let newProjectRedirect = true;
    let projects = [...this.state.projects];
    projects.push(projectContext);
    this.setState({ projectContext, projects, newProjectRedirect });
  };

  addAgreement = agreement => {
    let agreements = [...this.state.agreements];
    agreements.push(agreement);
    this.setState({ agreements });
  };

  disableNewProjectRedirect = () => {
    let newProjectRedirect = false;
    this.setState({ newProjectRedirect });
  };

  selectProject = (project, displayedPage) => {
    const index = this.state.projects.indexOf(project);
    this.setState({ projectContext: project, displayedPage, counter: index });
  };

  selectAgreement = (agreement, displayedPage) => {
    const index = this.state.agreements.indexOf(agreement);
    // console.log(index);
    this.setState({
      agreementContext: agreement,
      displayedPage,
      counter: index
    });
  };

  selectGroup = (group, displayedPage) => {
    const index = this.state.groups.indexOf(group);
    // console.log(index);
    this.setState({
      selectedGroup: group,
      displayedPage,
      counter: index
    });
  };

  selectBorrowerGroup = (borrowerGroup, displayedPage) => {
    const index = this.state.borrowerGroupArray.indexOf(borrowerGroup);
    // console.log(index);
    this.setState({
      selectedBorrowerGroup: borrowerGroup,
      selectedGroup: borrowerGroup[1],
      displayedPage,
      counter: index
    });
  };

  uploadDocument = (project, document) => {
    return this.getAllAgreementsService();
    // const date = new Date().toString().substring(4, 15);
    // const uploadedBy = this.state.user || "Current User";
    // const newDocument = { ...document, date, uploadedBy };
    // const projects = [...this.state.projects];
    // let index;
    // projects.forEach(p => {
    //   if (project.name === p.name) {
    //     index = projects.indexOf(p);
    //     projects[index].documents.push(newDocument);
    //     this.setState({ projects });
    //   }
    // });
  };

  getTotalDocuments = () => {
    let counter = this.state.getAllAgreements.length;
    // this.state.projects.forEach(p => {
    //   p.documents.forEach(d => {
    //     counter = counter + 1;
    //   });
    // });
    // console.log(counter);
    return counter;
  };

  toggleModal = () => {
    const showModal = this.state.showModal;
    this.setState({ showModal: !showModal });
  };

  render() {
    // console.log(this.state.agreements);
    return (
      <Grid>
        <Header
          displayedPage={this.state.displayedPage}
          updateDisplayedPage={this.updateDisplayedPage}
        />
        <StatusCardContainer value={ResponsiveContext}>
          <StatusCard
            quantity={
              this.state.displayedPage === "/dashboard"
                ? this.state.borrowerGroupArray.length ||
                  this.state.projects.length
                : // : "Agreement: "
                  null
            }
            description={
              this.state.displayedPage === "/dashboard"
                ? "Agreements"
                : this.state.borrowerGroupArray[this.state.counter]
              // this.state.agreements[this.state.counter].file_name
            }
            switchProject={arrow =>
              this.setState({
                counter: switchProject(
                  arrow,
                  this.state.counter,
                  this.state.projects
                )
              })
            }
            // switchProject={arrow =>
            //   this.setState({
            //     counter: switchProject(
            //       arrow,
            //       this.state.counter,
            //       this.state.projects
            //     )
            //   })
            // }
            onClick={() => this.toggleModal()}
            showModal={this.state.showModal}
            projects={this.state.projects}
            selectProject={this.selectProject}
            displayedPage={this.state.displayedPage}
            agreements={this.state.agreements}
            selectAgreement={this.selectAgreement}
            selectedGroup={this.state.selectedGroup}
            groups={this.state.groups}
            selectGroup={this.selectGroup}
            borrowerGroupArray={this.state.borrowerGroupArray}
            selectBorrowerGroup={this.selectBorrowerGroup}
            getAllAgreements={this.state.getAllAgreements}
          >
            {this.state.displayedPage === "/dashboard" ? null : <div></div>}
          </StatusCard>
          <StatusCard
            quantity={
              this.state.displayedPage === "/dashboard"
                ? this.getTotalDocuments()
                : this.state.agreements.length
            }
            description={"Total Documents"}
          />
          <StatusCard
            quantity={
              this.state.displayedPage === "/dashboard"
                ? this.getTotalDocuments()
                : this.state.agreements.length
            }
            description={"Documents Processed"}
          />
        </StatusCardContainer>
        {/* {this.state.showModal ? <Modal style={{gridColumn: }}/> : null} */}
        {this.state.displayedPage === "/dashboard" ? (
          <DashboardPage
            displayedPage={this.state.displayedPage}
            updateDisplayedPage={this.updateDisplayedPage}
            addNewProject={this.addNewProject}
            projects={this.state.projects}
            selectProject={this.selectProject}
            agreements={this.state.agreements}
            selectAgreement={this.selectAgreement}
            agreementContext={this.state.agreementContext}
            selectedGroup={this.state.selectedGroup}
            groups={this.state.groups}
            selectGroup={this.selectGroup}
            borrowerGroupArray={this.state.borrowerGroupArray}
            selectBorrowerGroup={this.selectBorrowerGroup}
            getAllAgreements={this.state.getAllAgreements}
          />
        ) : null}
        {this.state.displayedPage === "/project" ? (
          <ProjectPage
            displayedPage={this.state.displayedPage}
            updateDisplayedPage={this.updateDisplayedPage}
            selectProject={this.selectProject}
            projectContext={this.state.projectContext}
            projects={this.state.projects}
            agreements={this.state.agreements}
            selectAgreement={this.selectAgreement}
            agreementContext={this.state.agreementContext}
            selectedGroup={this.state.selectedGroup}
            groups={this.state.groups}
            selectGroup={this.selectGroup}
            borrowerGroupArray={this.state.borrowerGroupArray}
            selectBorrowerGroup={this.selectBorrowerGroup}
            getAllAgreements={this.state.getAllAgreements}
          />
        ) : null}
        {this.state.displayedPage === "/upload" ? (
          <UploadPage
            {...this.state}
            updateDisplayedPage={this.updateDisplayedPage}
            disableNewProjectRedirect={this.disableNewProjectRedirect}
            uploadDocument={this.uploadDocument}
            selectProject={this.selectProject}
            agreements={this.state.agreements}
            selectAgreement={this.selectAgreement}
            agreementContext={this.state.agreementContext}
            selectedGroup={this.state.selectedGroup}
            groups={this.state.groups}
            selectGroup={this.selectGroup}
            borrowerGroupArray={this.state.borrowerGroupArray}
            selectBorrowerGroup={this.selectBorrowerGroup}
            getAllAgreements={this.state.getAllAgreements}
          />
        ) : null}
      </Grid>
    );
  }
}

export default AuthenticatedApp;

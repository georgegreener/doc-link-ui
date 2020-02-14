import React, { Component } from "react";
import DashboardPage from "./Pages/DashboardPage";
import ProjectPage from "./Pages/ProjectPage";
import UploadPage from "./Pages/UploadPage";
import { projects } from "../Data/projects";
import Grid from "../Components/Grid";
import Header from "../Components/Header";
import StatusCardContainer from "../Components/StatusCardContainer";
import StatusCard from "../Components/StatusCard";
import { switchProject } from "../Functions/switchProject";

class AuthenticatedApp extends Component {
  state = {
    user: null,
    displayedPage: "/dashboard",
    projectContext: null,
    projects,
    newProjectRedirect: false,
    counter: 0
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

  disableNewProjectRedirect = () => {
    let newProjectRedirect = false;
    this.setState({ newProjectRedirect });
  };

  selectProject = (project, displayedPage) => {
    this.setState({ projectContext: project, displayedPage });
  };

  uploadDocument = (project, document) => {
    const date = new Date().toString().substring(4, 15);
    const uploadedBy = this.state.user || "Current User";
    const newDocument = { ...document, date, uploadedBy };
    const projects = [...this.state.projects];
    let index;
    projects.forEach(p => {
      if (project.name === p.name) {
        index = projects.indexOf(p);
        projects[index].documents.push(newDocument);
        this.setState({ projects });
      }
    });
  };

  getTotalDocuments = () => {
    let counter = 0;
    this.state.projects.forEach(p => {
      p.documents.forEach(d => {
        counter = counter + 1;
      });
    });
    return counter;
  };

  render() {
    return (
      <Grid>
        <Header
          displayedPage={this.state.displayedPage}
          updateDisplayedPage={this.updateDisplayedPage}
        />
        <StatusCardContainer>
          <StatusCard
            quantity={
              this.state.displayedPage === "/dashboard"
                ? this.state.projects.length
                : "Project: "
            }
            description={
              this.state.displayedPage === "/dashboard"
                ? "Projects"
                : this.state.projects[this.state.counter].name
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
          >
            {this.state.displayedPage === "/dashboard" ? null : <div></div>}
          </StatusCard>
          <StatusCard
            quantity={
              this.state.displayedPage === "/dashboard"
                ? this.getTotalDocuments()
                : this.state.projects[this.state.counter].documents.length
            }
            description={"Total Documents"}
          />
          <StatusCard
            quantity={
              this.state.displayedPage === "/dashboard"
                ? this.getTotalDocuments()
                : this.state.projects[this.state.counter].documents.length
            }
            description={"Documents Processed"}
          />
        </StatusCardContainer>

        {this.state.displayedPage === "/dashboard" ? (
          <DashboardPage
            displayedPage={this.state.displayedPage}
            updateDisplayedPage={this.updateDisplayedPage}
            addNewProject={this.addNewProject}
            projects={this.state.projects}
            selectProject={this.selectProject}
          />
        ) : null}
        {this.state.displayedPage === "/project" ? (
          <ProjectPage
            displayedPage={this.state.displayedPage}
            updateDisplayedPage={this.updateDisplayedPage}
            selectProject={this.selectProject}
            projectContext={this.state.projectContext}
            projects={this.state.projects}
          />
        ) : null}
        {this.state.displayedPage === "/upload" ? (
          <UploadPage
            {...this.state}
            updateDisplayedPage={this.updateDisplayedPage}
            disableNewProjectRedirect={this.disableNewProjectRedirect}
            uploadDocument={this.uploadDocument}
            selectProject={this.selectProject}
          />
        ) : null}
      </Grid>
    );
  }
}

export default AuthenticatedApp;

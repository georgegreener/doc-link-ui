import React, { useState, Suspense } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { ResponsiveContext } from "./Context/ResponsiveContext";
import file from "./Data/libor_original.xls";

const AuthenticatedApp = React.lazy(() =>
  import("./AuthenticatedApp/AuthenticatedApp")
);
const UnauthenticatedApp = React.lazy(() =>
  import("./UnauthenticatedApp/UnauthenticatedApp")
);

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #353958;
  color: #353958;
  letter-spacing: 2px;
  font-size: 12.5px;
  font-family: Helvetica;
  ${props =>
    props.value &&
    css`
      width: innerWidth;
      height: innerHeight;
    `}
`;

function App() {
  const [isAuthenticated, authenticateUser] = useState(true);
  let [innerWidth, setInnerWidth] = useState(window.innerWidth);
  let [innerHeight, setInnerHeight] = useState(window.innerHeight);
  let orientation = innerWidth > innerHeight ? "landscape" : "portrait";
  let contextValue = { innerWidth, innerHeight, orientation };
  const [modelTrained, trainModel] = useState(false);
  

  function onResize(e) {
    setInnerWidth(e.target.innerWidth);
    setInnerHeight(e.target.innerHeight);
  }

  window.addEventListener("resize", onResize);

  // console.log(file);

  // if (!modelTrained) {

    // axios
    //   .get("http://18.222.132.180:5000/")
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  // }

  return (
    <ResponsiveContext.Provider value={contextValue}>
      <StyledApp value={contextValue}>
        <Suspense fallback={<div>"Loading..."</div>}>
          {isAuthenticated ? (
            <AuthenticatedApp isAuthenticated={isAuthenticated} />
          ) : (
            <UnauthenticatedApp
              authenticateUser={authenticateUser}
              isAuthenticated={isAuthenticated}
            />
          )}
        </Suspense>
      </StyledApp>
    </ResponsiveContext.Provider>
  );
}

export default App;

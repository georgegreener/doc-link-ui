import React, { useState, Suspense } from "react";
import styled from "styled-components";
import { ResponsiveContext } from "./Context/ResponsiveContext";

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
`;

function App() {
  const [isAuthenticated, authenticateUser] = useState(true);
  let [innerWidth, setInnerWidth] = useState(window.innerWidth);
  let [innerHeight, setInnerHeight] = useState(window.innerHeight);
  let orientation = innerWidth > innerHeight ? "landscape" : "portrait";
  let contextValue = { innerWidth, innerHeight, orientation };

  function onResize(e) {
    setInnerWidth(e.target.innerWidth);
    setInnerHeight(e.target.innerHeight);
  }

  window.addEventListener("resize", onResize);

  return (
    <ResponsiveContext.Provider value={contextValue}>
      <StyledApp>
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

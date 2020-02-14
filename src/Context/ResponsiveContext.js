import React from "react";

export const ResponsiveContext = React.createContext({
  orientation: "portrait",
  innerWidth: "600px",
  innerHeight: "600px"
});

import React from "react";
import { createRoot } from "react-dom/client";
import Routing from "./Routing";
// import { ThemeProvider } from "@material-tailwind/react";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
    <Routing />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import RoutePages from "./routes";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <RoutePages />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

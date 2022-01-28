import React from "react";
import { BrowserRouter } from "react-router-dom";
import { makeStyles, Paper, ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import RoutePages from "./routes";
import Navbar from "./components/Navbar/Component";
import "./index.css";

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Paper className={classes.mainLayout} elevation={0}>
          <RoutePages />
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
const useStyles = makeStyles((theme) => ({
  mainLayout: {
    marginTop: theme.spacing(50),
  },
}));

import {
  Box,
  CircularProgress,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Component = ({ getTrackingShipmen, loading, error }) => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState();
  let navigate = useNavigate();
  const callbackSuccess = () => {
    navigate("/tracking-shipment");
  };
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearch = () => {
    console.log(searchInput);
    if (searchInput) {
      getTrackingShipmen(searchInput, callbackSuccess);
    }
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Box>
        <Typography>Track your shipment</Typography>
        <Typography>Enter your tracking No.</Typography>
        <Grid container>
          <TextField onChange={handleChange} />
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.searchIcon}
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress color="white" size={15} />
            ) : (
              <SearchIcon />
            )}
          </Grid>
        </Grid>
        <Typography>{error}</Typography>
      </Box>
    </Grid>
  );
};
export default Component;
const useStyles = makeStyles((theme) => ({
  mainLayout: {
    marginTop: theme.spacing(50),
  },
  searchIcon: {
    width: theme.spacing(50),
    height: theme.spacing(50),
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    cursor: "pointer",
    marginLeft: theme.spacing(20),
  },
}));

import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
  },
  appbarWrapper: {
    backgroundColor: "transparent",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
}));
const Navbar = () => {
  // const window.history = usewindow.History();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      menuTitle: "Tracking Shipment",
      pageURL: "/",
      id: "1",
    },
    {
      menuTitle: "Pricing",
      pageURL: "/pricing",
      id: "2",
    },
    {
      menuTitle: "Contact Sales",
      pageURL: "/contact-sales",
      id: "3",
    },
    {
      menuTitle: "Sign in",
      pageURL: "/sign-in",
      id: "4",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbarWrapper} elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem
                      key={menuItem.id}
                      onClick={() => handleMenuClick(pageURL)}
                    >
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <NavLink
                exact="true"
                to="/"
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? theme.palette.primary.main : "",
                  };
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/pricing"
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? theme.palette.primary.main : "",
                  };
                }}
              >
                Pricing
              </NavLink>
              <NavLink
                to="/contact-sales"
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? theme.palette.primary.main : "",
                  };
                }}
              >
                Contact Sales
              </NavLink>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? theme.palette.primary.main : "",
                  };
                }}
              >
                Tracking Shipment
              </NavLink>
              <NavLink
                to="/sign-in"
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? theme.palette.primary.main : "",
                  };
                }}
              >
                Sign in
              </NavLink>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

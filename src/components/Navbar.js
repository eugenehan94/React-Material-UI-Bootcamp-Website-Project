import React, { useState } from "react";

/*Material UI imports */
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Slide,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

/*React router imports */
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#212121",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  menuIcon: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  linkWrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link: {
    color: "#fff",
    margin: theme.spacing(2),
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  linkSmallWrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
    backgroundColor: "#212121",
    zIndex: "999",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  closeButton: {
    textAlign: "right",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(3),
    fontSize: "2rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  linkSmall: {
    color: "#fff",
    fontSize: "2rem",
    marginBottom: theme.spacing(2),
    border: "1px solid #424242",
    width: "90%",
    textDecoration: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <Typography className={classes.title} variant="h6">
            Material UI Bootcamp
          </Typography>
        </Link>
        <div>
          <MenuIcon
            className={classes.menuIcon}
            onClick={() => setOpen(true)}
          />
          <div className={classes.linkWrapper}>
            <Link to="/" className={classes.link}>
              What You'll Learn
            </Link>
            <Link to="/" className={classes.link}>
              Questions
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
          </div>

          <Slide direction="right" in={open} mountOnEnter unmountOnExit>
            <div className={classes.linkSmallWrapper}>
              <Typography
                className={classes.closeButton}
                onClick={() => setOpen(false)}
              >
                X
              </Typography>
              <Link
                to="/"
                className={classes.linkSmall}
                onClick={() => setOpen(false)}
              >
                What You'll Learn
              </Link>
              <Link
                to="/"
                className={classes.linkSmall}
                onClick={() => setOpen(false)}
              >
                Questions
              </Link>
              <Link
                to="/about"
                className={classes.linkSmall}
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </div>
          </Slide>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

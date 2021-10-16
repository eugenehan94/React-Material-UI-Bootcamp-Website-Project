import React from "react";

/*Material UI imports */
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
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
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h6">
          Material UI Bootcamp
        </Typography>
        <div>
          <MenuIcon className={classes.menuIcon} />
          <div className={classes.linkWrapper}>
            <Link href="#" className={classes.link}>
              What You'll Learn
            </Link>
            <Link href="#" className={classes.link}>
              Questions
            </Link>
            <Link href="#" className={classes.link}>
              Instructors
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import React from "react";

/*Material UI imports */
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#263648",
    marginTop: theme.spacing(7),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    color: "#fff",
  },
}));

const CoursesBanner = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h3" align="center">
        MATERIAL UI BOOTCAMP
      </Typography>
    </div>
  );
};

export default CoursesBanner;

import React from "react";

/*Material UI imports */
import { Grid, makeStyles, Typography, Box } from "@material-ui/core";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: "3rem",
  },
}));

const AboutAchievements = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item md={4} sm={12}>
          <Box className={classes.iconWrapper}>
            <PeopleAltOutlinedIcon className={classes.icon} />
          </Box>
          <Typography align="center" variant="h4">
            100,000+
          </Typography>
          <Typography align="center" variant="h5">
            Professionals Trained
          </Typography>
        </Grid>
        <Grid item md={4} sm={12}>
          <Box className={classes.iconWrapper}>
            <SchoolOutlinedIcon className={classes.icon} />
          </Box>
          <Typography align="center" variant="h4">
            500+
          </Typography>
          <Typography align="center" variant="h5">
            Industry Instructors
          </Typography>
        </Grid>
        <Grid item md={4} sm={12}>
          <Box className={classes.iconWrapper}>
            <BusinessOutlinedIcon className={classes.icon} />
          </Box>
          <Typography align="center" variant="h4">
            500+
          </Typography>
          <Typography align="center" variant="h5">
            Enterprise Clients
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutAchievements;

import React from "react";

/*Material UI imports */
import {
  Typography,
  Container,
  Grid,
  Box,
  makeStyles,
} from "@material-ui/core";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import AlarmOutlinedIcon from "@material-ui/icons/AlarmOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(6),
  },
  title: {
    paddingBottom: theme.spacing(5),
  },
  gridContainer: {
    marginBottom: theme.spacing(3),
  },
  icons: {
    fontSize: "3rem",
  },
  content: {
    letterSpacing: "0.1rem",
    lineHeight: "2rem",
  },
}));

const CoursesOverview = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container>
        <Typography align="center" variant="h3" className={classes.title}>
          OVERVIEW
        </Typography>
        <Grid container align="center" className={classes.gridContainer}>
          <Grid item md={3} sm={6} xs={12}>
            <Box>
              <ForumOutlinedIcon className={classes.icons} />
              <Typography variant="h5">Mentors Available</Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box>
              <InsertDriveFileOutlinedIcon className={classes.icons} />
              <Typography variant="h5">70hr Prep Module</Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box>
              <AlarmOutlinedIcon className={classes.icons} />
              <Typography variant="h5">40hrs+ Full-Time</Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box>
              <EventOutlinedIcon className={classes.icons} />
              <Typography variant="h5">12 Week Bootcamp</Typography>
            </Box>
          </Grid>
        </Grid>
        <Container maxWidth="md">
          <Typography align="center" className={classes.content} gutterBottom>
            The goal of our Material UI Bootcamp is to transform you into a
            professional Material UI developer. You'll come to understand coding
            logic using popular languages and frameworks like React, while
            learning how to think like a programmer by building software from
            the ground up. Our Material UI bootcamp will provide you with
            mentorship, data-driven curriculum, and a top notch learning
            environment that will launch you into your first Web Developer role.
          </Typography>
          <Typography align="center" className={classes.content}>
            This program has been approved by the Private Training Institutions
            Branch of the Ministry of Advanced Education and Skills Training.
          </Typography>
        </Container>
      </Container>
    </div>
  );
};

export default CoursesOverview;

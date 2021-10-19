import React from "react";
/*Material UI imports */
import { makeStyles, Typography, Container, Box } from "@material-ui/core";

/*Image import*/
import LearnFromHome from "../images/LearnFromHome.png";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#f7f7f7",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  },
  content: {
    marginBottom: theme.spacing(3),
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    objectFit: "cover",
    width: "50%",
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
  },
}));

const CoursesLearnFromHome = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container>
        <Typography align="center" variant="h3" className={classes.title}>
          LEARN FROM HOME
        </Typography>
        <Container maxWidth="md" className={classes.content}>
          <Typography align="center" gutterBottom>
            Since 2000, we’ve been offering outcomes driven education to over
            123,500 career-minded students and successfully delivered immersive
            remote education to cohorts around the country. As of March 2010,
            our programs are online to ensure the safety of our community and
            make our students more ready for the work from home culture that is
            growing in demand.
          </Typography>
          <Typography align="center">
            Same great education & career services, also available online.
          </Typography>
        </Container>
        <Box className={classes.imageWrapper}>
          <img
            src={LearnFromHome}
            alt="Learn From Home"
            className={classes.image}
          />
        </Box>
      </Container>
    </div>
  );
};

export default CoursesLearnFromHome;

import React from "react";

/*Material UI imports*/
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";

/*Image imports */
import ProgrammerFrontComputer from "../images/ProgrammerFrontComputer.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  leftGrid: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  blueBoxSVG: {
    position: "absolute",
    stroke: "#1976d2",
    zIndex: "-99",
    fill: "#1976d2",
  },

  image: {
    width: "90%",
    position: "relative",

    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    // },
  },
}));

const AboutWhy = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={6} sm={12}>
            <Box className={classes.leftGrid}>
              <Box className={classes.imageWrapper}>
                <svg
                  viewBox="0 0 200 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.blueBoxSVG}
                >
                  <rect width="50" height="80" />
                </svg>
                <img
                  src={ProgrammerFrontComputer}
                  alt="Programmer at computer"
                  className={classes.image}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography variant="h4" gutterBottom>
              Why Material UI?
            </Typography>

            <Typography variant="h6" gutterBottom>
              World-class instructors
            </Typography>
            <Typography gutterBottom>
              Our cutting-edge curriculum is developed and taught by the world's
              best digital experts and professionals.
            </Typography>

            <Typography variant="h6" gutterBottom>
              An unmatched network
            </Typography>
            <Typography gutterBottom>
              Gain access to a vibrant community of more than 100,000
              professionals around the world.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Data-driven learning
            </Typography>
            <Typography gutterBottom>
              Synapse, our custom-built, personalized learning platform provides
              an unrivaled learning experience.
            </Typography>

            <Typography variant="h6" gutterBottom>
              A hands-on approach
            </Typography>
            <Typography gutterBottom>
              Our classes offer a project-based learning environment,
              emphasizing collaboration and immediate feedback.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutWhy;

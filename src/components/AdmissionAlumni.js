import React from "react";

/*Material UI Imports*/
import {
  Container,
  Grid,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";

/*Image import */
import SinglePerson from "../images/SinglePerson.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(4),
    },
  },
  image: {
    width: "70%",
    height: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
  },
}));

const AdmissionAlumni = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Box className={classes.imageWrapper}>
              <img
                src={SinglePerson}
                alt="staring into sunset"
                className={classes.image}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="h5">Nicholas Sim</Typography>
            <Typography variant="body2" gutterBottom>
              Material UI Designer at Google
            </Typography>
            <Typography variant="body1">
              {" "}
              Material UI taught the industry standards to prepare me for my
              professional career and set me up to be a strong Designer for
              Google. Feedback from my instructors and classmates also helped me
              improve my delivery and storytelling, so I'm well prepared to
              present my work to stakeholders in a professional setting.{" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AdmissionAlumni;

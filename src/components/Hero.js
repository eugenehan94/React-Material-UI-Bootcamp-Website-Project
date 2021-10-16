import React from "react";
/*Import for components*/
import Showcase from "../images/showcase.svg";

/*Import for Material UI*/
import { Container, Typography, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  imageWrapper: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  image: {
    width: "100%",
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContainer}>
      <Container className={classes.container}>
        <div>
          <Typography variant="h4" gutterBottom>
            Become a Material UI Developer
          </Typography>
          <Typography variant="body1" gutterBottom>
            We focus on teaching our students the fundamentals of the latest and
            greatest technologies to prepare them for their first Material UI
            role.
          </Typography>
          <Button variant="contained" color="primary">
            Start The Enrollment
          </Button>
        </div>
        <div className={classes.imageWrapper}>
          <img src={Showcase} alt="Showcase" className={classes.image} />
        </div>
      </Container>
    </div>
  );
};

export default Hero;

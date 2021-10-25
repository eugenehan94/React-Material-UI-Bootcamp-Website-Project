import React, { useContext } from "react";
import { AppContext } from "./context";

/*Import for components*/
import Showcase from "../images/showcase.svg";
import ButtonSnackbar from "./ButtonSnackbar";
/*Import for Material UI*/
import {
  Container,
  Typography,
  makeStyles,
  Button,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    paddingTop: theme.spacing(3),
    backgroundColor: "#212121",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(8),
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    marginTop: theme.spacing(7),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  button: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
    backgroundColor: "#1976d2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#115293",
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

  const context = useContext(AppContext);
  const { handleClick } = context;

  return (
    <div className={classes.heroContainer}>
      <Container className={classes.container}>
        <div>
          <Typography variant="h3" gutterBottom>
            Become a{" "}
            <Box style={{ color: "#ffc107" }}>Material UI Developer</Box>
          </Typography>
          <Typography variant="body1" gutterBottom>
            We focus on teaching our students the fundamentals of the latest and
            greatest technologies to prepare them for their first Material UI
            role.
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            disableElevation
            onClick={() => handleClick()}
          >
            Start The Enrollment
          </Button>
        </div>
        <div className={classes.imageWrapper}>
          <img src={Showcase} alt="Showcase" className={classes.image} />
        </div>
      </Container>
      <ButtonSnackbar />
    </div>
  );
};

export default Hero;

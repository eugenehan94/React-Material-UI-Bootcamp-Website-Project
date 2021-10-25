import React, { useContext } from "react";
/*Component imports*/
import reactSVG from "../images/reactSVG.svg";
/*React components imports */
import { AppContext } from "./context";

/*Material UI imports*/
import {
  Container,
  Grid,
  Typography,
  Button,
  makeStyles,
  Box,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const useStyles = makeStyles((theme) => ({
  firstRowContainer: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
      textAlign: "center",
    },
  },
  image: {
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
  button: {
    width: "30%",
    justifyContent: "flex-start",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      border: "1px solid grey",
    },
  },
}));

const RowFirst = () => {
  const classes = useStyles();

  const { handleClick } = useContext(AppContext);
  return (
    <div className={classes.firstRowContainer}>
      <Container>
        <Grid container>
          <Grid item md={6} sm={12}>
            <div>
              <img className={classes.image} src={reactSVG} alt="React" />
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <Box className={classes.content}>
              <Typography variant="h4" gutterBottom>
                Learn the Fundamentals: React Js
              </Typography>
              <Typography variant="h6" gutterBottom>
                This course will teach you the skills you need in order to
                become a professional React developer.
              </Typography>
              <Typography variant="body1" gutterBottom>
                The best learning experience paired with a world-class
                instructor. This massive course aims to turn you into hireable
                React developer as fast as humanly possible.
              </Typography>
              <Button
                className={classes.button}
                startIcon={<ChevronRightIcon />}
                onClick={() => handleClick()}
              >
                Read More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RowFirst;

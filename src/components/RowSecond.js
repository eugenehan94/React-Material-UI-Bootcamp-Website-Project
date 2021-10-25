import React, { useContext } from "react";
/*Component imports*/
import { AppContext } from "./context";
import MaterialUI from "../images/MaterialUI.svg";

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
  secondRowContainer: {
    backgroundColor: "#212121",
    color: "#fff",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(5),
      textAlign: "center",
    },
  },
  image: {
    width: "80%",
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
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  },
}));
const RowSecond = () => {
  const classes = useStyles();
  const { handleClick } = useContext(AppContext);
  return (
    <div className={classes.secondRowContainer}>
      <Container>
        <Grid container>
          <Grid item md={6} sm={12}>
            <Box className={classes.content}>
              <Typography variant="h4" gutterBottom>
                Learn Material UI
              </Typography>
              <Typography variant="h6" gutterBottom>
                New to MUI? It's easy to learn if you know where to start! This
                guide will help you to get started quickly.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Developers come to MUI from different backgrounds and with
                different learning styles. Whether you prefer a more theoretical
                or practical approach, we hope you'll find this section helpful.
                Like any unfamiliar technology, MUI does have a learning curve.
                With practice and some patience, you will soon get the hang of
                it.
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
          <Grid item md={6} sm={12}>
            <div>
              <img className={classes.image} src={MaterialUI} alt="React" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RowSecond;

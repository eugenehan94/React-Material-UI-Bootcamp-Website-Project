import React from "react";
/*Component imports*/
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

const useStyles = makeStyles((theme) => ({
  image: {
    width: "80%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid red",
    justifyContent: "center",
    height: "100%",
  },
}));
const RowSecond = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Box className={classes.content}>
              <Typography gutterBottom>Learn Material UI</Typography>
              <Typography gutterBottom>
                New to MUI? It's easy to learn if you know where to start! This
                guide will help you to get started quickly.
              </Typography>
              <Typography gutterBottom>
                Developers come to MUI from different backgrounds and with
                different learning styles. Whether you prefer a more theoretical
                or practical approach, we hope you'll find this section helpful.
                Like any unfamiliar technology, MUI does have a learning curve.
                With practice and some patience, you will soon get the hang of
                it.
              </Typography>
              <Button>Read More</Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <div>
              <img className={classes.image} src={MaterialUI} alt="React" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RowSecond;

import React from "react";
/*Component imports*/
import reactSVG from "../images/reactSVG.svg";

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
    width: "90%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid red",
    justifyContent: "center",
    height: "100%",
  },
}));

const RowFirst = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <div>
              <img className={classes.image} src={reactSVG} alt="React" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.content}>
              <Typography gutterBottom>
                Learn the Fundamentals: React Js
              </Typography>
              <Typography gutterBottom>
                This course will teach you the skills you need in order to
                become a professional React developer.
              </Typography>
              <Typography gutterBottom>
                The best learning experience paired with a world-class
                instructor. This massive course aims to turn you into hireable
                React developer as fast as humanly possible.
              </Typography>
              <Button>Read More</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RowFirst;

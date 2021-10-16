import React from "react";

import {
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  newsletterContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  imputWrapper: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
}));

const NewsLetter = () => {
  const classes = useStyles();
  return (
    <div className={classes.newsletterContainer}>
      <Container className={classes.container}>
        <div className={classes.title}>
          <Typography>Sign Up For Our Newsletter</Typography>
        </div>
        <div className={classes.inputWrapper}>
          <TextField
            id="standard-basic"
            placeholder="Enter Email"
            fullWidth
            InputProps={{
              endAdornment: (
                <Button variant="outlined" disableElevation>
                  Submit
                </Button>
              ),
            }}
            style={{ backgroundColor: "white" }}
          ></TextField>
        </div>
      </Container>
    </div>
  );
};

export default NewsLetter;

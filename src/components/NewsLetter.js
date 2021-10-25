import React, { useContext } from "react";
import { AppContext } from "./context";
/*Material UI imports */
import {
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  newsletterContainer: {
    backgroundColor: "#1976d2",
    padding: theme.spacing(4),
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  title: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginBottom: theme.spacing(2),
    },
  },
  imputWrapper: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
}));

const NewsLetter = () => {
  const classes = useStyles();
  /*useContext*/
  const context = useContext(AppContext);
  const { handleClick } = context;

  return (
    <div className={classes.newsletterContainer}>
      <Container className={classes.container}>
        <div className={classes.title}>
          <Typography variant="h4">Sign Up For Our Newsletter</Typography>
        </div>
        <div className={classes.inputWrapper}>
          <TextField
            id="standard-basic"
            placeholder="Enter Email"
            fullWidth
            InputProps={{
              endAdornment: (
                <Button
                  variant="outlined"
                  disableElevation
                  onClick={handleClick}
                >
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

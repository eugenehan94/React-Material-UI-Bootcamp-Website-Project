import React, { useContext } from "react";
import { AppContext } from "./context";
import ButtonSnackbar from "./ButtonSnackbar";
/*Material UI imports*/
import {
  Container,
  Typography,
  Grid,
  Box,
  makeStyles,
  Button,
} from "@material-ui/core";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(7),
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    backgroundColor: "#212121",
    color: "#fff",
  },
  contentWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: "#1976d2",
    color: "white",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },

    "&:hover": {
      backgroundColor: "#115293",
    },
  },
  iconWrapper: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    fontSize: "20rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: "10rem",
    },
  },
}));

const AdmissionHero = () => {
  const classes = useStyles();
  const { handleClick } = useContext(AppContext);
  return (
    <div className={classes.container}>
      <ButtonSnackbar />
      <Container>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Box className={classes.contentWrapper}>
              <Typography variant="h4">COVID-19 RELIEF SCHOLARSHIP</Typography>

              <Typography variant="body1">
                Over the last several months we’ve seen unprecedented changes to
                our world, economy and lives, as a result of COVID-19. For many
                people this has meant interruptions to their employment and
                school, resulting in a loss of income or potential income.
              </Typography>
              <Box>
                <Button
                  className={classes.button}
                  variant="contained"
                  disableElevation
                  onClick={() => handleClick()}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className={classes.iconWrapper}>
              <MoneyOffIcon className={classes.icon} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AdmissionHero;

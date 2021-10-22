import React from "react";

/*Material UI imports*/
import {
  Container,
  Typography,
  Grid,
  Box,
  makeStyles,
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
  return (
    <div className={classes.container}>
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

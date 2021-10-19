import React from "react";

/*Material UI imports */
import {
  Container,
  Typography,
  Box,
  makeStyles,
  Grid,
} from "@material-ui/core";
import StorageIcon from "@material-ui/icons/Storage";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import CloudDoneIcon from "@material-ui/icons/CloudDone";
import BarChartIcon from "@material-ui/icons/BarChart";
import BugReportIcon from "@material-ui/icons/BugReport";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: "2rem",
    paddingRight: theme.spacing(1),
  },
  gridWrapper: {
    marginTop: theme.spacing(5),
  },
}));

const AboutCuttingEdge = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container>
        <Typography align="center" variant="h4" gutterBottom>
          Cutting Edge Material UI
        </Typography>
        <Container maxWidth="sm">
          <Typography align="center" variant="h6">
            Material UI offers a full spectrum of cutting-edge digital learning,
            giving professionals and organizations of all sizes the skills they
            need to thrive in the digital economy.
          </Typography>
        </Container>
        <div className={classes.gridWrapper}>
          <Grid container spacing={1}>
            <Grid item sm={2} xs={6}>
              <Box className={classes.iconWrapper}>
                <StorageIcon className={classes.icon} />
                <Typography variant="h6">Storage</Typography>
              </Box>
            </Grid>
            <Grid item sm={2} xs={6}>
              <Box className={classes.iconWrapper}>
                <DeveloperModeIcon className={classes.icon} />{" "}
                <Typography variant="h6">Develop</Typography>
              </Box>
            </Grid>
            <Grid item sm={2} xs={6}>
              <Box className={classes.iconWrapper}>
                <CloudDoneIcon className={classes.icon} />{" "}
                <Typography variant="h6">Cloud</Typography>
              </Box>
            </Grid>
            <Grid item sm={2} xs={6}>
              <Box className={classes.iconWrapper}>
                <BarChartIcon className={classes.icon} />{" "}
                <Typography variant="h6">Graphing</Typography>
              </Box>
            </Grid>
            <Grid item sm={2} xs={6}>
              <Box className={classes.iconWrapper}>
                <BugReportIcon className={classes.icon} />{" "}
                <Typography variant="h6">Debug</Typography>
              </Box>
            </Grid>
            <Grid item sm={2} xs={6}>
              <Box className={classes.iconWrapper}>
                <BatteryChargingFullIcon className={classes.icon} />{" "}
                <Typography variant="h6">Charging</Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default AboutCuttingEdge;

import React from "react";

/*Material UI import*/
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import PhonelinkOutlinedIcon from "@material-ui/icons/PhonelinkOutlined";
import PaletteOutlinedIcon from "@material-ui/icons/PaletteOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import DirectionsBoatOutlinedIcon from "@material-ui/icons/DirectionsBoatOutlined";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#212121",
    color: "#fff",
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  },
  contentWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  icon: {
    fontSize: "4rem",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
}));

const AboutPartnership = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={6} sm={12}>
              <Box className={classes.contentWrapper}>
                <Typography variant="h4" gutterBottom>
                  Transforming Everyday Organization
                </Typography>
                <Typography variant="h6">
                  Material UI has worked with some of the largest organizations
                  in the world, providing flexible, hands-on corporate training
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Grid container>
                <Grid item xs={4}>
                  <PhonelinkOutlinedIcon className={classes.icon} />
                </Grid>
                <Grid item xs={4}>
                  <PaletteOutlinedIcon className={classes.icon} />
                </Grid>
                <Grid item xs={4}>
                  <MonetizationOnOutlinedIcon className={classes.icon} />
                </Grid>
                <Grid item xs={4}>
                  <LocalHospitalOutlinedIcon className={classes.icon} />
                </Grid>
                <Grid item xs={4}>
                  <LanguageOutlinedIcon className={classes.icon} />
                </Grid>
                <Grid item xs={4}>
                  <DirectionsBoatOutlinedIcon className={classes.icon} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default AboutPartnership;

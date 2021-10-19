import React from "react";

/*Material UI imports */
import { Box, Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: "#1976d2",
  },

  bannerBox: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
    color: "#fff",
  },
}));

const AboutBanner = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Box className={classes.bannerBox}>
        <Container maxWidth="lg">
          <Typography align="center" variant="h4">
            A LONG TIME AGO IN A DIGITAL WORLD FAR, FAR AWAY...
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default AboutBanner;

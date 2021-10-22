import React from "react";

/*Material UI imports */
import {
  Typography,
  Container,
  makeStyles,
  Grid,
  Box,
} from "@material-ui/core";

/*react icons */
import { AiFillFire } from "react-icons/ai";
import { GiUnicorn } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { GiBigGear } from "react-icons/gi";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(7),
  },
  title: {
    marginBottom: theme.spacing(5),
  },
  iconWrapper: {
    display: "flex",

    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  icon: {
    fontSize: "5rem",
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  content: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  contentWrapper: {
    display: "flex",
    marginBottom: theme.spacing(2),

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));

const AdmissionWeLookFor = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className={classes.title}
        >
          WE LOOK FOR:
        </Typography>

        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Box className={classes.contentWrapper}>
              <Box className={classes.iconWrapper}>
                <AiFillFire className={classes.icon} />
              </Box>
              <Box className={classes.content}>
                <Typography variant="h4" gutterBottom>
                  Passion
                </Typography>
                <Typography variant="body1">
                  {" "}
                  We believe that the best developers are passionate, lifelong
                  learners. As for you: you see bootcamp as more than just the
                  means to an end, and it shows in your ever-growing list of
                  side projects.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className={classes.contentWrapper}>
              <Box className={classes.iconWrapper}>
                <GiUnicorn className={classes.icon} />
              </Box>
              <Box className={classes.content}>
                <Typography variant="h4" gutterBottom>
                  Culture fit
                </Typography>
                <Typography variant="body1">
                  {" "}
                  We're an array of personalities from every imaginable
                  background, and the result is amazing. If you are kind, quick,
                  and a little quirky, we will be fast friends.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            {" "}
            <Box className={classes.contentWrapper}>
              <Box className={classes.iconWrapper}>
                <GiBigGear className={classes.icon} />
              </Box>
              <Box className={classes.content}>
                <Typography variant="h4" gutterBottom>
                  Grit
                </Typography>
                <Typography variant="body1">
                  {" "}
                  Becoming a developer is far from easy. Our program requires
                  motivation, determination, hard work and resilience. You're
                  goal-oriented and have a solid idea of what you want to
                  accomplish. You get it done.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className={classes.contentWrapper}>
              <Box className={classes.iconWrapper}>
                <FaLaptopCode className={classes.icon} />
              </Box>
              <Box className={classes.content}>
                <Typography variant="h4" gutterBottom>
                  Aptitude for coding
                </Typography>
                <Typography variant="body1">
                  {" "}
                  Some brains are just wired for coding, no matter their
                  previous exposure or education. You think in a logical,
                  structured way that lends itself beautifully to a career as a
                  developer.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AdmissionWeLookFor;

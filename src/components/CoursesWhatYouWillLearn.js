import React, { useState } from "react";

/*Material UI imports*/
import {
  Typography,
  makeStyles,
  Grid,
  Box,
  Container,
} from "@material-ui/core";
import { SiMaterialui, SiReact, SiJavascript, SiCss3 } from "react-icons/si";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  },
  selectionParent: {
    width: "100%",
  },
  selectionWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: theme.spacing(3),

    width: "15rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  icon: {
    fontSize: "3rem",
    paddingRight: "1rem",
  },
  selectionHeadingZero: {
    color: (props) => (props.selection === 0 ? "#d25150" : null),
  },
  selectionHeadingOne: {
    color: (props) => (props.selection === 1 ? "#d25150" : null),
  },
  selectionHeadingTwo: {
    color: (props) => (props.selection === 2 ? "#d25150" : null),
  },
  selectionHeadingThree: {
    color: (props) => (props.selection === 3 ? "#d25150" : null),
  },
  rightTitle: {
    color: "#d25150",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
  },
}));

const CoursesWhatYouWillLearn = () => {
  const [selection, setSelection] = useState(0);
  console.log(selection);
  const classes = useStyles({ selection });
  return (
    <div className={classes.container}>
      <Typography align="center" variant="h3" className={classes.title}>
        WHAT YOU WILL LEARN:
      </Typography>
      <Container maxWidth="md">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Box className={classes.selectionParent}>
              <Box
                onClick={() => setSelection(0)}
                className={classes.selectionWrapper}
              >
                <SiMaterialui className={classes.icon} />
                <Typography className={classes.selectionHeadingZero}>
                  Material UI
                </Typography>
              </Box>
            </Box>
            <Box className={classes.selectionParent}>
              <Box
                onClick={() => setSelection(1)}
                className={classes.selectionWrapper}
              >
                <SiReact className={classes.icon} />
                <Typography className={classes.selectionHeadingOne}>
                  {" "}
                  React
                </Typography>
              </Box>
            </Box>
            <Box className={classes.selectionParent}>
              <Box
                onClick={() => setSelection(2)}
                className={classes.selectionWrapper}
              >
                <SiJavascript className={classes.icon} />
                <Typography className={classes.selectionHeadingTwo}>
                  Javascript{" "}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.selectionParent}>
              <Box
                onClick={() => setSelection(3)}
                className={classes.selectionWrapper}
              >
                <SiCss3 className={classes.icon} />
                <Typography className={classes.selectionHeadingThree}>
                  {" "}
                  HTML, CSS and More{" "}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box>
              {selection === 0 ? (
                <Box>
                  <Typography
                    variant="h4"
                    gutterBottom
                    className={classes.rightTitle}
                  >
                    Material UI
                  </Typography>
                </Box>
              ) : null}
              {selection === 1 ? (
                <Box>
                  <Typography
                    variant="h4"
                    gutterBottom
                    className={classes.rightTitle}
                  >
                    React
                  </Typography>
                </Box>
              ) : null}
              {selection === 2 ? (
                <Box>
                  <Typography variant="h4" className={classes.rightTitle}>
                    Javascript
                  </Typography>
                </Box>
              ) : null}
              {selection === 3 ? (
                <Box>
                  <Typography variant="h4" className={classes.rightTitle}>
                    HTML, CSS and More
                  </Typography>
                </Box>
              ) : null}
              <hr />
              {selection === 0 ? (
                <Box>
                  <Typography>
                    Material Design was to be gradually extended throughout
                    Google's array of web and mobile products, providing a
                    consistent experience across all platforms and applications.
                    Google has also released application programming interfaces
                    (APIs) for third-party developers to incorporate the design
                    language into their applications
                  </Typography>
                </Box>
              ) : null}
              {selection === 1 ? (
                <Typography>
                  In a short span of time, React JS has become one of the most
                  used JavaScript frameworks. While building a single page
                  application, you'll learn a new way to think about structuring
                  your user interface by using components, one way data flow and
                  the Virtual DOM
                </Typography>
              ) : null}
              {selection === 2 ? (
                <Typography>
                  JavaScript is the universal programming language of the web.
                  You'll gain firsthand experience with Javascript ecosystems,
                  as well as modern tooling and libraries such as Babel and
                  webpack.
                </Typography>
              ) : null}
              {selection === 3 ? (
                <Typography>
                  HTML and CSS are the building blocks of the modern web. You'll
                  learn to create gorgeous responsive UIs for web apps, not only
                  with HTML5 and CSS3 but also modern front-end tools like Babel
                  and Webpack.
                </Typography>
              ) : null}
              <hr />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CoursesWhatYouWillLearn;

import React from "react";

/*Material UI imports */
import { Container, Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(8),
  },

  underlineWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
  },
  underline: {
    width: "20rem",
    height: "0.1rem",
    backgroundColor: "red",
  },
  content: {
    letterSpacing: "0.1rem",
    lineHeight: "2rem",
  },

  yellowHighlight: {
    backgroundColor: "#ffc107",
    padding: theme.spacing(0.5),
    color: "#fff",
  },
  greyHighlight: {
    backgroundColor: "#666666",
    color: "#fff",
    padding: theme.spacing(0.5),
  },
}));

const OurStory = () => {
  const classes = useStyles();
  return (
    <div>
      {/* Our Story */}
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" align="center" gutterBottom>
          Our Story.
        </Typography>
        <Box className={classes.underlineWrapper}>
          <div className={classes.underline}></div>
        </Box>
        <Typography gutterBottom className={classes.content}>
          Material UI bootcamp was created in 2000 by a team of{" "}
          <span className={classes.yellowHighlight}>software developers</span>{" "}
          with a passion for code, mentorship, and education. Our mission: to
          continuously find the best ways to train the next generation of
          developers and transform the way tech education is delivered. twenty
          years later, we have introduced over 200,000 Canadians to the practice
          of coding and{" "}
          <span className={classes.greyHighlight}>
            launched 9,000+ graduates into careers as professional developers.
          </span>{" "}
          With the support of a brilliant team of instructors and mentors who
          view coding as the ultimate craft, we continue to empower students,
          launch careers, and contribute to the incredible growth of Canada's
          tech industry.
        </Typography>
      </Container>
    </div>
  );
};

export default OurStory;

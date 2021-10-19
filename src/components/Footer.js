import React from "react";

import { Container, Typography, makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: "#212121",
    padding: theme.spacing(3),
    color: "#fff",
  },
  link: {
    color: "#ffc107",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <Container>
        <Typography align="center">
          Copyright©2020 Developed By{" "}
          <Link
            className={classes.link}
            href="https://eugenehan.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Eugene Han
          </Link>
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;

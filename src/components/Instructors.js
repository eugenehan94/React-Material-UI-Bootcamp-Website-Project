import React from "react";

/*Image imports*/
import instructor1 from "../images/instructor1.jpg";
import instructor2 from "../images/instructor2.jpg";
import instructor3 from "../images/instructor3.jpg";
import instructor4 from "../images/instructor4.jpg";

/*Material UI Imports*/
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  instructorContainer: {
    backgroundColor: "#1976d2",
    color: "#fff",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(10),
  },
  imageWrapper: {
    textAlign: "center",
  },
  image: {
    borderRadius: "50%",
  },
}));

const Instructors = () => {
  const classes = useStyles();
  return (
    <div className={classes.instructorContainer}>
      <Container>
        <Typography align="center" variant="h3" gutterBottom>
          Our Instructors
        </Typography>
        <Typography align="center" variant="h5" gutterBottom>
          Our instructors all have 5+ years working as Material UI specialist.
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={3} sm={12}>
            <Card>
              <CardContent>
                <Box className={classes.imageWrapper}>
                  <img
                    src={instructor1}
                    alt="instructor"
                    className={classes.image}
                  />
                </Box>
                <Typography align="center" variant="h4" gutterBottom>
                  John Doe
                </Typography>
                <Typography align="center">
                  John Doe work experience consists of 1 year of wildlife
                  management and research experience in Wisconsin and 5 years of
                  course work, teaching, and research for advanced degrees
                  before starting his Forest Service career.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} sm={12}>
            <Card>
              <CardContent>
                <Box className={classes.imageWrapper}>
                  <img
                    src={instructor2}
                    alt="instructor"
                    className={classes.image}
                  />
                </Box>
                <Typography align="center" variant="h4" gutterBottom>
                  Jane Doe
                </Typography>
                <Typography align="center">
                  Jane Doe is an American entrepreneur, media proprietor,
                  investor, and computer engineer. He is the founder and
                  executive chairman of Angular, where he previously served as
                  the president and CEO.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} sm={12}>
            <Card>
              <CardContent>
                <Box className={classes.imageWrapper}>
                  <img
                    src={instructor3}
                    alt="instructor3"
                    className={classes.image}
                  />
                </Box>
                <Typography align="center" variant="h4" gutterBottom>
                  Sara Smith
                </Typography>
                <Typography align="center">
                  Sara Smith is an American business magnate, software
                  developer, investor, author, and philanthropist. He is a
                  co-founder of Material UI soft, along with his late childhood
                  friend John Doe. She loves here job at Material UI.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} sm={12}>
            <Card>
              <CardContent>
                <Box className={classes.imageWrapper}>
                  <img
                    src={instructor4}
                    alt="instructor4"
                    className={classes.image}
                  />
                </Box>
                <Typography align="center" variant="h4" gutterBottom>
                  Steve Smith
                </Typography>
                <Typography align="center">
                  Steve Smith is an entrepreneur and business magnate. He is the
                  founder, CEO, and Chief Engineer at React; early stage
                  investor, CEO, and Product Architect of Material UI, Inc.;
                  founder of The React Company.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Instructors;

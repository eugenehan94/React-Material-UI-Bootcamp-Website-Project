import React from "react";

/*Material UI imports */
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";
import ComputerIcon from "@material-ui/icons/Computer";
import PersonIcon from "@material-ui/icons/Person";
import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(8),
  },
  gridChild: {
    display: "flex",
  },
  card: {
    color: "#fff",
    backgroundColor: "#272c34",
  },
  cardContent: {
    textAlign: "center",
  },
  button: {
    color: "#fff",
    backgroundColor: "#1976d2",
    "&:hover": {
      backgroundColor: "#115293",
    },
  },
}));
const Showcase = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item md={4} sm={12} className={classes.gridChild}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <ComputerIcon />
              <Typography variant="h5" gutterBottom>
                Virtual
              </Typography>
              <Typography>
                Our team tailors our web design services to your company and its
                unique needs. That’s why you can customize every feature of our
                services to your company, products or services, and goals. The
                result is a website that your company — and your visitors —
                loves. When your brand creates a genuine connection with
                customers and employees.
              </Typography>
              <Button className={classes.button}>Read More</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sm={12} className={classes.gridChild}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <PersonIcon />
              <Typography variant="h5" gutterBottom>
                Hybrid
              </Typography>
              <Typography>
                We maximize the results of your website design or redesign plan,
                as well as improve your digital marketing strategy, by ensuring
                your website follows best practices for search engine
                optimization (SEO). SEO refers to an umbrella of techniques that
                enhance your website’s ranking for relevant search results.
              </Typography>
              <Button className={classes.button}>Read More</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sm={12} className={classes.gridChild}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <PeopleIcon />
              <Typography variant="h5" gutterBottom>
                In Person
              </Typography>
              <Typography>
                Whether you’re an ecommerce store, brick-and-mortar business, or
                service provider, our designers can create the webpages that
                your company needs to reach, inform, and convert your target
                audience. As a full-service digital marketing agency, we also
                offer content marketing services to enhance your strategy.
              </Typography>
              <Button className={classes.button}>Read More</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Showcase;

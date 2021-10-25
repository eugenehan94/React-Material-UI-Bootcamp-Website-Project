import React from "react";

import {
  makeStyles,
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#FFE5B4",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    maxHeight: "50rem",
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      paddingBottom: theme.spacing(18),
    },
  },
  accordion: {
    backgroundColor: "transparent",
  },
  heading: {
    fontSize: "1.2rem",
  },
  headingActive: {
    fontSize: "1.2rem",
    color: "#d25150",
  },
}));

const AdmissionProcess = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.container}>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={6} sm={12}>
            <Typography variant="h4" gutterBottom>
              ADMISSIONS PROCESS.
            </Typography>
            <Typography>
              Our students put their trust in us, so we hold ourselves to the
              highest standards to ensure that everyone coming into our program
              is set up for success.
            </Typography>
          </Grid>
          <Grid item md={6} sm={12}>
            <Accordion
              className={classes.accordion}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  className={
                    expanded === "panel1"
                      ? classes.headingActive
                      : classes.heading
                  }
                >
                  Apply Online
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A short 5-10 minute application for you to introduce yourself,
                  including your education and coding experience, plus your
                  super power. You know, the important details that will help us
                  get to know you. New cohorts fill up on a rolling basis so
                  make sure to submit your application as soon as possible!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className={classes.accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  className={
                    expanded === "panel2"
                      ? classes.headingActive
                      : classes.heading
                  }
                >
                  {" "}
                  Interview
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can book in for your group interview during the
                  application process, otherwise you will be emailed with a link
                  to book it in later. We want to meet you, get to know you
                  better and talk all about bootcamp. This is also your
                  opportunity to ask us anything and potentially to meet some of
                  your future classmates!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              className={classes.accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography
                  className={
                    expanded === "panel3"
                      ? classes.headingActive
                      : classes.heading
                  }
                >
                  Logic and Technical Assessments
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  After the group interview, successful candidates will be sent
                  over instructions to take our logic test and materials to
                  prepare for and take the technical assessment. You do not need
                  to have prior experience in coding or data science to perform
                  well on these tests. These are both multiple-choice and done
                  online on your own time within a 2-week period of your group
                  interview.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={classes.accordion}
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography
                  className={
                    expanded === "panel4"
                      ? classes.headingActive
                      : classes.heading
                  }
                >
                  Prep Modules
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The first step to becoming a developer is laying your
                  foundation with our Prep Modules. The 70 hours you'll spend on
                  completing prep will introduce the basic technologies you'll
                  use throughout bootcamp, including: HTML, CSS, Ruby,
                  JavaScript, and git. You are required to complete the Prep
                  Modules before your first day of bootcamp.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AdmissionProcess;

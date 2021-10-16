import React from "react";

/*Material UI imports*/
import {
  Container,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  accordionContainer: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(10),
  },
}));

const Faq = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.accordionContainer}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>

        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant="h6">Do you help me find a job?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The simple answer is yes, you can pay someone to find you a job.
              There are companies and individuals that will help you with
              certain aspects of the job search. You can work with managed job
              search professionals, staffing agencies, recruiters, headhunters,
              career coaches, and others.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography variant="h6">How do I sign up?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A Create your account pop up box will appear, and you’ll be guided
              through our sign up experience. You’ll be prompted to enter
              information such as your name and phone number or email address.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography variant="h6">What do I need to know?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I think the key thing is to first distinguish between a career and
              a job. By taking a strategic career approach rather than a
              job-centric (transactional) approach to this question, you are
              much more likely to make choices that will make you happier in the
              long run.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography variant="h6">
              How much does it cost to attend?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Compared to many countries, studying in Canada is very affordable.
              You will likely need between C$20,000 and C$30,000 annually to
              cover tuition. This range is an average only and will vary
              according to the institution and program in which you are
              enrolled.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography variant="h6">Where exactly are you located?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              On the strip we are located inside the Linq Hotel Casino which is
              between Harrahs and the Flamingo.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;

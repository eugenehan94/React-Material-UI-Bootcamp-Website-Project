import React from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
  },
}));

const CoursesFAQ = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={classes.container}>
      <Container maxWidth="md">
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            FAQ
          </Typography>
        </Container>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
            <Typography variant="h5">
              Do I get a diploma upon graduation
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              While our philosophy is based around mastery and not credentials,
              we do provide our Bootcamp graduates with diplomas upon
              graduation.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
            <Typography variant="h5">
              How do coding bootcamps compare to traditional education, like a
              Computer Science degree?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Material UI practices a flipped, immersive model of education that
              puts the emphasis on the development of practical skills through
              building real-world applications using an incremental and
              cumulative collection of tools and best practices. Lectures take
              up a maximum of two and a half hours in any given day, with
              another eight to ten hours being spent each day working in a lab
              setting. You can expect to introduce yourself to new concepts
              through readings and exercises, getting your knowledge bolstered
              and backfilled with lectures throughout the week.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
            <Typography variant="h5">
              How much programming experience do I need to take your Bootcamp?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No formal education is required to being admitted to Material UI
              While having some coding knowledge always helps, your background
              does not matter as much as a genuine interest in code or data
              science and a raw determination to succeed in this challenging
              environment. If you’re interested in our bootcamp but brand new to
              code or data, our intro courses are a perfect way to figure out if
              you're ready for a career as a developer or data analyst.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
            <Typography variant="h5">
              What are your graduate employment rates?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              97% of our job-seeking graduates have been hired after graduating,
              and 87% within 180 days of graduation! You can view the complete
              breakdown of our employment statistics in our Student Outcomes
              Report.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
};

export default CoursesFAQ;

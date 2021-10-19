import React from "react";

/*React component imports */
import Navbar from "../components/Navbar";
import AboutBanner from "../components/AboutBanner";
import OurStory from "../components/OurStory";
import AboutAchievements from "../components/AboutAchievements";
import AboutWhy from "../components/AboutWhy";
import AboutPartnership from "../components/AboutPartnership";
import AboutCuttingEdge from "../components/AboutCuttingEdge";
import AboutImageList from "../components/AboutImageList";
import Footer from "../components/Footer";
/*Image imports*/
// import ComputerWithProgrammingLanguages from "../images/ComputerWithProgrammingLanguages.png";

/*Material UI imports */
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    overflowX: "hidden",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Navbar />
      <AboutBanner />
      <OurStory />
      <AboutAchievements />
      <AboutWhy />
      <AboutPartnership />
      <AboutCuttingEdge />
      <AboutImageList />
      <Footer />
    </div>
  );
};

export default About;

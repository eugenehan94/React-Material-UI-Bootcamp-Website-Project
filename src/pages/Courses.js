import React from "react";

/*React component imports */
import Navbar from "../components/Navbar";
import CoursesBanner from "../components/CoursesBanner";
import CoursesOverview from "../components/CoursesOverview";
import CoursesWhatYouWillLearn from "../components/CoursesWhatYouWillLearn";
import CoursesLearnFromHome from "../components/CoursesLearnFromHome";
import CoursesImageList from "../components/CoursesImageList";
import CoursesFAQ from "../components/CoursesFAQ";
import Footer from "../components/Footer";
/*Material UI imports */
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
  },
}));

const Courses = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Navbar />
      <CoursesBanner />
      <CoursesOverview />
      <CoursesWhatYouWillLearn />
      <CoursesLearnFromHome />
      <CoursesImageList />
      <CoursesFAQ />
      <Footer />
    </div>
  );
};

export default Courses;

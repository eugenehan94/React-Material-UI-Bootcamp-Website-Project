import React from "react";
/*Material UI imports */
import { ImageList, ImageListItem, Box, makeStyles } from "@material-ui/core";

/*Image imports*/
import Face1 from "../images/Face1.jpg";
import Face2 from "../images/Face2.jpg";
import Face3 from "../images/Face3.jpg";
import Face4 from "../images/Face4.jpg";
import Face5 from "../images/Face5.jpg";
import Face6 from "../images/Face6.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  imageListContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  imageSmallerListContainer: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
}));

const CoursesImageList = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Box>
        <ImageList cols={6} className={classes.imageListContainer}>
          <ImageListItem cols={1}>
            <img src={Face1} alt="Women's face" />
          </ImageListItem>
          <ImageListItem cols={1}>
            <img src={Face4} alt="Men's face" />
          </ImageListItem>
          <ImageListItem cols={1}>
            <img src={Face2} alt="Women's face" />
          </ImageListItem>
          <ImageListItem cols={1}>
            <img src={Face5} alt="Men's face" />
          </ImageListItem>
          <ImageListItem cols={1}>
            <img src={Face3} alt="Women's face" />
          </ImageListItem>
          <ImageListItem cols={1}>
            <img src={Face6} alt="Men's face" />
          </ImageListItem>
        </ImageList>
        {/* Smaller screen image list */}
        <ImageList cols={3} className={classes.imageSmallerListContainer}>
          <ImageListItem cols={1}>
            <img src={Face1} alt="Women's face" />
          </ImageListItem>
          <ImageListItem cols={1}>
            <img src={Face4} alt="Men's face" />
          </ImageListItem>
          <ImageListItem cols={1}>
            <img src={Face2} alt="Women's face" />
          </ImageListItem>
        </ImageList>
      </Box>
    </div>
  );
};

export default CoursesImageList;

import React from "react";

/*Material UI imports*/
import { Box, makeStyles, ImageList, ImageListItem } from "@material-ui/core";

/*Image imports*/
import CafeGroupPhoto from "../images/CafeGroupPhoto.jpg";
import BusinessGroupMeeting from "../images/BusinessGroupMeeting.jpg";
import BuildingsPortrait from "../images/BuildingsPortrait.jpg";
const useStyles = makeStyles((theme) => ({
  imageList: {
    width: "100%",
    height: "100%",
  },
}));

const AboutImageList = () => {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <ImageList rowHeight={300} className={classes.imageList} cols={2}>
          <ImageListItem cols={1}>
            <img src={BusinessGroupMeeting} alt="Business Group Meeting" />
          </ImageListItem>
          <ImageListItem cols={1}>
            <img src={CafeGroupPhoto} alt="Cafe Group Project" />
          </ImageListItem>
          <ImageListItem cols={2}>
            <img
              src={BuildingsPortrait}
              alt="Buildings From a Distance"
              style={{ objectFit: "cover" }}
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </div>
  );
};

export default AboutImageList;

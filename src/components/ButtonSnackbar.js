import React, { useContext } from "react";
import { AppContext } from "./context";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ButtonSnackbar = () => {
  const context = useContext(AppContext);
  const { open, handleClose } = context;
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
      >
        <Alert onClose={handleClose} severity="success">
          Button clicked successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ButtonSnackbar;

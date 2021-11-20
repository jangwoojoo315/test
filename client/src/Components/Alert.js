import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import Button from "@material-ui/core/Button";
import { AlertStyled } from "../Css/AlertStyled";
const Alert = forwardRef((props, ref) => {
  const { alert } = props;
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useImperativeHandle(ref, () => ({
    setOpen,
    handleClose,
  }));

  return (
    <AlertStyled>
      <Snackbar
        className="snackbar"
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={alert}
        ContentProps={{
          sx: {
            background: "#F6F4FF",
            fontFamily: "NanumSquare",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "18px",
            color: "#854DF3",
          },
        }}
        action={
          <Button color="inherit" size="small" onClick={handleClose}>
            <img src="/images/check.png" alt="check" />
          </Button>
        }
      />
    </AlertStyled>
  );
});

export default Alert;

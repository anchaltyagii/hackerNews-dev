import React from "react";
import { Button, styled } from "@mui/material";
// import "./Button.scss";

const CustomButton = (props) => {
  const { title, onClick, disabled, className } = props;
  const PrimaryButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    backgroundColor: "orange",
    "&:hover": {
      backgroundColor: "orange",
      boxShadow: "none",
    },
  });

  return (
    <>
      <PrimaryButton
        variant="contained"
        disabled={disabled}
        onClick={onClick}
        className={`button ${className}`}
      >
        {title}
      </PrimaryButton>
    </>
  );
};

export default CustomButton;

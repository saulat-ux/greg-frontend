"use client";
import { Box, Button } from "@mui/material";
import styles from "../../styles/Create.module.sass";

import React, { useState } from "react";

const StepThird = ({ handleNextStep }) => {
  const handleButtonClick = (buttonName) => {
    setButtons((prevState) => {
      const newState = {
        ...prevState,
        [buttonName]: {
          ...prevState[buttonName],
          isActive: !prevState[buttonName].isActive, // Toggle button state
        },
      };

      // Log button name and its value to the console
      console.log(
        `Button: ${buttonName}, Value: ${newState[buttonName].value}`
      );
      return newState;
    });
  };

  const [buttons, setButtons] = useState({
    facebook: { isActive: false, value: 1 },
    instagram: { isActive: false, value: 2 },
    tiktok: { isActive: false, value: 3 },
    x: { isActive: false, value: 4 },
    ghl: { isActive: false, value: 5 },
  });
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <p style={{ fontWeight: "bold", fontSize: "16px" }}>Links Accounts</p>
        <p style={{ fontWeight: "bold", fontSize: "14px" }}>
          Connect your account to seamlessly integrate and enhance accessibility
          with our software.
        </p>
        <Button
          variant="contained"
          className={`${styles.grey} ${
            buttons.facebook.isActive ? styles["black-button"] : ""
          }`}
          onClick={() => handleButtonClick("facebook")}
          disableElevation
          sx={{ mt: 1 }}
          style={{ borderRadius: "0", padding: "7px", width: "88%" }}
        >
          Connect Facebook
        </Button>
        <Button
          variant="contained"
          className={`${styles.grey} ${
            buttons.instagram.isActive ? styles["black-button"] : ""
          }`}
          onClick={() => handleButtonClick("instagram")}
          disableElevation
          sx={{ mt: 2 }}
          style={{ borderRadius: "0", padding: "7px", width: "88%" }}
        >
          Connect Instagram
        </Button>
        <Button
          variant="contained"
          className={`${styles.grey} ${
            buttons.tiktok.isActive ? styles["black-button"] : ""
          }`}
          onClick={() => handleButtonClick("tiktok")}
          disableElevation
          sx={{ mt: 2 }}
          style={{ borderRadius: "0", padding: "7px", width: "88%" }}
        >
          Connect Tiktok
        </Button>
        <Button
          variant="contained"
          className={`${styles.grey} ${
            buttons.x.isActive ? styles["black-button"] : ""
          }`}
          onClick={() => handleButtonClick("x")}
          disableElevation
          sx={{ mt: 2 }}
          style={{ borderRadius: "0", padding: "7px", width: "88%" }}
        >
          Connect with X
        </Button>
        <Button
          variant="contained"
          className={`${styles.grey} ${
            buttons.ghl.isActive ? styles["black-button"] : ""
          }`}
          onClick={() => handleButtonClick("ghl")}
          disableElevation
          sx={{ mt: 2, mb: 4 }}
          style={{ borderRadius: "0", padding: "7px", width: "88%" }}
        >
          Connect with GHL
        </Button>
        <Box
          className={`${styles.boxMarginTop} ${styles.boxFlexCenter} ${styles.margin}`}
        >
          <Button
            variant="contained"
            className={styles.grey}
            style={{ width: "45%" }}
            onClick={handleNextStep}
          >
            Skip
          </Button>
          <Button
            variant="contained"
            className={styles.grey}
            style={{ width: "45%" }}
            onClick={handleNextStep}
          >
            Next
          </Button>
        </Box>
      </div>
    </>
  );
};

export default StepThird;

import { Button, TextField } from "@mui/material";
import styles from "../../styles/Create.module.sass";

import React from "react";

const StepSecond = ({ handleNextStep }) => {
  return (
    <>
      <h3>About</h3>
      <br />
      <TextField
        id="outlined-multiline-static"
        label="About"
        multiline
        rows={12}
        style={{ width: "100%" }}
      />
      <Button
        variant="contained"
        className={styles.grey}
        style={{ width: "100%", marginTop: 10 }}
        onClick={handleNextStep}
      >
        Next
      </Button>
    </>
  );
};

export default StepSecond;

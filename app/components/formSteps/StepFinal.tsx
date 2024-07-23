import { Box, Button, TextField } from "@mui/material";
import styles from "../../styles/Create.module.sass";

import React from "react";

const StepFinal = ({ handleSubmit }) => {
  return (
    <>
      <Box style={{ marginTop: "50px", paddingRight: "80px" }}>
        <p style={{ fontWeight: "bold", fontSize: "16px" }}>select voice</p>
        <TextField
          hiddenLabel
          id="voice"
          name="voice"
          placeholder="voice"
          variant="filled"
          InputProps={{
            disableUnderline: true,
            sx: {
              borderRadius: 0,
              backgroundColor: "rgb(245, 245, 245)",
              "&:hover": {
                backgroundColor: "rgb(235, 235, 235)",
              },
            },
          }}
          fullWidth
          size="small"
        />
        <p style={{ fontWeight: "bold", fontSize: "16px" }}>Name</p>
        <TextField
          hiddenLabel
          id="email"
          name="email"
          placeholder="Name"
          variant="filled"
          InputProps={{
            disableUnderline: true,
            sx: {
              borderRadius: 0,
              backgroundColor: "rgb(245, 245, 245)",
              "&:hover": {
                backgroundColor: "rgb(235, 235, 235)",
              },
            },
          }}
          fullWidth
          size="small"
        />
        <div
          style={{ marginTop: "30px", fontWeight: "bold", fontSize: "16px" }}
        >
          <p className={styles.ptagpadding}>select face of your AI assistant</p>{" "}
        </div>
        <br />
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          paddingRight: "80px",
        }}
      >
        <Button
          variant="contained"
          className={styles.ggreybtn}
          // onClick={() => setActiveTab(activeTab - 1)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          className={styles.ggreybtn}
          onClick={handleSubmit}
        >
          Create Account
        </Button>
      </Box>
    </>
  );
};

export default StepFinal;

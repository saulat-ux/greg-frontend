import React, { useState } from "react";
import { styled } from "@mui/system";
import { Tabs, Tab, TabsList, TabPanel } from "@mui/base";
import {
  Grid,
  TextField,
  Button,
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import styles from "../styles/Create.module.sass";

// Define validation schema using Yup
const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

export default function Tabbar() {
  const [activeTab, setActiveTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    // Submit logic here
    alert("You have been successfully Registered for this application");
    console.log(data);
  };

  const handleNextStep = () => {
    if (activeTab === 2 && !selectedButton) {
      alert("Please select an option before moving to the next step.");
      return;
    }
    setActiveTab(activeTab + 1);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <Box className={styles.container}>
      <Tabs
        value={activeTab}
        onChange={(event, newValue) => setActiveTab(newValue)}
      >
        <TabsList>
          <Tab label="Step 1" />
          <Tab label="Step 2" />
          <Tab label="Step 3" />
          <Tab label="Step 4" />
        </TabsList>

        <TabPanel value={0} index={0}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <p className={styles.textBold}>Create your Account</p>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                  fullWidth
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ""}
                  fullWidth
                />
              )}
            />
            <Button
              onClick={handleNextStep}
              variant="contained"
              className={styles.nextButton}
            >
              Next
            </Button>
          </form>
        </TabPanel>

        <TabPanel value={1} index={1}>
          <Typography variant="h6">
            Fill in additional information (Step 2)
          </Typography>
          <Button
            onClick={handleNextStep}
            variant="contained"
            className={styles.nextButton}
          >
            Next
          </Button>
        </TabPanel>

        <TabPanel value={2} index={2}>
          <Typography variant="h6">Select an option (Step 3)</Typography>
          {["facebook", "instagram", "tiktok", "x", "ghl"].map((button) => (
            <Button
              key={button}
              onClick={() => handleButtonClick(button)}
              variant={selectedButton === button ? "contained" : "outlined"}
              className={
                selectedButton === button
                  ? styles.selectedButton
                  : styles.unselectedButton
              }
            >
              {button}
            </Button>
          ))}
          <Button
            onClick={handleNextStep}
            variant="contained"
            className={styles.nextButton}
          >
            Next
          </Button>
        </TabPanel>

        <TabPanel value={3} index={3}>
          <Typography variant="h6">
            Review and create account (Step 4)
          </Typography>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            className={styles.createAccountButton}
          >
            Create Account
          </Button>
        </TabPanel>
      </Tabs>
    </Box>
  );
}

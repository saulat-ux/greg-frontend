"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import styles from "../../styles/Create.module.sass";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import * as Yup from "yup";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Control, FieldErrors, UseFormTrigger } from "react-hook-form";

interface StepFirstProps {
  handleNextStep: () => void;
  control: Control<any>; // You can replace 'any' with the specific type of your form values
  trigger: UseFormTrigger<any>; // Same here for specific form values type
  errors: FieldErrors<any>;
}

const StepFirst: React.FC<StepFirstProps> = ({
  handleNextStep,
  control,
  trigger,
  errors,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      className={`${styles.boxPadding} ${styles.boxFlex}`}
      sx={{ "& .MuiTextField-root": { m: 1, width: "99%" } }}
    >
      <form className={styles.topmargin}>
        <p className={styles.textBold}>Create your Account</p>
        <p
          className={`${styles.textBold} ${styles.margin}`}
          style={{ marginTop: "2px", marginBottom: "5px" }}
        >
          Unlock the full potential of our software by signing up now and take
          advantage of all available features
        </p>
        <div className={styles.padding}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                hiddenLabel
                id="name"
                placeholder="Name"
                variant="filled"
                InputProps={{ disableUnderline: true }}
                fullWidth
                size="small"
              />
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                hiddenLabel
                id="phoneNumber"
                placeholder="Phone Number"
                variant="filled"
                size="small"
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
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                hiddenLabel
                size="small"
                id="email"
                placeholder="Email"
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
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
            )}
          />
          <Controller
            name="url"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                hiddenLabel
                id="url"
                placeholder="URL"
                variant="filled"
                size="small"
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
              />
            )}
          />
          <Controller
            name="profile"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                hiddenLabel
                id="profile"
                placeholder="Profile"
                size="small"
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
                hiddenLabel
                id="password"
                name="password"
                placeholder="Password"
                size="small"
                variant="filled"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    borderRadius: 0,
                    backgroundColor: "rgb(245, 245, 245)",
                    "&:hover": {
                      backgroundColor: "rgb(235, 235, 235)",
                    },
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
            )}
          />
          <br />
          <FormControlLabel
            className={styles.margin}
            control={<Checkbox />}
            label="Process with social media integration"
          />
          <Button
            onClick={async () => {
              const result = await trigger(["password", "email"]);
              if (result) {
                handleNextStep();
              }
            }}
            variant="contained"
            className={styles.grey}
          >
            NEXT
          </Button>
          <Box
            className={`${styles.boxMarginTop} ${styles.boxFlexCenter} ${styles.margin}`}
          >
            <Button
              variant="contained"
              className={styles.grey}
              onClick={() => signIn("google")}
            >
              Signup with Google
            </Button>
            <Button variant="contained" className={styles.grey}>
              Signup with Ghl
            </Button>
          </Box>
          <p className={`${styles.textBold} ${styles.textCenter}`}>
            Already have an account? <Link href="/search">sign in</Link>
          </p>
        </div>
      </form>
    </Box>
  );
};

export default StepFirst;

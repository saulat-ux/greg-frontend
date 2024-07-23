// "use client";

// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { FormEvent } from "react";

// export default function Form() {
//   const router = useRouter();
//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const response = await signIn("credentials", {
//       email: formData.get("email"),
//       password: formData.get("password"),
//       redirect: false,
//     });

//     console.log({ response });
//     if (!response?.error) {
//       router.push("/");
//       router.refresh();
//     }
//   };
//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-2 mx-auto max-w-md mt-10"
//     >
//       <input
//         name="email"
//         className="border border-black text-black"
//         type="email"
//       />
//       <input
//         name="password"
//         className="border border-black  text-black"
//         type="password"
//       />
//       <button type="submit">Login</button>
//       <button onClick={() => signIn("google")}>Login with google</button>
//     </form>
//   );
// }

"use client";

import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { signIn } from "next-auth/react";
import styles from "../styles/Home.module.sass";

// Define validation schema using Yup
const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

function Form() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

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

  const onSubmit = async (data: any) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log({ response });
    if (!response?.error) {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={5}
        sm={5}
        lg={5}
        xl={5}
        className={styles.gridItemLeft}
      >
        <p>Placeholder for left grid content</p>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sm={6}
        lg={6}
        xl={6}
        className={`${styles.gridItem} ${styles.topmargin}`}
      >
        <Box>
          <Box
            component="form"
            className={styles.boxFlex}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "99%" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            style={{ paddingRight: "110px" }}
          >
            <div style={{ paddingLeft: "15px" }}>
              <p className={styles.textBold}>Create your Account</p>
              <p className={`${styles.textBold} ${styles.margin}`}>
                Log in with your credentials to unlock and explore our software.
              </p>
            </div>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  hiddenLabel
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
                  size="small"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
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
                  size="small"
                  name="password"
                  placeholder="Password"
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
            <div style={{ paddingLeft: "15px" }}>
              <Button
                type="submit"
                variant="contained"
                className={styles.grey}
                disableElevation
                sx={{ mt: 3 }}
                style={{ borderRadius: "0", padding: "15px", width: "100%" }}
              >
                Login
              </Button>
              <p style={{ textAlign: "center", marginTop: "26px" }}>
                Other login methods
              </p>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  variant="contained"
                  className={styles.ggrey}
                  style={{
                    borderRadius: "0",
                    width: "30%",
                    fontWeight: "black",
                  }}
                >
                  Go high level
                </Button>
                <Button
                  onClick={() => signIn("google")}
                  variant="contained"
                  className={styles.ggrey}
                  style={{
                    borderRadius: "0",
                    width: "30%",
                    fontWeight: "black",
                  }}
                >
                  Google
                </Button>
                <Button
                  variant="contained"
                  className={styles.ggrey}
                  style={{
                    borderRadius: "0",
                    width: "30%",
                    fontWeight: "black",
                  }}
                >
                  Facebook
                </Button>
              </Box>
              <div style={{ textAlign: "center" }}>
                <p className={styles.textBold}>
                  Don't have an account? <Link href="/register">Sign up</Link>
                </p>
                <Button
                  variant="contained"
                  className={styles.grey}
                  style={{ borderRadius: "0", marginTop: "10px" }}
                >
                  Login with GHL
                </Button>
              </div>
            </div>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Form;

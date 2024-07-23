// @ts-nocheck
import React, { useState } from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styles from "../styles/Create.module.sass";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import StepFirst from "../components/formSteps/stepFirst";
import StepSecond from "../components/formSteps/stepSecond";
import StepThird from "../components/formSteps/stepThird";
import StepFinal from "../components/formSteps/StepFinal";

const blue = {
  50: "rgb(166, 166, 166)",
  100: "rgb(166, 166, 166)",
  200: "rgb(166, 166, 166)",
  300: "rgb(166, 166, 166)",
  400: "rgb(166, 166, 166)",
  500: "rgb(166, 166, 166)",
  600: "rgb(166, 166, 166)",
  700: "rgb(166, 166, 166)",
  800: "rgb(166, 166, 166)",
  900: "rgb(166, 166, 166)",
};

const grey = {
  50: "rgb(166, 166, 166)",
  100: "rgb(166, 166, 166)",
  200: "rgb(166, 166, 166)",
  300: "rgb(166, 166, 166)",
  400: "rgb(166, 166, 166)",
  500: "rgb(166, 166, 166)",
  600: "rgb(166, 166, 166)",
  700: "rgb(166, 166, 166)",
  800: "rgb(166, 166, 166)",
  900: "rgb(166, 166, 166)",
};

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
width: 100%;
font-family: 'IBM Plex Sans', sans-serif;
font-size: 0.875rem;
padding: 20px 12px;
background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
border: 0px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
border-radius: 12px;
opacity: 1;
`
);

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
min-width: 400px;
background-color: rgb(166, 166, 166);
border-radius: 12px;
margin-bottom: 16px;
display: flex;
align-items: center;
justify-content: center;
align-content: space-between;
box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
`
);

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

  const {
    control: controlStep1,
    trigger: triggerStep1,
    handleSubmit: handleStep1,
    formState: { errors },
    getValues,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: any) => {
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        email: getValues("email"),
        password: getValues("password"),
      }),
    });
    console.log({ response });
    alert("You have been successfully Registered for this application");
  };

  const handleFinalSubmit = async (data: any) => {
    await onSubmit(data);
    alert("You have been successfully Registered for this application");
  };

  const handleNextStep = () => {
    if (activeTab === 0) {
      const email = watch("email");
      const password = watch("password");
    }
    setActiveTab(activeTab + 1);
  };

  const [buttons, setButtons] = useState({
    facebook: { isActive: false, value: 1 },
    instagram: { isActive: false, value: 2 },
    tiktok: { isActive: false, value: 3 },
    x: { isActive: false, value: 4 },
    ghl: { isActive: false, value: 5 },
  });

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

  return (
    <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)}>
      <TabsList>
        <Tab value={0}>Step 1</Tab>
        <Tab value={1}>Step 2</Tab>
        <Tab value={2}>Step 3</Tab>
        <Tab value={3}>Step 4</Tab>
      </TabsList>
      <TabPanel value={0}>
        <StepFirst
          handleNextStep={handleNextStep}
          control={controlStep1}
          trigger={triggerStep1}
          errors={errors}
        />
      </TabPanel>
      <TabPanel value={1}>
        <StepSecond handleNextStep={handleNextStep} />
      </TabPanel>
      <TabPanel value={2}>
        <StepThird handleNextStep={handleNextStep} />
      </TabPanel>
      <TabPanel value={3}>
        <StepFinal handleSubmit={handleFinalSubmit} />
      </TabPanel>
    </Tabs>
  );
}

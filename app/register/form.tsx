"use client";
import React, { useState } from "react";
import styles from "../styles/Create.module.sass";
import Grid from "@mui/material/Grid";

import Tabbar from "./Tabbar";

function register() {
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
      ></Grid>
      <Grid
        item
        xs={12}
        md={6}
        sm={6}
        lg={6}
        xl={6}
        className={styles.gridItem}
      >
        <Tabbar />
      </Grid>
    </Grid>
  );
}

export default register;

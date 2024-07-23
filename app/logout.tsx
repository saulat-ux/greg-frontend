"use client";

import { signOut } from "next-auth/react";
import Button from "@mui/material/Button";

export default function Logout() {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ marginTop: 3 }}
      onClick={() => signOut()}
    >
      Logout
    </Button>
  );
}

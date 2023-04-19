import { Flex, Title, createStyles } from "@mantine/core";
import React from "react";
import { LoginForm } from "./LoginForm";

const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: "1200px",
    margin: "auto",
    paddingLeft: "30px",
  },
  content: {
    paddingTop: "5rem",
  },
}));

export const AdminLogin = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <LoginForm />
    </div>
  );
};

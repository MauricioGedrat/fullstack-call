import { HeaderContext } from "@/contexts/HeaderContext";
import { createStyles } from "@mantine/core";
import { List } from "phosphor-react";
import React, { useContext } from "react";
import { Sidebar } from "./Sidebar";

const useStyles = createStyles((theme) => ({
  position: {
    position: "absolute",
  },
}));

export const Header = () => {
  const { classes } = useStyles();
  const { setShowMenu, showMenu } = useContext(HeaderContext);
  return (
    <div>
      <List
        size={32}
        color="white"
        className={classes.position}
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && <Sidebar />}
    </div>
  );
};

import { Button, Container, Input, Navbar } from "@mantine/core";
import React from "react";
import { UserProfile } from "../User";
import { useMediaQuery } from "@mantine/hooks";

export const Sidebar = () => {
  const matches = useMediaQuery("(min-width: 380px)");
  return (
    <Navbar width={{ sm: 300 }}>
      <UserProfile />
      <Container>
        <form
          style={{
            display: "flex",
            flexDirection: matches ? "row" : "column",
            marginTop: "10px",
          }}
        >
          <Input type="text" />
          <Button>Entrar</Button>
        </form>
      </Container>
    </Navbar>
  );
};

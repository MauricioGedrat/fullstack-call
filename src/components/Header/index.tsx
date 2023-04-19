import { Burger, Flex } from "@mantine/core";

import React from "react";
import { Sidebar } from "./Sidebar";
import { useDisclosure } from "@mantine/hooks";

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  return (
    <Flex>
      <Burger opened={opened} onClick={toggle} aria-label={label} />
      {opened && <Sidebar />}
    </Flex>
  );
};

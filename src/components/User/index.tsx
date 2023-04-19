import { Avatar, Button, Group, HoverCard, Text } from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";

export const UserProfile = () => {
  const router = useRouter();
  const username = router.query.username;
  return (
    <Group position="right">
      <HoverCard width={280} shadow="xl">
        <HoverCard.Target>
          <Avatar />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm" display={"flex"}>
            Profile name:{" "}
            <Text c={"orange"} ml={2} fw={"bold"}>
              {username}
            </Text>
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
};

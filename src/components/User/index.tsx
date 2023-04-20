import {
  Avatar,
  Button,
  FileButton,
  Group,
  HoverCard,
  Image,
  Text,
} from "@mantine/core";

import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

export const UserProfile = () => {
  const router = useRouter();
  const username = router.query.username;
  const [file, setFile] = useState<File | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
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

import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  PasswordInput,
  TextInput,
  Text,
  Box,
  Grid,
  createStyles,
  Title,
} from "@mantine/core";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ImgMock from "../../assets/mock-img.png";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";

const registerFormShema = z.object({
  username: z
    .string()
    .min(3, "O usuário precisa ter no mínimo 3 letras")
    .regex(/^([a-z\\-]+)$/i, {
      message: "O usuário pode ter apenas letras e hifens.",
    })
    .transform((username) => username.toLowerCase()),
  password: z.string().min(6, "A senha precisa ter no mínimo 3 caractéres"),
});

type RegisterFormData = z.infer<typeof registerFormShema>;

const useStyles = createStyles(() => ({
  imageMock: {
    overflow: "hidden",
  },
  imageMockResponsive: {
    display: "none",
  },
}));

export const LoginForm = () => {
  const { classes } = useStyles();
  const matches = useMediaQuery("(min-width: 800px)");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormShema),
  });
  const router = useRouter();

  async function handleRegisterData(data: RegisterFormData) {
    const { username } = data;
    await router.push(`/register?username=${username}`);
  }
  return (
    <Grid columns={matches ? 2 : 1} mt={100}>
      <Grid.Col span={1}>
        <Title fz={60} c={"white"}>
          Agendamentos <br />
          <span style={{ color: "orange" }}>rápidos</span> e <br />
          <span style={{ color: "orange" }}>precisos</span>
        </Title>
        <form
          onSubmit={handleSubmit(handleRegisterData)}
          style={{ marginTop: "1rem", paddingRight: "30px" }}
        >
          <Box mb={10}>
            <TextInput
              {...register("username")}
              placeholder="Your Username"
              bg="dark"
              c="orange"
            />
            <Text c={"red"} size={"sm"}>
              {errors.username && <div>{errors.username.message}</div>}
            </Text>
          </Box>
          <Box mb={10}>
            <PasswordInput
              {...register("password")}
              placeholder="Your password"
            />
            <Text c={"red"} size={"sm"}>
              {errors.password && <div>{errors.password.message}</div>}
            </Text>
          </Box>
          <Button
            type="submit"
            variant="outline"
            color="orange"
            w="100px"
            disabled={isSubmitting}
          >
            Enviar
          </Button>
        </form>
      </Grid.Col>
      {matches && (
        <Grid.Col span={1}>
          <Image src={ImgMock} alt="Mock Image" className={classes.imageMock} />
        </Grid.Col>
      )}
    </Grid>
  );
};

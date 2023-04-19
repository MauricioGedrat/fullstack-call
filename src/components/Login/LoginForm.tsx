import React, { useContext } from "react";
import { FormProvider, SetValueConfig, useForm } from "react-hook-form";
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

import { RegisterFormData } from "@/contexts/LoginContext";
import { GlobalContext } from "@/contexts";

export const registerFormShema = z.object({
  username: z
    .string()
    .min(3, "O usuário precisa ter no mínimo 3 letras")
    .regex(/^([a-z\\-]+)$/i, {
      message: "O usuário pode ter apenas letras e hifens.",
    })
    .transform((username) => username.toLowerCase()),
  password: z.string().min(6, "A senha precisa ter no mínimo 3 caractéres"),
});

const useStyles = createStyles(() => ({
  imageMock: {
    overflow: "hidden",
  },
  imageMockResponsive: {
    display: "none",
  },
}));

export const LoginForm = () => {
  const { handleRegisterData } = useContext(GlobalContext);
  const { classes } = useStyles();
  const matches = useMediaQuery("(min-width: 800px)");
  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormShema),
  });

  const {
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = methods;

  return (
    <Grid columns={matches ? 2 : 1} mt={100}>
      <Grid.Col span={1}>
        <Title fz={60} c={"white"}>
          Agendamentos <br />
          <span style={{ color: "orange" }}>rápidos</span> e <br />
          <span style={{ color: "orange" }}>precisos</span>
        </Title>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(handleRegisterData)}
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
        </FormProvider>
      </Grid.Col>
      {matches && (
        <Grid.Col span={1}>
          <Image src={ImgMock} alt="Mock Image" className={classes.imageMock} />
        </Grid.Col>
      )}
    </Grid>
  );
};

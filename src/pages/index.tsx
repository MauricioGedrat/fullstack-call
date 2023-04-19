import { AdminLogin } from "@/components/Login";
import { Container, createStyles } from "@mantine/core";
import BackgroundImg from "../assets/login-bg.png";

const useStyles = createStyles((theme) => ({
  container: {
    background: "#121214",
    height: "100vh",
  },
  backgroundImg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

export default function Home() {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Container className={`${classes.backgroundImg} background-image`}>
        <AdminLogin />
      </Container>
    </div>
  );
}

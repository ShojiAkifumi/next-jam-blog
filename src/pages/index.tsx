import Container from "components/container";
import Hero from "components/hero";
import HeadMeta from "components/meta";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container>
      <HeadMeta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  );
};

export default Home;

import Container from "components/container";
import Hero from "components/hero";
import HeadMeta from "components/meta";

const Home = () => {
  return (
    <Container isMain>
      <HeadMeta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  );
};

export default Home;

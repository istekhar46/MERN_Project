import { Container } from "react-bootstrap";
// import Hero from "../components/Hero";
import PublicBlogContainer from "../components/PublicBlogContainer";

const HomeScreen = () => {
  return (
    <>
      <Container>
        {/* <Hero /> */}
        <PublicBlogContainer />
      </Container>
    </>
  );
};

export default HomeScreen;

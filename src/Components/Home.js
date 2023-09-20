import styled from "styled-components";
import ImgSlider from "./ImgSlider";

const Home = (props) => {
  return (
    <Container>
      <ImgSlider />
    </Container>
  );
};

const Container = styled.main`
  overflow: hidden;
  position: relative;
  padding: 20px 50px;
  top: 40px;
  min-height: 100vh;
  background-image: url("/images/home-background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Home;

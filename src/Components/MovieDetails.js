import styled from "styled-components";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const id = params.id;

  return (
    <Container>
      <BackgroundImg
        src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09A0617D43282F1A4FA1A97DF6159B4263A8DEB9679A007B61D5E5D6E5D0A2DD/scale?width=1440&aspectRatio=1.78&format=jpeg"
        alt="movie background image"
      />

      <Content>
        <TitleImg
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E7D8EFFDD30B2A0E205DDD9929207439B21E7595709769F2A23C50457664FFB2/scale?width=1440&aspectRatio=1.78"
          alt="title image"
        />
        <Actions>
          <PlayButton>
            <img src="/images/play-icon-black.png" alt="play button" />
            <p>Play</p>
          </PlayButton>
          <TrailerButton>
            <img src="/images/play-icon-white.png" alt="Trailer button" />
            <p>Trailer</p>
          </TrailerButton>
          <AddButton>
            <img src="/images/plus.png" alt="add button" />
          </AddButton>
          <GroupButton>
            <img src="/images/group-icon.png" alt="Trailer button" />
          </GroupButton>
        </Actions>

        <SubTitle>
          2021 • 1h 52m • Family, Fantasy, Animation, Action-Adventure
        </SubTitle>
        <Description>
          Watch with Premier Access at the same time it's in open theaters and
          before it's available to all Disney+ subscribers on June 4, 2021.
        </Description>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  top: 50px;
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  outline: 2px solid red;
  position: fixed;
  object-fit: cover;
  z-index: -1;
`;

const Content = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (width<=768px) {
    padding: 30px 10px;
  }
`;

const TitleImg = styled.img`
  min-width: 300px;
  max-width: 500px;
  max-height: 300px;
  margin-bottom: 2rem;
  @media (width<=500px) {
    width: 100%;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  @media (width<=500px) {
    width: 370px;
    gap: 2px;
  }
`;

const PlayButton = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 5px 15px;
  border-radius: 10px;
  background-color: #f9f9f9;
  cursor: pointer;
  p {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    color: #000;
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }

  @media (width<=500px) {
    padding: 5px 8px;
    gap: 5px;
  }
`;
const TrailerButton = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 5px 15px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  outline: 1px solid rgba(259, 259, 259, 0.5);
  cursor: pointer;
  p {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    color: #f9f9f9;
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
  @media (width<=500px) {
    padding: 5px 8px;
    gap: 5px;
  }
`;
const AddButton = styled.div`
  display: flex;
  width: 58px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  outline: 1px solid rgba(259, 259, 259, 0.8);
  border-radius: 50%;
  cursor: pointer;
  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
  }
`;
const GroupButton = styled.div`
  display: flex;
  width: 58px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  outline: 1.5px solid rgba(259, 259, 259, 0.9);
  border-radius: 50%;
  cursor: pointer;
  img {
    width: 36px;
    height: 36px;
    object-fit: cover;
  }
`;

const SubTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-top: 24px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 12px;
`;

export default MovieDetails;

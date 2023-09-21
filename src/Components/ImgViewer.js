import styled from "styled-components";

const media = [
  {
    id: 1,
    src: "/images/viewers-disney.png",
    alt: "disney image",
    vidSrc: "/videos/1564674844-disney.mp4",
  },
  {
    id: 2,
    src: "/images/viewers-marvel.png",
    alt: "marvel image",
    vidSrc: "/videos/1564676115-marvel.mp4",
  },
  {
    id: 3,
    src: "/images/viewers-pixar.png",
    alt: "pixar image",
    vidSrc: "/videos/1564676714-pixar.mp4",
  },
  {
    id: 4,
    src: "/images/viewers-starwars.png",
    alt: "starwars image",
    vidSrc: "/videos/1608229455-star-wars.mp4",
  },
  {
    id: 5,
    src: "/images/viewers-national.png",
    alt: "national image",
    vidSrc: "/videos/1564676296-national-geographic.mp4",
  },
];

const ImgViewer = (props) => {
  return (
    <Container>
      {media.map((item) => (
        <Wrap key={`viewer` + item.id}>
          <img src={item.src} alt={item.alt} />
          <video autoPlay={true} loop={true} playsInline={true} muted>
            <source src={item.vidSrc} type="video/mp4" />
          </video>
        </Wrap>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40px;
  padding: 20px 10px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  flex-wrap: wrap;
  @media (width<=768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 0;
  }
`;

const Wrap = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  outline: 2px solid rgba(159, 159, 159, 0.5);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  max-height: 320px;
  cursor: pointer;
  border-radius: 8px;

  width: 100%;

  img {
    width: 100%;
    z-index: 2;
  }

  video {
    width: 100%;
    height: 100%;
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  &:hover {
    outline: 2px solid rgba(159, 159, 159, 0.9);
    transform: scale(1.09);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    video {
      opacity: 1;
    }
  }
`;

export default ImgViewer;

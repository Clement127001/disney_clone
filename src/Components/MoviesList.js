import styled from "styled-components";
import { Link } from "react-router-dom";

const MoviesList = ({ data, title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Content>
        {data.map(
          (item, index) =>
            index <= 3 && (
              <Wrap key={index}>
                <Link to={"/movie" + item.id}>
                  <img src={item.cardImg} alt={item.title} />
                </Link>
              </Wrap>
            )
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  @media (width<=768px) {
    padding: 0;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 15px;
  min-height: 160px;

  @media (width<=768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border: 2px solid rgba(159, 159, 159, 0.5);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border-radius: 4px;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.95;
  }

  &:hover {
    border: 2px solid rgba(159, 159, 159, 0.9);
    transform: scale(1.1);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    img {
      opacity: 1;
    }
  }
`;

export default MoviesList;

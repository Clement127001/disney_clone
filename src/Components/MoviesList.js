import styled from "styled-components";

const MoviesList = ({ data, title }) => {
  console.log(data[0]);
  return (
    <Container>
      <h2>{title}</h2>
      <Content>
        {data.map((item, index) => (
          <Wrap key={index}>
            <img src={item.cardImg} />
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.div``;

const Wrap = styled.div``;

export default MoviesList;

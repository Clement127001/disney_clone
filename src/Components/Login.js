import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <CTA>
        <Logo src="/images/cta-logo-one.svg" />
        <Button>get all here</Button>
        <Description>
          Get the premium access to Raya and The Last Dragon for an additional
          free with Disney+ Subcription. As of 20/09/23, the price of Disney+
          and The Disney Bundle will increase by $10
        </Description>
        <Logo src="/images/cta-logo-two.png" />
      </CTA>
      <BgImage src="/images/login-background.jpg" />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const BgImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CTA = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 650px;
  padding: 40px 80px;

  @media (width<=678px) {
    padding: 20px;
  }
`;

const Logo = styled.img`
  width: 100%;
`;

const Button = styled.a`
  color: #f9f9f9;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 2px;
  margin: 10px;
  background-color: #0063e5;
  padding: 15px;
  width: 100%;
  border-radius: 8px;
  transition: all 300ms ease-in;

  &:hover {
    cursor: pointer;
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 12px;
  color: hsla(0, 0%, 93.5%, 1);
  line-height: 18px;
  margin-bottom: 20px;
`;
export default Login;

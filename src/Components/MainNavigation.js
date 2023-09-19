import styled from "styled-components";

const MainNavigation = (props) => {
  return (
    <Nav>
      <Logo href="/">
        <img src="/images/logo.svg" />
      </Logo>

      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="home-icon" />
          <span>Home</span>
        </a>
        <a href="">
          <img src="/images/search-icon.svg" alt="search -icon" />
          <span>Search</span>
        </a>
        <a href="/">
          <img src="/images/watchlist-icon.svg" alt="watchilst-icon" />
          <span>Watchlist</span>
        </a>
        <a href="/">
          <img src="/images/original-icon.svg" alt="oroginals-icon" />
          <span>Originals</span>
        </a>
        <a href="/">
          <img src="/images/movie-icon.svg" alt="Movie-icon" />
          <span>Movies</span>
        </a>
        <a href="/">
          <img src="/images/series-icon.svg" alt="series-icon" />
          <span>Series</span>
        </a>
      </NavMenu>

      <Login>Login</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 36px;
  background-color: #040714;
`;

const Logo = styled.a`
  width: 100px;
  height: 100%;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  margin-left: 30px;
  margin-right: auto;

  a {
    display: flex;
    min-width: fit-content;

    align-items: center;

    img {
      margin-right: 5px;
      width: 20px;
      min-width: 20px;
    }

    span {
      display: inline-block;
      margin-right: 20px;
      position: relative;
      cursor: pointer;
      letter-spacing: 1.1px;

      &::before {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #f9f9f9;
        position: absolute;
        bottom: -6px;
        opacity: 1;
        border-radius: 4px;
        transition: all 300ms ease-in;
        transform: scaleX(0);
        transform-origin: left center;
      }
      &:hover {
        &::before {
          opacity: 1;
          transform: scaleX(1);
        }
      }
    }

    @media (width<=847px) {
      display: none;
    }
  }
`;

const Login = styled.a`
  color: #f9f9f9;
  background-color: #000;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 8px 20px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms ease-out;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border: transparent;
  }
`;

export default MainNavigation;

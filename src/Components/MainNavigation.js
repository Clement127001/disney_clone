import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

import {
  selectedUserName,
  selectedUserPhoto,
  signInUserHandler,
  signOutHandler,
} from "../Features/User/UserSlice";
import { useEffect } from "react";

const MainNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectedUserName);
  const userPhoto = useSelector(selectedUserPhoto);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate("home");
      }
    });
  }, [userName]);

  const handleAuth = async () => {
    if (!userName) {
      const res = signInWithPopup(auth, provider)
        .then((res) => console.log("User is logged in"))
        .catch((err) => console.log(err.message));
    } else if (userName) {
      signOut(auth)
        .then((res) => console.log("user is logged out"))
        .catch((err) => console.log("cannot able to handle logout"));

      dispatch(signOutHandler());

      navigate("/");
    }
  };

  const setUser = (user) => {
    // console.log(user.displayName + " " + user.email + " " + user.photoURL);
    dispatch(
      signInUserHandler({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  return (
    <Nav>
      <NavLink to="/home">
        <img src="/images/logo.svg" width={100} style={{ padding: "10px" }} />
      </NavLink>

      {userName ? (
        <>
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
          <Logout>
            <UserImg src={userPhoto} />
            <LogoutButton onClick={handleAuth}>Sign Out</LogoutButton>
          </Logout>
        </>
      ) : (
        <Login onClick={handleAuth}>Login</Login>
      )}
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

const UserImg = styled.img`
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const LogoutButton = styled.button`
  background-color: rgb(19, 19, 19);
  border: 2px solid rgba(151, 151, 151, 0.34);
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: 0;
  width: 100px;
  padding: 10px;
  font-size: 14px;
  color: #f9f9f9;
  cursor: pointer;

  opacity: 0;
`;

const Logout = styled.div`
  cursor: pointer;
  width: 48px;
  height: 48px;
  position: relative;

  &:hover {
    ${LogoutButton} {
      opacity: 1;
    }
  }
`;

export default MainNavigation;

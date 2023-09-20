import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import ImgViewer from "./ImgViewer";
import { useEffect } from "react";
import { selectedUserName } from "../Features/User/UserSlice";
import {
  selectedOrigainals,
  slectedTrending,
  slectedNewDisney,
  selectRecommended,
} from "../Features/Movies/MoviesSlice";
import { setMovies } from "../Features/Movies/MoviesSlice";

import MoviesList from "./MoviesList";

import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectedUserName);

  const recommendedMovies = useSelector(selectRecommended);
  const originalMovies = useSelector(selectedOrigainals);
  const trendingMovies = useSelector(slectedTrending);
  const newDisneyMovies = useSelector(slectedNewDisney);

  let recommend = [];
  let originals = [];
  let newDisney = [];
  let trending = [];

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "movie"));
      querySnapshot.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommend = [...recommend, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          default:
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommended: recommend,
          newDisney,
          originals,
          trending,
        })
      );
    };

    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [userName]);
  return (
    <Container>
      <ImgSlider />
      <ImgViewer />

      {recommendedMovies ? (
        <>
          <MoviesList title="Recommended For You" data={recommendedMovies} />
          <MoviesList title="New Disney Movies" data={newDisneyMovies} />
          <MoviesList title="Originals" data={originalMovies} />
          <MoviesList title="Trending + " data={trendingMovies} />
        </>
      ) : (
        <h2 style={{ textAlign: "center", paddingBlock: "2rem" }}>
          Loading...
        </h2>
      )}
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

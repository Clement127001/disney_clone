import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommended: null,
  newDisney: null,
  originals: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommended = action.payload.recommended;
      state.newDisney = action.payload.newDisney;
      state.originals = action.payload.originals;
      state.trending = action.payload.trending;
    },
  },
});

export const selectRecommended = (state) => state.movie.recommended;
export const slectedNewDisney = (state) => state.movie.newDisney;
export const selectedOrigainals = (state) => state.movie.originals;
export const slectedTrending = (state) => state.movie.trending;

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;

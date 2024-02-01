import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieDetailType,MovieDetailState } from '../../Types/MovieDetailType';



const initialState: MovieDetailState = {
  MovieDetail: null,
}

const SaveMovieDetail = (state:MovieDetailState, action:PayloadAction<MovieDetailType>) => {
    state.MovieDetail = action.payload;
  }

const MovieSlice = createSlice({
  name: 'movieDetail',
  initialState,
  reducers: {
    saveMoviedetail: SaveMovieDetail,
  },
});

export const  {saveMoviedetail}  = MovieSlice.actions;


export default MovieSlice.reducer;

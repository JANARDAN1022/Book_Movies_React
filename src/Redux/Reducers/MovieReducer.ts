import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieState, MovieType } from '../../Types/MovieType';



const initialState: MovieState = {
  Movies: [],
}

const SaveMovies = (state:MovieState, action:PayloadAction<MovieType[]>) => {
    state.Movies = action.payload;
  }

const MovieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    saveMovies: SaveMovies,
  },
});

export const  {saveMovies}  = MovieSlice.actions;


export default MovieSlice.reducer;

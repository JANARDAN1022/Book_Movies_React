import {createAsyncThunk,Dispatch } from "@reduxjs/toolkit"; 
import {
   saveMovies,
} from '../Reducers/MovieReducer';
import { MovieType } from "../../Types/MovieType";



export const SaveMovies = createAsyncThunk('movies/save',async(Movies:MovieType[],{ dispatch }: { dispatch: Dispatch })=>{
    try{
     dispatch(saveMovies(Movies));
    }catch(error:any){
    console.log(error);
    }
})


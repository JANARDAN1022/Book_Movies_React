import {createAsyncThunk,Dispatch } from "@reduxjs/toolkit"; 
import {
   saveMoviedetail,
} from '../Reducers/MovieDetailReducer';
import {MovieDetailType  } from "../../Types/MovieDetailType";



export const SaveMovieDetail = createAsyncThunk('movies/save',async(MovieDetail:MovieDetailType,{ dispatch }: { dispatch: Dispatch })=>{
    try{
     dispatch(saveMoviedetail(MovieDetail));
     return {Success:true}
    }catch(error:any){
    console.log(error);
    }
})


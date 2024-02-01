//import {} from 'react';
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
//import type { MovieType } from "../Types/MovieType";
import { useAppDispatch,useAppSelector } from '../Hooks';
import {SaveMovies} from '../Redux/Actions/MovieActions';
import {SaveMovieDetail} from '../Redux/Actions/MovieDetailAction';
import { FcRating } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { MovieDetailType } from "../Types/MovieDetailType";
import { unwrapResult } from "@reduxjs/toolkit";
const Movies = () => {


const dispatch = useAppDispatch();
const Navigate = useNavigate();
const AllMovies = useAppSelector((state)=>state.MoviesState.Movies);
const [Loading,setLoading]=useState(false);

    const FetchMovies = useCallback(async()=>{
            try {
            const FetchedMovies = await axios.get('https://api.tvmaze.com/search/shows?q=all');    
      dispatch(SaveMovies(FetchedMovies.data));

            } catch (error:any) {
                console.log(error)
            }
    },[dispatch]);

        useEffect(()=>{
        FetchMovies()
        },[FetchMovies]);

        const HandleDetails = async(name:string,id:number,movie:MovieDetailType)=>{
            if(name && id){
                setLoading(true);
        const DetailResult = await dispatch(SaveMovieDetail(movie));
        const Result = await unwrapResult(DetailResult);
        if(Result?.Success){
            setLoading(false);
        Navigate(`movies/${name}/${id}`);
        }else{
            setLoading(false);
            console.log('error Fetching Details');
        }
            }
        }

    return (
    <div  className="text-white relative font-bold w-full h-max  bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className={`${Loading?'':'hidden'} bg-black absolute w-screen h-screen z-[100] opacity-70`}/>
       {AllMovies && AllMovies.length>0?

      <div className='grid lg:grid-cols-3 gap-x-3 gap-y-10 p-2 place-items-center md:grid-cols-2 grid-cols-1'>
      {AllMovies && AllMovies.map((movie)=>(
        <div key={movie?.show?.id} style={{ backgroundImage:`url('${movie?.show?.image?.original}')`}}  className={`overflow-hidden border relative bg-black border-white  flex flex-col bg-cover bg-no-repeat w-full min-[375px]:w-[300px] h-[300px] rounded-lg `}>
         <div className='bg-black absolute w-full h-full z-20 opacity-40'/>
          <div className='z-50 flex flex-col justify-between h-full p-2 relative'>
            <button onClick={()=>HandleDetails(movie.show.name,movie.show.id,movie.show)} className='absolute border border-white py-1 px-2 rounded-md z-50 right-2 text-xs hover:opacity-100 opacity-80 transition-all 300ms ease-in'>Details</button>
            <div className='flex w-full absolute gap-2 items-center flex-wrap'>
            <span className={`text-white ${movie.show.rating.average?'':'hidden'}  gap-1 items-center flex border-white border shadow-sm  shadow-white rounded-md font-normal text-xs px-1 opacity-90`}>
                {movie.show.rating.average}
                <FcRating size={18}/>
                </span>
           </div>
          <span className='text-white text-center font-bold w-full text-wrap break-all text-base md:text-lg'> {movie.show.name}</span>
          <div className='flex flex-col gap-2'>
           <span className="text-sm font-semibold">Premiered: {movie.show?.premiered?movie.show?.premiered:'N/A'}</span>
           <div className='flex w-full relative flex-col'>
           <span className='font-normal not-italic text-xs'>{movie.show.summary?.length>220?movie.show.summary.slice(0,200):movie.show.summary}</span>
          <button className='text-xs flex justify-start font-semibold hover:font-bold transition-all 300ms ease-in-out'>Read More</button>
          </div>
          </div>
       </div>
       </div>
       ))
    }
     </div> 
    :
    <div className="flex w-full h-screen  flex-col p-10  items-center">
    <div className="border flex flex-col justify-center border-white rounded-md p-2 h-[300px] w-[300px]">
    <span className="w-full text-center underline">No Movies Found</span>   
   </div>
   </div>
    }
    </div>
  )
}

export default Movies
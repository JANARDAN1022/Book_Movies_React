import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../Hooks";
import { useCallback, useEffect, useState } from "react";
import {SaveMovieDetail} from '../Redux/Actions/MovieDetailAction'
import axios from "axios";
import { MovieType } from "../Types/MovieType";
import BookForm from "./BookForm";

const MovieDetails = () => {
    const {id} = useParams();
const dispatch = useAppDispatch();
const MovieDetail = useAppSelector((state)=>state.MovieDetailState.MovieDetail);
const [ShowBookForm,setShowBookForm] = useState(false);

const GetMovieById = 
useCallback(async(ID:number)=>{
if(ID){
    try {
  const FetchedMovies = (await axios.get('https://api.tvmaze.com/search/shows?q=all'));
  if(FetchedMovies){
const Movies = [...FetchedMovies.data];
if(Movies && Movies.length>0){
  const FindMovieDetail = Movies.filter((movie:MovieType)=>movie.show.id===ID);
  if(FindMovieDetail){
    dispatch(SaveMovieDetail(FindMovieDetail[0].show));
  }        
}
}
    } catch (error) {
        console.log('error:-',error);
    }
}
},[]);

useEffect(()=>{
GetMovieById(Number(id));
},[id]);

  return (
    <div className="flex relative  justify-center items-center h-screen py-2 sm:p-10  bg-gradient-to-r from-gray-700 via-gray-900 to-black">
<div className={`${ShowBookForm?'':'hidden'}  w-[700px] h-[500px] top-[10%] absolute z-50`}>
<BookForm setShowBookForm={setShowBookForm} movie={MovieDetail}/>
</div>

{id && MovieDetail?
<div className={`${ShowBookForm?'blur':''} flex  flex-col border  border-white  w-full h-full overflow-y-auto  md:w-[700px] md:h-[700px] rounded-md`}>
<div className="flex flex-col sm:flex-row gap-2 p-2 ">

<div className="w-max md:self-start self-center h-max p-2">
{MovieDetail.image?.medium?
<img src={MovieDetail.image?.medium} alt="" loading="lazy"  className=" rounded-md object-cover h-full md:h-[260px] w-full md:w-[280px]"/>
:
<div className="bg-black text-white flex justify-center items-center h-[200px] md:h-[260px] w-[200px] md:w-[280px] opacity-55 rounded-md" >
    No Image Available
</div>
}
</div>

<div className="text-white p-2 w-full flex flex-col gap-4">
    <h1 className="w-full border text-center font-bold text-lg rounded-lg">{MovieDetail.name}</h1>
    <div className="flex flex-col gap-2 sm:gap-4 ">
    
     <div className="flex p-2 sm:p-4 border border-blue-500 rounded-md justify-between items-center">
     <span className="text-sm md:text-base">Premiered:</span>
     <span className="text-xs md:text-base text-green-500">{MovieDetail.premiered}</span>
     </div>
    
     <div className="flex p-2 sm:p-4 border border-blue-500 rounded-md justify-between items-center">
     <span className="text-sm md:text-base">Language:</span>
     <span className="text-xs md:text-base text-green-500">{MovieDetail.language}</span>
     </div>

     <div className="flex p-2 sm:p-4 border border-blue-500 rounded-md justify-between items-center">
     <span className="text-sm md:text-base">Genre:</span>
    <div className="flex gap-2">
     {MovieDetail.genres.map((genre,i)=>(
        <span key={genre + MovieDetail.id + i++}  className="text-green-500 text-xs md:text-base border border-green-500 py-1 px-1 md:px-2 rounded-md">{genre}</span>
     ))}
     </div>
     </div>
    </div>
</div>
</div>

<div className="w-full p-2 mt-2">
<button 
onClick={()=>{
    setShowBookForm(true);
}}
className="w-full text-white text-opacity-80 hover:text-opacity-100 transition-all ease-in-out border border-white p-2 rounded-md">Book {MovieDetail.name}</button>
</div>

<div className="w-full text-white gap-2  py-2 px-4 h-max flex flex-col mt-5">
<h1 className="text-center text-sm md:text-base">Summary</h1>
<span className="italic text-xs sm:text-sm md:text-base ">{MovieDetail.summary}</span>
</div>


</div>
:
<span>Movie Detail Not Found</span>
}
    </div>
  )
}

export default MovieDetails
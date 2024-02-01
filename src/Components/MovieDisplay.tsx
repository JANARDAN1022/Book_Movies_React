import Movies from "./Movies.tsx"

const MovieDisplay = () => {
  return (
    <div className="w-full flex flex-col h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
     <h1 className="text-white text-center p-4 font-bold">Select A Movie To Book</h1>
     <Movies  />
    </div>
  )
}

export default MovieDisplay
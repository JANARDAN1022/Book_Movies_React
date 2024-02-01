import React, { useState } from 'react';
import { MdCancel } from "react-icons/md";
import { MovieDetailType } from "../Types/MovieDetailType";

type BookFormProps ={
  setShowBookForm: React.Dispatch<React.SetStateAction<boolean>>,
  movie: MovieDetailType | null
}

const BookForm = ({ setShowBookForm, movie }: BookFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    numberOfTickets: '',
    booking_time:''
  });

const [Loading,setLoading]=useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   try {
    setLoading(true);
    // Store info in local storage
    localStorage.setItem('bookingInfo', JSON.stringify(formData));
    setLoading(false);
    setFormData({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        numberOfTickets: '',
        booking_time:''
    })
    setShowBookForm(false);
   } catch (error) {
console.log(error);  
}
  };

  return (
    <form onSubmit={handleSubmit} className="max-[405px]:max-w-xs sm:max-w-lg max-w-sm md:max-w-full mx-auto py-5 px-5 relative shadow-lg border border-white border-opacity-60 text-white  rounded-md bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <MdCancel onClick={() => setShowBookForm(false)} size={30} className="absolute right-2 top-2 text-red-500 opacity-70 hover:opacity-100 transition-all ease-in-out cursor-pointer z-50" />
      <h1 className="w-full text-center">Booking For The Movie: {movie?.name}</h1>
      
      <h1 className="pt-1 border-b w-full font-bold text-lg">Personal Info:</h1>
      <div className="relative z-0 w-full mt-3 mb-5 group"> 
        <input
          type="email"
          name="email"
          id="floating_email"
          value={formData.email}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          autoComplete='off'
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>
      
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="firstName"
            id="floating_first_name"
            value={formData.firstName}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          autoComplete='off' />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="lastName"
            id="floating_last_name"
            value={formData.lastName}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          autoComplete='off' />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
      </div>
     
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="tel"
          pattern="[0-9]{10}"
          name="phoneNumber"
          id="floating_phone"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          autoComplete='off'
        />
        <label
          htmlFor="floating_phone"
          className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone number (9876543210)
        </label>
      </div>

      <h1 className="py-1 border-b-white border-b font-bold text-lg ">Movie Information :</h1>
      <div className="grid md:grid-cols-2 md:gap-6 mt-5">
      <div className="relative z-0 w-full mb-5 mt-3 group">
        <select
          name="booking_time"
          id="booking_time"
          value={formData.booking_time}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          required
        >
          <option value="" className="bg-black text-white">Select Timing</option>
          <option value="12-3" className="bg-black text-white">12:00 PM - 3:00 PM</option>
          <option value="3-6" className="bg-black text-white">3:00 PM - 6:00 PM</option>
          <option value="6-9" className="bg-black text-white">6:00 PM - 9:00 PM</option>
          <option value="9-12" className="bg-black text-white">9:00 PM - 12:00 AM</option>
        </select>
        <label
          htmlFor="booking_time"
          className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Select Timing
        </label>
      </div>

        <div className="relative z-0 w-full mb-5 mt-3 group">
          <input
            type="number"
            name="numberOfTickets"
            id="floating_number_of_tickets"
            value={formData.numberOfTickets}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          autoComplete='off' />
          <label
            htmlFor="floating_number_of_tickets"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Number of Tickets
          </label>
        </div>
      </div>

   
      
      <button
        type="submit"
        className="text-white relative  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Confirm Booking of {movie?.name}

        <div role="status" className={`${Loading?'':'hidden'} absolute right-2 top-2`}>
  <svg
    aria-hidden="true"
    className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
    />
  </svg>
</div>



      </button>
    </form>
  );
}

export default BookForm;

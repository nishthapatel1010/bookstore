import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 md:mt-32 mt-12 order-2 md:order-1">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">
            Hello,Welcome here to learn{" "}
            <span className="text-pink-400">Something New!!!</span>
          </h1>
          <p className="text-">
            "Welcome to our bookstore, where the world of literature comes
            alive. Whether you're searching for timeless classics, contemporary
            bestsellers, or hidden gems across various genres, we have something
            for every reader. Our carefully curated collection offers endless
            possibilities to fuel your imagination, inspire your thoughts, and
            transport you to new realms. Discover your next favorite book and
            embark on a literary adventure with us."
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <Link to="/login" className="btn btn-secondary">Join Us</Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2"><img src="https://cdnsm5-ss12.sharpschool.com/UserFiles/Servers/Server_12382113/Image/books.png" alt="" className="w-55 h-auto mx-auto md:mx-20 py-10"></img></div>
    </div>
  );
};

export default Banner;

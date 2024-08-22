import React from "react";
import Card from "./Card";
import list from "../list/list.json"
import { Link } from 'react-router-dom';

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-40 item-center justify-center text-center">
          <h1 className="text-2xt font-semibold md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-400"> Here ! :)</span>
          </h1>
          <p className="mt-12 text-x">
            "Discover top-tier content designed by industry experts, offering
            in-depth learning experiences you won’t find elsewhere. Our premium
            courses cover a wide range of topics, ensuring you have the tools to
            excel. Invest in your future today—conveniently available for
            purchase in our bookstore. Elevate your journey to success with just
            a few clicks!"
          </p>
          <Link to="/">
          <button className="btn btn-secondary px-7 py-2 rounded-md hover:bg-pink-200 hover:text-black m-3 ">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
           list.map((item)=>(
            <Card item={item} key={item.id } />
           ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;

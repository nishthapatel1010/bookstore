import React from "react";

function Card({item}) {
    console.log(item)
  return (
    <>
    <div className="mt-4 p-4">
      <div className="card w-110 bg-base-50 bg-gray-200 shadow-xl hover:scale-105 duration-200">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
            class="w-48 h-48 pt-3 onject-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xs">
     {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline"> ${item.price}</div>
            <div className=" cursor-pointer border-[2px] px-2 py-1 rounded-lg hover:bg-pink-500 hover:text-white px-2 py-1 duration-200">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Card;

import Image from "next/image";
import React from "react";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Delicious Pizza</h1>
        <p className="text-white xl:text-xl">
        We simplify excellence in every slice, crafting with fresh ingredients for a burst of flavor. Experience the harmony of crisp crusts, melty cheese, and robust toppings delivered to your doorstep. 
        </p>
      
        <button className="bg-blue text-white rounded-md py-3 px-6">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
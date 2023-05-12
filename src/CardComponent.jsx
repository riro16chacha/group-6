import React from "react";
export const Card = () => {
  return (
    <div className="w-[400px] mx-auto px-6 py-4 border rounded-md mb-4 transition-all duration-500 hover:shadow-2xl">
      <h1 className="text-center text-2xl font-bold mb-6">Product Card</h1>
      <div>
        <img
          className="mb-4 rounded-md"
          src="https://i.pinimg.com/564x/90/e5/0f/90e50f08fa452356d5d98fe37dc10431.jpg"
          alt=""
        />
        <h1 className="text-xl font-bold mb-4">Hot Denim</h1>
        <p className="text-slate-400">
          The best jeans trauser in the market. Get it today at a good price
          while stocks last.
        </p>
      </div>
    </div>
  );
};

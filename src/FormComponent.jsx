import React from "react";
function Form() {
  return (
    <div className="w-[400px] px-6 py-6 mx-auto text rounded-lg border-2 mb-20 mt-10 ">
      <h1 className="text-center mb-6 text-2xl font-bold">Login Form</h1>
      <form className="">
        <div className="border-b mb-8">
          <input
            className="outline-none"
            type="email"
            name="email"
            placeholder="Type your email"
          />
        </div>
        <div className="border-b mb-8">
          <input
            className="outline-none"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button
          className="border w-full py-4 rounded-md transition-all duration-500 hover:bg-black hover:text-white"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default Form;

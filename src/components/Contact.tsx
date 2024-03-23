import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div id="contact" className="mb-10 lg:w-8/12 w-10/12 mx-auto">
      <p>Need a team?</p>
      <h2 className="font-bold text-3xl">Build with us!</h2>
      <form className="mt-8">
        <div className="form-control grid lg:grid-cols-2 grid-cols-1 gap-8">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border-b border-black pt-6 pb-4 outline-none placeholder:text-black text-center"
          />
          <input
            type="text"
            name="subject"
            placeholder="Your Subject"
            className="border-b border-black pt-6 pb-4 outline-none placeholder:text-black text-center"
          />
        </div>
        <textarea
          name=""
          id=""
          rows={2}
          placeholder="Describe your idea"
          className="w-full resize-none border-b border-black pt-6 pb-0 mt-4 outline-none placeholder:text-black text-center"></textarea>
        <div className="flex items-center justify-end mt-8">
          <button className="text-black py-2 bg-white border hover:bg-black hover:text-white transition-all border-black flex items-center px-6 rounded-full">
            Send my Message{" "}
            <IoArrowForwardCircleOutline className="text-xl ml-4" />
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;

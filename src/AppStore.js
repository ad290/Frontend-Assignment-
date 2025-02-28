import React from "react";
import sampleImage from "./Asset/Phone.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function AppStore() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#1E3A5F] px-8 py-16 w-full text-white">
    {/* Left Section - Text & Buttons */}
    <div className="md:w-1/2 text-left">
      <h2 className="text-3xl font-bold mb-4">
        Manage Your Services by your <br /> Mobile Phone
      </h2>
      <p className="mb-6 text-gray-300">
        Download our app to manage and track your services. Our app enables you 
        to stay in touch with our experts and aids you in tracking your progress.
      </p>
      <p className="mb-4">Get the App</p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <button className="flex items-center bg-gray-50 text-black py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 hover:text-white transition duration-300">
          <FaApple className="text-3xl mr-4 text-green-500" />
          <div className="text-left">
            <p className="text-xs">Get it on</p>
            <p className="text-lg font-bold">App Store</p>
          </div>
        </button>
        <button className="flex items-center bg-gray-50 text-black py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 hover:text-white transition duration-300">
          <FaGooglePlay className="text-3xl mr-4 text-green-500" />
          <div className="text-left">
            <p className="text-xs">Get it on</p>
            <p className="text-lg font-bold">GOOGLE PLAY</p>
          </div>
        </button>
      </div>
    </div>
  

      <div className="relative flex md:w-1/2 items-center justify-end">
    {/* Left Phone (Halfway Visible) */}
    <img
      src={sampleImage}
      alt="Left Phone"
      className="absolute left-12 top-1/2 transform -translate-y-1/2 h-1/2 object-cover"
    />
    
    {/* Right Phone (3/4 Visible) */}
    <img
      src={sampleImage}
      alt="Right Phone"
      className="h-3/4 object-cover"
    />
  </div>

        <p className="absolute transform translate-x-[34rem] translate-y-[14rem] inset-0 m-auto ">
          <h2 className="font-bold text-xl text-primary ">
         
          </h2>
        </p>
      </div>
    
  );
}

export default AppStore;

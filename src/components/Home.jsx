import React from "react";
import img from "../img/github_pic.jpeg";
import '../styles/main.css'

const Home = () => {
  return (
    <>
      <div className="flex justify-center mb-4 fade-in">
        <div className="text-grey-900 font-bold text-xl mb-2">
          Hello, I'm Matt <span className="hand-wave" role="img" aria-label="hand-wave">👋</span>
        </div>
        <div className="h-48 w-48">
          {/* <img
            src={img}
            alt="Matt Cook"
          /> */}
        </div>
      </div>
      <div className="flex justify-center mb-4 content-fade-in">
        <div className="text-black text-lg mb-2">
          Front end focused with a passion for{" "}
          <span className="text-purple-700 font-bold">design</span> and{" "}
          <span className="text-purple-700 font-bold">data</span>
        </div>
      </div>
    </>
  );
};

export default Home;

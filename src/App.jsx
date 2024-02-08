import React, { useState } from "react";
import Lottie from "lottie-react";
import sad from "./sad.json";
import love from "./love.json";
import flower from "./flower.json";

function App() {
  const [isLiked, setIsLiked] = useState(true);
  const [isAccepted, setIsAccepted] = useState(false);
  const [position, setPosition] = useState({ x: 660, y: 527 });

  const handleNoHover = () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 40);
    setIsLiked(false);
    setPosition({
      x: randomX,
      y: randomY,
    });
  };

  const handleYesHover = () => {
    setIsLiked(true);
  };

  const handleYesClick = () => {
    setIsAccepted(true);
  };

  const handleNoClick = () => {
    setIsAccepted(false);
    handleNoHover();
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      {!isAccepted ? (
        <div>
          <p className="text-4xl text-[#0F52BA] font-cur">
            Will you be my Valentine?
          </p>
          <Lottie
            className="w-56 mb-11 mt-11 ml-20"
            animationData={isLiked ? love : sad}
          />
          <div className="flex flex-row items-center justify-center">
            <button
              className="py-2 px-6 text-white rounded-md bg-pink-600 font-cur"
              onMouseEnter={handleNoHover}
              onMouseLeave={handleNoHover}
              style={{
                position: "absolute",
                left: position.x,
                top: position.y,
              }}
            >
              No
            </button>
            <button
              className="py-2 px-6 text-white rounded-md bg-pink-600 font-cur ml-24"
              onMouseEnter={handleYesHover}
              onMouseLeave={() => setIsLiked(false)}
              onClick={handleYesClick}
            >
              Yes
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-4xl text-[#0F52BA] font-cur">
            Hasta lavista baby!
          </p>
          <Lottie className="w-56 mb-11 mt-11" animationData={flower} />
        </div>
      )}
    </div>
  );
}

export default App;

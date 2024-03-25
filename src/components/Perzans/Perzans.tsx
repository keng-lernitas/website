import React from "react";

const Perzans = () => {
  const LINES = 12;
  const BASE_SIZE = 12;

  const handleClick = () => {
    // play /audio/scream.mp3
    let audio = new Audio("/audio/scream.mp3");
    audio.volume = 0.1;
    audio.play();
  };

  return (
    <div className="absolute left-[54%] top-[73%] w-[80%] -translate-x-1/2 ">
      <div className="flex flex-col space-y-[0.80%]">
        {[...Array(LINES)].map((_, i) => (
          <div key={i} className="flex justify-center gap-x-[0.80%]">
            {[...Array(BASE_SIZE + (i % 2))].map((_, j) => (
              <div
                key={j}
                className="group relative aspect-square w-[6%] rounded-full"
                onClick={handleClick}
              >
                <img
                  src="/images/perzan_head.png"
                  className="absolute left-0 top-0 h-full w-full scale-50 select-none transition-all [filter:_drop-shadow(0.15rem_0.25rem_0px_#5b4328)] group-hover:left-[17%] group-hover:top-[-40%] group-hover:scale-100 md:[filter:_drop-shadow(0.3rem_0.5rem_0px_#5b4328)]"
                  draggable={false}
                />
                <img
                  src="/images/perzan_shield.png"
                  className="relative size-full select-none transition-all [filter:_drop-shadow(0.15rem_0.25rem_0px_#5b4328)] group-hover:translate-y-[5%] md:[filter:_drop-shadow(0.3rem_0.5rem_0px_#5b4328)]"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perzans;

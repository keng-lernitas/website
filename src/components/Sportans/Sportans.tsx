import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import { sportansVisible } from "../../atoms/sportans";
import { cn } from "../../lib/utils";

const Sportans = () => {
  const [visible, setVisible] = useRecoilState(sportansVisible);

  const BASE_SIZE = 13;
  const LINES = 4;

  const handleClick = () => {
    // play /audio/sportin_voice_1
    // play /audio/sportin_voice_2
    // play /audio/sportin_voice_3

    let audios = [
      "/audio/sportin_voice_1.mp3",
      "/audio/sportin_voice_2.mp3",
      "/audio/sportin_voice_3.mp3",
    ];

    // pick audio at random
    let audio = new Audio(audios[Math.floor(Math.random() * audios.length)]);
    audio.volume = 0.1;
    audio.play();
  };

  return (
    <div className="absolute left-[52%] top-[29%] w-[80%] -translate-x-1/2 ">
      <div className="flex flex-col space-y-[1%]">
        {[...Array(LINES)].map((_, i) => (
          <div key={i} className="flex justify-center gap-x-[1%]">
            {[...Array(BASE_SIZE - i)].map((_, j) => (
              <div
                key={j}
                className="group relative z-50 aspect-square w-[6.5%] rounded-full"
                onClick={handleClick}
              >
                <img
                  src="/images/sportan_head.png"
                  className={cn(
                    visible
                      ? "left-[17%] top-[-30%] scale-100"
                      : "left-0 top-0 scale-50 group-hover:left-[17%] group-hover:top-[-30%] group-hover:scale-100",

                    "absolute  h-full w-full select-none transition-all  [filter:_drop-shadow(0.3rem_0.5rem_0px_#5b4328)]     ",
                  )}
                  draggable={false}
                />
                <img
                  src="/images/shield_sm.png"
                  className={cn(
                    visible
                      ? "translate-y-[5%]"
                      : "group-hover:translate-y-[5%]",

                    "relative size-full select-none transition-all [filter:_drop-shadow(0.3rem_0.3rem_0px_#5b4328)] ",
                  )}
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

export default Sportans;

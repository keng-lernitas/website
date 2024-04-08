import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { sportansVisible } from "../../atoms/sportans";
import { cn } from "../../lib/utils";

const Sportans = ({
  visibleShields,
}: {
  visibleShields: number | null | undefined;
}) => {
  const [visible, setVisible] = useRecoilState(sportansVisible);

  const BASE_SIZE = 13;
  const LINES = 4;

  const handleClick = (enabled: Boolean) => {
    // play /audio/sportin_voice_1
    // play /audio/sportin_voice_2
    // play /audio/sportin_voice_3

    if (!enabled) return;

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

  const previous = [0, 13, 25, 36];

  const nextShieldPercentage =
    visibleShields && (visibleShields - Math.floor(visibleShields ?? 0)) * 100;

  return (
    <div className="absolute left-[52%] top-[29%] w-[80%] -translate-x-1/2 ">
      {/* input slider */}

      <div className="flex flex-col space-y-[1%]">
        {[...Array(LINES)].map((_, i) => (
          <div key={i} className="flex justify-center gap-x-[1%]">
            {[...Array(BASE_SIZE - i)].map((_, j) => (
              <div
                key={j}
                className={cn(
                  visibleShields && previous[i] + (j + 1) <= visibleShields
                    ? ""
                    : "",
                  "group relative z-50 aspect-square w-[6.5%] cursor-pointer rounded-full transition ",
                )}
                onClick={() =>
                  handleClick(previous[i] + (j + 1) <= (visibleShields ?? 0))
                }
              >
                {visibleShields &&
                  previous[i] + (j + 1) === Math.ceil(visibleShields) && (
                    <img
                      src="/images/shield_sm.png"
                      style={{
                        maskImage: `linear-gradient(to top, black ${nextShieldPercentage}%, transparent ${nextShieldPercentage}%)`,
                        maskRepeat: "no-repeat",
                        maskPosition: "bottom",
                        maskSize: "100% 100%",
                      }}
                      className="absolute inset-0 z-50 size-full"
                    ></img>
                  )}

                <img
                  src="/images/sportan_head.png"
                  className={cn(
                    visible &&
                      visibleShields &&
                      previous[i] + (j + 1) <= visibleShields
                      ? "left-[17%] top-[-30%] scale-100"
                      : "left-0 top-0 scale-50 group-hover:left-[17%] ",

                    visibleShields && previous[i] + (j + 1) <= visibleShields
                      ? "group-hover:top-[-30%] group-hover:scale-100 "
                      : "opacity-0 ",

                    "absolute  h-full w-full select-none transition-all  [filter:_drop-shadow(0.15rem_0.25rem_0px_#5b4328)] md:[filter:_drop-shadow(0.3rem_0.5rem_0px_#5b4328)]",
                  )}
                  draggable={false}
                />

                <img
                  src="/images/shield_sm.png"
                  className={cn(
                    visible &&
                      visibleShields &&
                      previous[i] + (j + 1) <= visibleShields
                      ? "translate-y-[5%] "
                      : "",
                    visibleShields && previous[i] + (j + 1) <= visibleShields
                      ? "group-hover:translate-y-[5%]"
                      : "opacity-50 ![filter:brightness(50%)_grayscale(100%)_drop-shadow(0.15rem_0.15rem_0px_#5b4328)] md:![filter:_drop-shadow(0.3rem_0.3rem_0px_#5b4328)_brightness(50%)_grayscale(100%)] ",

                    "relative size-full select-none  transition-all [filter:_drop-shadow(0.15rem_0.15rem_0px_#5b4328)] md:[filter:_drop-shadow(0.3rem_0.3rem_0px_#5b4328)] ",
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

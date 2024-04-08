import React from "react";
import { cn } from "../../lib/utils";

const Perzans = ({
  visibleShields,
}: {
  visibleShields: number | null | undefined;
}) => {
  const LINES = 12;
  const BASE_SIZE = 12;

  const handleClick = (enabled: boolean) => {
    if (!enabled) return;

    // play /audio/scream.mp3
    let audio = new Audio("/audio/scream.mp3");
    audio.volume = 0.1;
    audio.play();
  };

  const previous = [0, 12, 25, 37, 50, 62, 75, 87, 100, 112, 125, 137];

  const nextShieldPercentage =
    visibleShields && (visibleShields - Math.floor(visibleShields ?? 0)) * 100;

  console.log("perzan", visibleShields, nextShieldPercentage);

  return (
    <div className="absolute left-[54%] top-[73%] w-[80%] -translate-x-1/2 ">
      <div className="flex flex-col space-y-[0.80%]">
        {[...Array(LINES)].map((_, i) => (
          <div key={i} className="flex justify-center gap-x-[0.80%]">
            {[...Array(BASE_SIZE + (i % 2))].map((_, j) => (
              <div
                key={j}
                className={cn(
                  visibleShields && previous[i] + (j + 1) <= visibleShields
                    ? ""
                    : "",
                  "group relative aspect-square w-[6%] cursor-pointer rounded-full",
                )}
                onClick={() =>
                  handleClick(previous[i] + (j + 1) <= (visibleShields ?? 0))
                }
              >
                {visibleShields &&
                  previous[i] + (j + 1) === Math.ceil(visibleShields) && (
                    <img
                      src="/images/perzan_shield.png"
                      style={{
                        maskImage: `linear-gradient(to top, black ${nextShieldPercentage}%, transparent ${nextShieldPercentage}%)`,
                        maskRepeat: "no-repeat",
                        maskPosition: "bottom",
                        maskSize: "100% 100%",
                      }}
                      className="absolute inset-0 z-50 size-full "
                    ></img>
                  )}

                <img
                  src="/images/perzan_head.png"
                  className={cn(
                    visibleShields && previous[i] + (j + 1) <= visibleShields
                      ? "group-hover:left-[17%] group-hover:top-[-40%] group-hover:scale-100"
                      : "opacity-0",

                    "absolute left-0 top-0 h-full w-full scale-50 select-none transition-all [filter:_drop-shadow(0.15rem_0.25rem_0px_#5b4328)]  md:[filter:_drop-shadow(0.3rem_0.5rem_0px_#5b4328)]",
                  )}
                  draggable={false}
                />
                <img
                  src="/images/perzan_shield.png"
                  className={cn(
                    visibleShields && previous[i] + (j + 1) <= visibleShields
                      ? "group-hover:translate-y-[5%]"
                      : "opacity-50 ![filter:brightness(50%)_grayscale(100%)_drop-shadow(0.15rem_0.15rem_0px_#5b4328)] md:![filter:_drop-shadow(0.3rem_0.3rem_0px_#5b4328)_brightness(50%)_grayscale(100%)]",

                    "relative size-full select-none transition-all [filter:_drop-shadow(0.15rem_0.25rem_0px_#5b4328)]  md:[filter:_drop-shadow(0.3rem_0.5rem_0px_#5b4328)]",
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

export default Perzans;

import React from "react";

const Sportans = () => {
  const BASE_SIZE = 13;
  const LINES = 4;

  return (
    <div className="absolute left-[52%] top-[29%] w-[80%] -translate-x-1/2 ">
      <div className="flex flex-col space-y-[1%]">
        {[...Array(LINES)].map((_, i) => (
          <div className="flex justify-center gap-x-[1%]">
            {[...Array(BASE_SIZE - i)].map((_, j) => (
              <div className="group relative aspect-square w-[6.5%] rounded-full ">
                <img
                  src="/images/sportan_head.png"
                  className="absolute left-0 top-0 h-full w-full scale-50 select-none transition-all  [filter:_drop-shadow(0.3rem_0.5rem_0px_#5b4328)]   group-hover:left-[17%] group-hover:top-[-50%] group-hover:scale-100"
                  draggable={false}
                />
                <img
                  src="/images/shield_sm.png"
                  className="relative size-full select-none transition-all [filter:_drop-shadow(0.3rem_0.3rem_0px_#5b4328)] group-hover:translate-y-[5%]"
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

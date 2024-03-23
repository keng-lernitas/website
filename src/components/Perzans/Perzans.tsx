import React from "react";

const Perzans = () => {
  const LINES = 12;
  const BASE_SIZE = 12;

  return (
    <div className="absolute left-[54%] top-[73%] w-[80%] -translate-x-1/2 ">
      <div className="flex flex-col space-y-[0.80%]">
        {[...Array(LINES)].map((_, i) => (
          <div className="flex justify-center gap-x-[0.80%]">
            {[...Array(BASE_SIZE + (i % 2))].map((_, j) => (
              <div className="group relative aspect-square w-[6%] rounded-full border-4 border-black bg-[#4e3e29] [box-shadow:0.2rem_0.4rem_#5b4328]">
                {/* <img
                  src="/images/sportan_head.png"
                  className="absolute left-0 top-0 h-full w-full scale-50 select-none transition-all group-hover:left-[17%] group-hover:top-[-50%] group-hover:scale-100"
                  draggable={false}
                />
                <img
                  src="/images/shield_sm.png"
                  className="relative size-full select-none transition-all group-hover:translate-y-[5%]"
                  draggable={false}
                /> */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perzans;

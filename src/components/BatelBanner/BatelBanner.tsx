import React from "react";
import { Countdown } from "..";

const BatelBanner = () => {
  return (
    <div className="absolute left-[57%] top-[8%] flex w-[63%] -translate-x-1/2 justify-between p-[1%]">
      <h1 className="font-ScribbleChild text-[4.5vw] leading-none  text-keng-gold lg:text-5xl lg:leading-none">
        batel 1
      </h1>

      <Countdown />
    </div>
  );
};

export default BatelBanner;

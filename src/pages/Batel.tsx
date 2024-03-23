import React from "react";
import {
  BatelBanner,
  Header,
  KengButton,
  Perzans,
  Sportans,
} from "../components";

const Batel = () => {
  return (
    <div className="mx-auto min-h-[100dvh] max-w-5xl">
      <div className="relative h-full ">
        <Header />

        <img
          src="/images/batel_background.webp"
          className=" pointer-events-none z-0 ml-[0%] mt-[20%] aspect-[4097/6819] w-full scale-[122%] transform-gpu select-none"
        />

        <KengButton
          type="defund"
          className="absolute left-[53%] top-[42%]  z-50 w-[16%] -translate-x-1/2"
        />

        <KengButton
          type="atak"
          className="absolute left-[54%] top-[68%]  z-50 w-[16%] -translate-x-1/2"
        />

        <BatelBanner />

        <Sportans />

        <Perzans />

        {/* <a
          href="https://optimistic.etherscan.io/address/0x3Ed9AcAac7Bd974eB83a8eA6432a239e3C829D5D"
          target="_blank"
          rel="noreferrer noopener"
          className="mb-[2%] mt-[30%] block text-center font-ScribbleChild text-[1.7dvw] text-keng-red transition hover:text-red-500 lg:text-base"
        >
          CA: 0x3Ed9AcAac7Bd974eB83a8eA6432a239e3C829D5D
        </a> */}
      </div>
    </div>
  );
};

export default Batel;

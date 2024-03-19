import React from "react";
import { Header, KengButton } from "../components";

const Burn = () => {
  return (
    <div className="mx-auto min-h-[100dvh] max-w-5xl">
      <div className="relative h-full">
        <Header />

        <img
          src="/images/contract_section.webp"
          className="mt-[6%] select-none"
          draggable={false}
        />

        <h1 className="text-keng-text absolute top-[37%] z-50 w-full translate-x-[2%] text-center font-ScribbleChild text-[5.9dvw] leading-[0] lg:text-6xl lg:leading-[0]">
          sacrad contrakt
        </h1>
        <p className="text-keng-text font-ScribbleHand absolute left-[28%] top-[41%] z-50 translate-x-[2%] whitespace-pre text-left text-[3dvw] leading-[150%]  tracking-widest lg:text-3xl lg:leading-[150%]">
          {`i wunt et al.\nwelf. wimen an a yunifom.\nI neel to gud keng zorksees`}
        </p>

        <KengButton
          type="seel"
          className="absolute left-1/2 top-[52%] w-[25%] -translate-x-1/2"
        />

        <a
          href="https://optimistic.etherscan.io/address/0x3Ed9AcAac7Bd974eB83a8eA6432a239e3C829D5D"
          target="_blank"
          rel="noreferrer noopener"
          className="mb-[3%] mt-[6%] block text-center font-ScribbleChild text-[1.7dvw] text-keng-red transition hover:text-red-500 lg:text-base"
        >
          CA: 0x3Ed9AcAac7Bd974eB83a8eA6432a239e3C829D5D
        </a>
      </div>
    </div>
  );
};

export default Burn;

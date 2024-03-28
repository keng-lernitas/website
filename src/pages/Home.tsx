import React from "react";
import { Header, KengButton } from "../components";

const Home = () => {
  const handleBuyClicked = () => {
    window.open(
      "https://twitter.com/BuyWeb3/status/1769143131893903437",
      "_blank",
    );
  };

  return (
    <div className="mx-auto min-h-[100dvh] max-w-5xl">
      <div className="relative h-full ">
        <Header />

        {/* website graphic */}
        <KengButton
          type="info"
          className="absolute left-1/2 top-[53.5%]  z-50 w-[20%] -translate-x-1/2"
          onClick={handleBuyClicked}
        />

        <img
          src="/images/website_graphic.webp"
          className=" pointer-events-none z-0 ml-[-6%] mt-[28%] aspect-[4235/6493] w-full scale-[135%] transform-gpu select-none"
        />

        <div className="mb-[2%] mt-[30%] space-y-[1%] text-center font-ScribbleChild text-[1.8dvw]  lg:text-base">
          <a
            href="https://optimistic.etherscan.io/address/0x3Ed9AcAac7Bd974eB83a8eA6432a239e3C829D5D"
            target="_blank"
            rel="noreferrer noopener"
            className="block  text-keng-red transition hover:text-red-500 "
          >
            Lernitas CA: 0x3Ed9AcAac7Bd974eB83a8eA6432a239e3C829D5D
          </a>
          <a
            href="https://solscan.io/token/9kq1VuGCCKeTgtRmzUTjLVi6LpmBD38im2hPRaqusPkE"
            target="_blank"
            rel="noreferrer noopener"
            className="block  text-keng-red transition hover:text-red-500 "
          >
            Zorksees CA: 9kq1VuGCCKeTgtRmzUTjLVi6LpmBD38im2hPRaqusPkE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

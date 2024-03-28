import React from "react";
import { Header, KengButton } from "../components";
import { Footer } from "../components/Footer";

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

        <div className="mb-[2%] mt-[30%] grid space-y-[1%] text-center font-ScribbleChild text-[2.5dvw] md:grid-cols-2 md:text-[1.5dvw] lg:text-base">
          <div className="flex flex-col justify-center space-y-[2%]">
            <a
              href="https://optimistic.etherscan.io/address/0x3Ed9AcAac7Bd974eB83a8eA6432a239e3C829D5D"
              target="_blank"
              rel="noreferrer noopener"
              className="h-min  text-keng-red transition hover:text-red-500 "
            >
              Lernitas CA: <br /> 0x3Ed9AcAac7Bd974eB83a8eA6432a239e3C829D5D
            </a>

            <div className="flex w-full items-center justify-center space-x-[4%]">
              <a
                href="https://www.dextools.io/app/en/optimism/pair-explorer/0x0e9da98191551c417d25bebe69f2cbe47dfb186f?t=1711639358159"
                target="_blank"
                rel="noreferrer noopener"
                className="w-[23%] text-keng-red transition hover:brightness-50 "
              >
                <img src="/images/DEXTools.png" />
              </a>
              <a
                href="https://dexscreener.com/optimism/0x0e9da98191551c417d25bebe69f2cbe47dfb186f"
                target="_blank"
                rel="noreferrer noopener"
                className="-mt-[0.85%] w-[30%] text-keng-red transition hover:brightness-50 "
              >
                <img src="/images/DexScreener.png" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-[2%]">
            <a
              href="https://solscan.io/token/9kq1VuGCCKeTgtRmzUTjLVi6LpmBD38im2hPRaqusPkE"
              target="_blank"
              rel="noreferrer noopener"
              className="h-min  text-keng-red transition hover:text-red-500 "
            >
              Zorksees CA: <br /> 9kq1VuGCCKeTgtRmzUTjLVi6LpmBD38im2hPRaqusPkE
            </a>

            <div className="flex w-full items-center justify-center space-x-[4%]">
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/D3CiqHjv8hugCpRn9J4tYouRV14QwHuKJkxhr9Zjr5Wo?t=1711637241090"
                target="_blank"
                rel="noreferrer noopener"
                className="w-[23%] text-keng-red transition hover:brightness-50 "
              >
                <img src="/images/DEXTools.png" />
              </a>
              <a
                href="https://dexscreener.com/solana/d3ciqhjv8hugcprn9j4tyourv14qwhukjkxhr9zjr5wo"
                target="_blank"
                rel="noreferrer noopener"
                className="-mt-[0.85%] w-[30%] text-keng-red transition hover:brightness-50 "
              >
                <img src="/images/DexScreener.png" />
              </a>
            </div>
          </div>
        </div>

        <Footer className="mb-[2%] mt-[4%]" />
      </div>
    </div>
  );
};

export default Home;

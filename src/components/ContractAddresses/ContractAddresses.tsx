import React from "react";
import { Twitter } from "../Footer/Footer";
import { cn } from "../../lib/utils";

const ContractAddresses = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "grid space-y-[4%] text-center font-ScribbleChild text-[2.5dvw] md:grid-cols-2 md:space-y-0 md:text-[1.5dvw] lg:text-base",
        className,
      )}
    >
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

          <a
            href="https://www.coingecko.com/en/coins/lernitas"
            target="_blank"
            rel="noreferrer noopener"
            className=" w-[25%] text-keng-red transition hover:brightness-50 "
          >
            <img src="/images/coingecko_logo.png" />
          </a>
        </div>
        <a
          href="https://twitter.com/KengLernitas"
          target="_blank"
          className="mx-auto transition hover:brightness-50"
        >
          <Twitter className="size-5" />
        </a>
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

          <a
            href="https://www.coingecko.com/en/coins/zorksees"
            target="_blank"
            rel="noreferrer noopener"
            className=" w-[25%] text-keng-red transition hover:brightness-50 "
          >
            <img src="/images/coingecko_logo.png" />
          </a>
        </div>
        <a
          href="https://twitter.com/zorksees"
          target="_blank"
          className="mx-auto transition hover:brightness-50"
        >
          <Twitter className="size-5" />
        </a>
      </div>
    </div>
  );
};

export default ContractAddresses;

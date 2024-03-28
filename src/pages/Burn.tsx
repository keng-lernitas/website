import React, { useState } from "react";
import {
  ContractModal,
  EpokCountdown,
  Header,
  KengButton,
} from "../components";

const Burn = () => {
  const [open, setOpen] = useState(false);

  const handleSeelClicked = () => {
    setOpen(true);
  };

  return (
    <>
      <ContractModal open={open} setOpen={setOpen} />

      <div className="mx-auto min-h-[100dvh] max-w-5xl">
        <div className="relative h-full">
          <Header />

          <div className="absolute right-[6%] top-[10%] flex h-[10%] w-[70%] flex-col items-center justify-center p-[1%] font-ScribbleChild text-lg text-keng-gold">
            <div className="text-[1.6dvw] leading-none lg:text-base lg:leading-none">
              epok 1 has ended
            </div>

            <div className="mb-[2%] mt-[2%] text-[3.5dvw] leading-none lg:text-4xl lg:leading-none">
              epok 2
            </div>

            <EpokCountdown />
          </div>

          <img
            src="/images/keng_banner.png"
            className="ml-auto mr-[1%] mt-[5%] w-[80%]"
            draggable={false}
          />

          <img
            src="/images/contract_section.webp"
            className="mt-[6%] aspect-[2148/2782] w-full select-none"
            draggable={false}
          />

          <h1 className="absolute top-[46%] w-full  translate-x-[2%] text-center font-ScribbleChild text-[5.9dvw] leading-[0] text-keng-text lg:text-6xl lg:leading-[0]">
            sacrad contrakt
          </h1>
          <p className="absolute left-[28%] top-[50%] translate-x-[2%] whitespace-pre  text-left font-ScribbleHand text-[3dvw] leading-[150%] tracking-wider  text-keng-text lg:text-3xl lg:leading-[150%]">
            {`i wunt et al.\nwelf wimen an a yunifom.\nbut furst i ned to gev zorksees\nninty pacent of me tokuns`}
          </p>

          <p className="absolute left-[46%] top-[62.5%] whitespace-pre   text-left font-ScribbleChild text-[2.2dvw] leading-[150%] tracking-widest  text-keng-text lg:text-2xl lg:leading-[150%]">
            {`sined: sportan woriya`}
          </p>

          <KengButton
            type="seel"
            className="absolute left-[21%] top-[62%] w-[25%] "
            onClick={handleSeelClicked}
          />

          <div className="absolute mt-[5%] w-full space-y-[1%] pb-[1%] text-center font-ScribbleChild text-[1.8dvw]  lg:text-base">
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
    </>
  );
};

export default Burn;

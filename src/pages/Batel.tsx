import React, { useState } from "react";
import {
  BatelBanner,
  Header,
  KengButton,
  LernitasModal,
  Perzans,
  Sportans,
  ZorkseesModal,
} from "../components";

const Batel = () => {
  const [lernitasModalOpen, setLernitasModalOpen] = useState(false);
  const [zorkseesModalOpen, setZorkseesModalOpen] = useState(false);

  return (
    <>
      <LernitasModal open={lernitasModalOpen} setOpen={setLernitasModalOpen} />
      <ZorkseesModal open={zorkseesModalOpen} setOpen={setZorkseesModalOpen} />

      <div className="mx-auto min-h-[100dvh] max-w-5xl">
        <div className="relative h-full ">
          <Header />

          <img
            src="/images/batel_background.webp"
            className=" pointer-events-none z-0 ml-[0%] mt-[20%] aspect-[4097/6819] w-full scale-[122%] transform-gpu select-none"
          />

          <KengButton
            type="defind"
            className="absolute left-[53%] top-[42%]  z-10 w-[16%] -translate-x-1/2"
            onClick={() => setLernitasModalOpen(true)}
          />

          <KengButton
            type="atak"
            className="absolute left-[54%] top-[68%]  z-10 w-[16%] -translate-x-1/2"
            onClick={() => setZorkseesModalOpen(true)}
          />

          <BatelBanner />

          <Sportans />

          <Perzans />

          <div className="group absolute right-[1%] top-[37.1%] w-[31%]">
            <img
              src="/images/kenglernitas_idle.webp"
              className="absolute opacity-100 group-hover:opacity-0"
              draggable={false}
            />
            <img
              src="/images/kenglernitas_angry.webp"
              className="absolute opacity-0 group-hover:opacity-100"
              draggable={false}
            />
          </div>

          <div className="group absolute left-[18%] top-[54.2%] w-[31%]">
            <img
              src="/images/zorksees_idle.webp"
              className="absolute opacity-100 group-hover:opacity-0"
              draggable={false}
            />
            <img
              src="/images/zorksees_angry.webp"
              className="absolute opacity-0 group-hover:opacity-100"
              draggable={false}
            />
          </div>

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
    </>
  );
};

export default Batel;

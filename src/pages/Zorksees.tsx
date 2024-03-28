import { useState } from "react";
import {
  ContractAddresses,
  ContractModal,
  EpokCountdown,
  Footer,
  Header,
  KengButton,
} from "../components";
import { cn } from "../lib/utils";

const Join = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 238 139"
    className={cn("overflow-clip", className)}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={4}
      d="M157.63 23.368c1.964 0 2.926 3.99 3.649 5.676 2.338 5.454 2.985 10.594 2.985 16.512 0 6.534-2.509 10.983-9.287 10.983M151.66 8.773c-.611-.076-.439-.215-.664-.663M184.83 22.705c-.29-2.614-4.789-1.116-5.971 0-3.063 2.893-5.97 5.663-5.97 10.246 0 7.716 8.439 11.59 15.627 10.283 5.881-1.07 5.602-10.882 5.602-15.222 0-3.548-7.75-7.006-10.615-7.96M199.425 13.417c2.053.257 5.232 9.398 5.823 11.278 1.09 3.468 4.128 7.645 4.128 11.278M194.118 2.14h1.99M211.366 10.1c1.843.23 4.243 8.207 5.308 9.804 1.843 2.765 3.98 9.14 3.98 9.14s-2.653-12.123-2.653-18.28c0-3-.229-4.644 3.317-4.644 3.068 0 4.618 1.944 6.118 4.644 1.17 2.106 2.963 4.385 4.349 6.118 1.616 2.02 1.055 5.16 4.127 5.16M168.908 63.173c0 11.637.996 23.125-5.27 33.465-10.238 16.893-35.531 23.522-53.625 26.757-10.604 1.896-22.168 1.474-32.913 1.474-10.56 0-19.986-.767-30.295-2.948-5.864-1.241-10.691-3.829-16.254-5.528-1.491-.456-2.922-.759-3.611-2.138"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={4}
      d="M28.266 137.474c-.13-1.045-1.678-1.678-2.358-2.359-2.862-2.862-6.33-5.002-9.251-7.924-3.704-3.703-7.041-7.026-9.62-11.609-1.727-3.072-4.644-5.837-4.644-9.583 0-7.023 9.115-3.745 14.08-3.685 11.667.138 23.344 0 35.013 0"
    />
  </svg>
);

const Zorksees = () => {
  const handleCoinClicked = () => {
    window.open(
      "https://jup.ag/swap/SOL-ZORKSEES_9kq1VuGCCKeTgtRmzUTjLVi6LpmBD38im2hPRaqusPkE",
      "_blank",
    );
  };

  return (
    <>
      <div className="mx-auto min-h-[100dvh] max-w-5xl">
        <div className="relative h-full">
          <Header />

          <img
            src="/images/zorksees_homepage.webp"
            className="mx-auto mt-[3%] aspect-[2935/4327] w-[80%] select-none"
            draggable={false}
          />

          <KengButton
            type="zorksees"
            className="absolute left-[40%] top-[75%]  z-50 w-[25%] -translate-x-1/2"
            onClick={handleCoinClicked}
          />

          <img
            src="/images/join_graphic.png"
            className="absolute right-[27%] top-[84%] w-[15%] opacity-80"
          />

          {/* <h1 className="absolute top-[46%] w-full  translate-x-[2%] text-center font-ScribbleChild text-[5.9dvw] leading-[0] text-keng-text lg:text-6xl lg:leading-[0]">
            sacrad contrakt
          </h1>
          <p className="absolute left-[28%] top-[50%] translate-x-[2%] whitespace-pre  text-left font-ScribbleHand text-[3dvw] leading-[150%] tracking-wider  text-keng-text lg:text-3xl lg:leading-[150%]">
            {`i wunt et al.\nwelf wimen an a yunifom.\nbut furst i ned to gev zorksees\nninty pacent of me tokuns`}
          </p>

          <p className="absolute left-[46%] top-[62.5%] whitespace-pre   text-left font-ScribbleChild text-[2.2dvw] leading-[150%] tracking-widest  text-keng-text lg:text-2xl lg:leading-[150%]">
            {`sined: sportan woriya`}
          </p> */}

          {/* <KengButton
            type="seel"
            className="absolute left-[21%] top-[62%] w-[25%] "
            onClick={handleSeelClicked}
          /> */}

          <div className="absolute space-y-[5%] pb-[4%] pt-[8%]">
            <ContractAddresses className="" />

            <Footer className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Zorksees;

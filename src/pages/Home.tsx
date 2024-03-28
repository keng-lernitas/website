import React from "react";
import { ContractAddresses, Header, KengButton } from "../components";
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
          className="absolute left-1/2 top-[50%]  z-50 w-[20%] -translate-x-1/2"
          onClick={handleBuyClicked}
        />

        <img
          src="/images/website_graphic.webp"
          className=" pointer-events-none z-0 ml-[-6%] mt-[28%] aspect-[4235/6493] w-full scale-[135%] transform-gpu select-none"
        />

        <ContractAddresses className="mb-[2%] mt-[30%]" />

        <Footer className="mb-[2%] mt-[4%]" />
      </div>
    </div>
  );
};

export default Home;

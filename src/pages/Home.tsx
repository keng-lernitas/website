import React from "react";

const LINKS = [
  {
    name: "telegram",
    url: "https://t.me/Keng_Lernitas",
  },
  {
    name: "twitter",
    url: "https://twitter.com/KengLernitas",
  },
  {
    name: "chart",
    url: "https://dexscreener.com/optimism/0x7964625f7aec9b3274ec150b6df1b4aca30a91cf",
  },
  {
    name: "memes",
    url: "#",
  },
];

const Home = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative h-full ">
        <div className="mx-[3%] mt-[2%] flex items-center justify-between gap-x-[5%]">
          <img
            src="/images/kenglernitis-title.png"
            className=" w-[50%] select-none"
            alt="Keng"
          />

          <div className="flex w-[50%] items-center gap-x-[1%]">
            <button>
              <img
                src="/images/buy-button.png"
                className="select-none transition hover:scale-[101%] hover:brightness-110 active:brightness-90"
                draggable={false}
              />
            </button>
            <button>
              <img
                src="/images/burn-button.png"
                className="select-none"
                draggable={false}
              />
            </button>
          </div>
        </div>

        <div className="absolute left-[3%] z-50 mt-[5%]  ">
          <div className="flex flex-col font-ScribbleChild text-[2.6dvw] leading-[0] lg:text-[1.65rem] lg:leading-[0]">
            {LINKS.map((link, i) => (
              <a
                key={link.name}
                href={link.url}
                className="mt-[22%] flex select-none items-center gap-x-[10%] text-keng-red transition hover:text-red-500"
                target="_blank"
                rel="noreferrer"
              >
                <img src={`/images/dots/dot-${i + 1}.png`} className="w-[8%]" />
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* website graphic */}
        <button className="absolute left-1/2 top-[53.5%]  z-50 w-[20%] -translate-x-1/2">
          <img
            src="/images/buy-button.png"
            className="select-none"
            draggable={false}
          />
        </button>

        <img
          src="/images/website_graphic.webp"
          className=" ml-[-6%] mt-[28%] scale-[135%] transform-gpu select-none"
        />

        <div className="mb-[2%] mt-[30%] text-center font-ScribbleChild text-keng-red">
          CA: 0x3Ed9AcAac7Bd974eB83a8eA6432a239e3C829D5D
        </div>
      </div>
    </div>
  );
};

export default Home;

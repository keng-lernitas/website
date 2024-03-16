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
    <div className="mx-auto max-w-3xl">
      <div className="relative">
        <img
          src="/images/kenglernitis-title.png"
          className="absolute left-[2%] mt-[1.5%] w-[47%]"
          alt="Keng"
        />

        <div className="absolute left-[2%] z-50 mt-[19%] ">
          <div className="font-ScribbleChild flex flex-col text-[min(2dvw,_2rem)] md:text-base">
            {LINKS.map((link, i) => (
              <a
                key={link.name}
                href={link.url}
                className="mt-[10%] flex items-center gap-x-[10%] text-keng-red transition hover:text-red-500"
                target="_blank"
                rel="noreferrer"
              >
                <img src={`/images/dots/dot-${i + 1}.png`} className="w-[8%]" />
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <img
          src="/images/website_graphic.png"
          className="absolute left-[-6%] mt-[15%] min-h-full w-[100%] scale-[110%]"
        />
      </div>
    </div>
  );
};

export default Home;

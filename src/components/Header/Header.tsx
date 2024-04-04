import React from "react";
import { Link } from "react-router-dom";
import { KengButton } from "..";

const LINKS = [
  {
    name: "batel",
    url: "/batel",
  },
  {
    name: "zorksees",
    url: "/zorksees",
  },
  {
    name: "telegram",
    url: "https://t.me/Keng_Lernitas",
  },
  {
    name: "twitter",
    url: "https://twitter.com/KengLernitas",
  },
  {
    name: "glori lyst",
    url: "/glori-lyst",
  },
  {
    name: "info",
    url: "https://twitter.com/BuyWeb3/status/1769143131893903437",
  },
];

const Header = () => {
  const handleHeaderBuyClicked = () => {
    window.open(
      "https://velodrome.finance/swap?from=eth&to=0x3ed9acaac7bd974eb83a8ea6432a239e3c829d5d",
      "_blank",
    );
  };

  return (
    <>
      <div className="mx-[3%] mt-[2%] flex items-center justify-between gap-x-[5%]">
        <Link to="/" className=" w-[50%] select-none hover:brightness-[150%]">
          <img src="/images/kenglernitas-title.png" className="" alt="Keng" />
        </Link>

        <div className="flex w-[50%] items-center gap-x-[1%]">
          <KengButton type="gold" onClick={handleHeaderBuyClicked} />
          <Link to="/burn">
            <KengButton type="red" />
          </Link>
        </div>
      </div>

      <div className="absolute left-[5%] mt-[2%]  ">
        <div className="flex flex-col font-ScribbleChild text-[2.6dvw] leading-none lg:text-[1.65rem] lg:leading-none">
          {LINKS.map((link, i) => (
            <React.Fragment key={link.name}>
              {link.url.startsWith("/") ? (
                <Link
                  to={link.url}
                  className="mt-[20%] flex select-none items-center gap-x-[10%] text-keng-red transition hover:text-red-500"
                >
                  <img
                    src={`/images/dots/dot-${(i + 1) % 4 || 4}.png`}
                    className="absolute left-[-15%] w-[8%]"
                  />
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.url}
                  className="mt-[20%] flex select-none items-center gap-x-[10%] text-keng-red transition hover:text-red-500"
                  target={link.name === "memes" ? "_self" : "_blank"}
                  rel="noreferrer"
                >
                  <img
                    src={`/images/dots/dot-${(i + 1) % 4 || 4}.png`}
                    className="absolute left-[-15%] w-[8%]"
                  />
                  {link.name}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;

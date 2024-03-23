import React from "react";
import { cn } from "../../lib/utils";

interface KengButtonProps {
  type?:
    | "gold"
    | "red"
    | "info"
    | "seel"
    | "epok1"
    | "epok2"
    | "atak"
    | "defund";
  className?: string;
  onClick?: () => void;
}

const StaticState = {
  gold: "/images/buy-button.png",
  info: "/images/info-button.png",
  red: "/images/burn-button.png",
  seel: "/images/seel-button.png",
  epok1: "/images/epok1-button.png",
  epok2: "/images/epok2-button.png",
  atak: "/images/atak-button.png",
  defund: "/images/defund-button.png",
};
const HoverState = {
  gold: "/images/buy-button-hover.png",
  red: "/images/burn-button-hover.png",
  info: "/images/info-button-hover.png",
  seel: "/images/seel-button-hover.png",
  epok1: "/images/epok1-button-hover.png",
  epok2: "/images/epok2-button-hover.png",
  atak: "/images/atak-button-hover.png",
  defund: "/images/defund-button-hover.png",
};

const KengButton = ({ type = "gold", className, onClick }: KengButtonProps) => {
  const handleMouseOver = () => {
    const audio = new Audio("/audio/button_hover.wav");
    audio.volume = 0.5;
    audio.play();
  };

  return (
    <button
      onClick={onClick}
      className={cn("group relative", className)}
      onMouseOver={handleMouseOver}
    >
      <img
        src={StaticState[type]}
        className="select-none hover:scale-[102%]"
        draggable={false}
      />
      <img
        src={HoverState[type]}
        className="absolute inset-0 select-none opacity-0 hover:scale-[102%]  active:scale-[98%] active:brightness-90 group-hover:opacity-100"
        draggable={false}
      />
    </button>
  );
};

export default KengButton;

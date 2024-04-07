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
    | "defind"
    | "batel"
    | "zorksees";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const StaticState = {
  gold: "/images/buy-button.png",
  info: "/images/info-button.png",
  red: "/images/burn-button.png",
  seel: "/images/seel-button.png",
  epok1: "/images/epok1-button.png",
  epok2: "/images/epok2-button.png",
  atak: "/images/atak-button.png",
  defind: "/images/defind-button.png",
  zorksees: "/images/zorksees_coin_md.png",
  batel: "/images/batel-button.png",
};
const HoverState = {
  gold: "/images/buy-button-hover.png",
  red: "/images/burn-button-hover.png",
  info: "/images/info-button-hover.png",
  seel: "/images/seel-button-hover.png",
  epok1: "/images/epok1-button-hover.png",
  epok2: "/images/epok2-button-hover.png",
  atak: "/images/atak-button-hover.png",
  defind: "/images/defind-button-hover.png",
  zorksees: "/images/zorksees_coin_md-hover.png",
  batel: "/images/batel-button-hover.png",
};

const KengButton = ({
  type = "gold",
  className,
  onClick,
  disabled,
}: KengButtonProps) => {
  const handleMouseOver = () => {
    if (disabled) return;

    const audio = new Audio("/audio/button_hover.mp3");
    audio.volume = 0.5;
    audio.play();
  };

  return (
    <button
      onClick={onClick}
      className={cn("group relative", className)}
      onMouseOver={handleMouseOver}
      disabled={disabled}
    >
      <img
        src={StaticState[type]}
        className={cn(!disabled && " hover:scale-[102%]", "select-none")}
        draggable={false}
      />
      <img
        src={HoverState[type]}
        className={cn(
          !disabled &&
            " hover:scale-[102%]  active:scale-[98%] active:brightness-90 group-hover:opacity-100",
          "absolute inset-0 select-none opacity-0 ",
        )}
        draggable={false}
      />
    </button>
  );
};

export default KengButton;

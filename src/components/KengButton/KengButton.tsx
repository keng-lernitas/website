import React from "react";
import { cn } from "../../lib/utils";

interface KengButtonProps {
  type?: "gold" | "red";
  className?: string;
}

const StaticState = {
  gold: "/images/buy-button.png",
  red: "/images/burn-button.png",
};
const HoverState = {
  gold: "/images/buy-button-hover.png",
  red: "/images/burn-button-hover.png",
};

const KengButton = ({ type = "gold", className }: KengButtonProps) => {
  return (
    <button className={cn("group relative", className)}>
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

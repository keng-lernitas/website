import { atom } from "recoil";

const sportansVisible = atom({
  key: "sportansVisible", // unique ID (with respect to other atoms/selectors)
  default: false,
});

export { sportansVisible };

import { atom, selector } from "recoil";
import { ids } from "./token";
const $State = atom({
  key: "$State",
  default: 0,
});

const upperTypeState = atom<ids>({
  key: "upperType",
  default: "DAI",
});

const lowerTypeState = atom<ids>({
  key: "lowerType",
  default: "USDC",
});

const modalState = atom({
  key: "modal",
  default: null,
});
export { $State, upperTypeState, lowerTypeState, modalState };

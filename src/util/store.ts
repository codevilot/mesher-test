import { atom } from "recoil";
import { ids } from "./token";
import { getRecentList } from "./getRecentList";
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

const recentState = atom({
  key: "recent",
  default: getRecentList(),
});

const upperAmountState = atom({
  key: "upperAmount",
  default: 0,
});

const lowerAmountState = atom({
  key: "lowerAmount",
  default: 0,
});
export {
  $State,
  upperTypeState,
  lowerTypeState,
  modalState,
  recentState,
  upperAmountState,
  lowerAmountState,
};

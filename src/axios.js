import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "routes",
  storage: localStorage,
});

export const routesAtom = atom({
  key: "routes",
  default: "home",
  effects_UNSTABLE: [persistAtom],
});

export const toggledAtom = atom({
  key: "toggled",
  default: false,
});

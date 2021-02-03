import { atom } from "recoil";

const appTheme = atom({
  key: "theme",
  default: "light",
});

export { appTheme };

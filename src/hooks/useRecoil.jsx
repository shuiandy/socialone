import { atom } from "recoil";
const fbLoginStatus = atom({
  key: "fbLoginStatus",
  default: false,
});
const insLoginStatus = atom({
  key: "insLoginStatus",
  default: false,
});
const twitterLoginStatus = atom({
  key: "twitterLoginStatus",
  default: false,
});
const modeState = atom({
  key: "modeState",
  default: "unify",
});
const preferenceModal = atom({
  key: "preferenceModal",
  default: false,
});
const twitterPanel = atom({
  key: "twitterPanel",
  default: "timeline",
});
export {
  fbLoginStatus,
  insLoginStatus,
  twitterLoginStatus,
  modeState,
  preferenceModal,
  twitterPanel,
};

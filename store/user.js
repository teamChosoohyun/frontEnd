import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const kakaoUserInfo = atom({
  key: "kakaoUserInfo",
  default: {
    name: "",
    type: 0,
    kakaoid: "",
    k_img_url: "",
    category: "",
    isLogin: false,
  },
  effects_UNSTABLE: [persistAtom],
});

import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const kakaoUserInfo = atom({
  key: "kakaoUserInfo",
  default: {
    id: 0,
    name: "",
    type: 0,
    kakaoid: "",
    k_img_url: "",
    l_id: "",
    isLogin: false,
  },
  effects_UNSTABLE: [persistAtom],
});

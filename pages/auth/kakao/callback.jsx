import { useRecoilState } from "recoil";
import { kakaoUserInfo } from "../../../store/user";
import { useEffect } from "react";
import queryString from "query-string";
import { instance } from "../../../util/axiosSetting";

export default function Callback() {
  const [user, setUser] = useRecoilState(kakaoUserInfo);

  const isSignUpUser = (code) => {
    instance
      .get(`/kakao/kakaoLogin?k_id=${code}`)
      .then((res) => {
        if (!res.data) window.location.href = "/auth/signup";
        else {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getKakaoUserInfo = (code) => {
    instance
      .get(`/kakao/getKakaoUserInfo?code=${code}`)
      .then((res) => {
        const img = res.data.k_img_url;
        setUser({
          ...user,
          kakaoid: res.data.k_id,
          k_img_url: img.substring(1, img.length - 1),
        });
        isSignUpUser(res.data.k_id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const query = queryString.parse(window.location.search);
    getKakaoUserInfo(query.code);
  }, []);

  return <></>;
}

import { AxiosError } from "axios";
import { instance } from "./axiosSetting";
import { kakaoUserInfo } from "../store/user";
import { useRecoilState } from "recoil";
import React from "react";
import { Init } from "./init";


export const updateUser = () => {
  const [user, setUser] = useRecoilState(kakaoUserInfo);

  React.useEffect(() => {
    (async () => {
      try {
        const res = (await instance.get("/user/info")).data;
        setUser(({
          ...res,
          isLogin: true,
        }));
      } catch (error) {
        console.log(error);
        setUser(Init);
      }
    })();
  }, [])
}
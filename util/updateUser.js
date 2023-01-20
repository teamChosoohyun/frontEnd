import { AxiosError } from "axios";
import { instance } from "./axiosSetting";
import { kakaoUserInfo } from "../store/user";
import { useRecoilState } from "recoil";
import React from "react";


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
        if (error instanceof AxiosError && error.response?.status === 401 || error instanceof AxiosError && error.response?.status === 403) {
          setUser(({
            ...user,
            isLogin: false,
          }));
        }
      }
    })();
  }, [])
}
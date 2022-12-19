import styles from "../../styles/login/login2.module.css";
import React, { useEffect, useState } from "react";
import { instance } from "../../util/axiosSetting";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { kakaoUserInfo } from "../../util/user";
import styled from "styled-components";

export default function Login2() {
  const [user, setUser] = useState({
    name: "",
    type: 0,
    category: "",
  });
  const [kakaoUser, setKakaoUser] = useRecoilState(kakaoUserInfo);

  const change = (e) => {
    const { name, value } = e.target;
    const newInput = {
      ...user,
      [name]: value,
    };
    setUser(newInput);
  };

  const postUserJoin = async () => {
    console.log(user);
    const data = new FormData();

    data.append("name", user.name);
    data.append("type", user.type);
    data.append("kakaoid", kakaoUser.kakaoid);
    data.append("k_img_url", kakaoUser.k_img_url);
    if (user.category) data.append("category", user.category);

    try {
      const res = (
        await instance.post("/user/join", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
      ).data;
      console.log(res);

      let res2;
      if (user.type === "1") {
        const data2 = new FormData();

        data2.append("lecturer_id", res.id);
        data2.append("category", res.category);

        res2 = (
          await instance.post("/create/lecture", data2, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        ).data;

        console.log(res2);
      }

      if(res2){
        setKakaoUser({
          ...res,
          l_id: res2.id,
          isLogin: true,
        });
      }
      else{
        setKakaoUser({
          ...res,
          l_id: "",
          isLogin: true,
        });
      }
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.loginmain}>
      <div className={styles.logins}>
        <div className={styles.filebox}>
          <span>
            <Image src={"/images/logong.png"} width={400} height={300} />
          </span>
        </div>
        <div className={styles.inputbox}>
          <p className={styles.p1}>회원명을 입력해 주세요</p>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={change}
            className={styles.name}
          />
          <p className={styles.p1}>회원 유형을 선택해 주세요</p>
          <div className={styles.users}>
            <input
              id="lecture"
              type="radio"
              name="type"
              value="1"
              onChange={change}
            />
            <label htmlFor="lecture" className={styles.labels1}>
              강사
            </label>
            <input
              id="user"
              type="radio"
              name="type"
              value="2"
              onChange={change}
            />
            <label htmlFor="user" className={styles.labels2}>
              외부인
            </label>
          </div>
          {user.type === "1" && (
            <CategoryContainer>
              <p className={styles.p2}>강의 유형을 선택해 주세요</p>
              <div className={styles.lectures}>
                <input
                  type="radio"
                  name="category"
                  value="1"
                  onChange={change}
                  id="lego"
                />
                <label className={styles.lab1} htmlFor="lego">
                  레고
                </label>
                <input
                  type="radio"
                  name="category"
                  value="2"
                  onChange={change}
                  id="software"
                />
                <label className={styles.lab2} htmlFor="software">
                  소프트웨어
                </label>
                <input
                  type="radio"
                  name="category"
                  value="3"
                  onChange={change}
                  id="maker"
                />
                <label className={styles.lab2} htmlFor="maker">
                  메이커
                </label>
                <input
                  type="radio"
                  name="category"
                  value="4"
                  onChange={change}
                  id="etc"
                />
                <label className={styles.lab2} htmlFor="etc">
                  기타
                </label>
              </div>
            </CategoryContainer>
          )}
          <div className={styles.buttonbox}>
            <button className={styles.gosign} onClick={postUserJoin}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CategoryContainer = styled.div`
  width: 100%;
  text-align: center;
`;

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import LecturerInfo from "./lecturerInfo";
import styles from "../../styles/lecturer/lecturerList.module.css";
import { useState, useEffect } from "react";
import { instance } from "../../util/axiosSetting";
import { SetCategory } from "../../util/category";
import styled from "styled-components";

export default function Lecturer() {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        if (category !== 0) {
          const res = (await instance.get(`/user/lecturer/info/${category}`)).data;
          console.log(res)
          if (res) setList(res);
        }
        else {
          const res = (await instance.get(`/user/lecturer`)).data;
          console.log(res)
          if (res) setList(res);
        }
      } catch (error) {
        console.log(error)
      }
    })();
  }, [category]);

  return (
    <div className={styles.lecturer}>
      <Header />
      <LecturerContainer len={list.length}>
        <div className={styles.category}>
          <Button className={styles.categoryButton} onClick={() => setCategory(0)} num={category} idx={0} >
            <span>전체</span>
          </Button>
          <Button className={styles.categoryButton} onClick={() => setCategory(2)} num={category} idx={2} >
            <span>소프트웨어 강사</span>
          </Button>
          <Button className={styles.categoryButton} onClick={() => setCategory(1)} num={category} idx={1} >
            <span>레고 강사</span>
          </Button>
          <Button className={styles.categoryButton} onClick={() => setCategory(3)} num={category} idx={3} >
            <span>메이커 강사</span>
          </Button>
          <Button className={styles.categoryButton} onClick={() => setCategory(4)} num={category} idx={4} >
            <span>기타</span>
          </Button>
        </div>
        <div className={styles.flex}>
          <div className={styles.grid}>
            {list?.map((value, index) => {
              const category = SetCategory(value.category);
              return (
                <LecturerInfo
                  img={value.k_img_url}
                  name={value.name}
                  category={category}
                  id={value.id}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </LecturerContainer>
    </div>
  );
}

const LecturerContainer = styled.div`
  background-color: white;
  width: 80%;
  height: ${({ len }) => len >= 4 ? "100%" : "100vh"};
  margin: 0 auto;
`

const Button = styled.div`
  margin-left: 50px;
  padding-left: 30px;
  padding-right: 30px;
  height: 45px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ num, idx }) => (num === idx ? "#ffa41d" : "white")};
  &:hover{
    background-color: #ffa41d;
  }
`
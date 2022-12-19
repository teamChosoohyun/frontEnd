import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import LecturerInfo from "./lecturerInfo";
import styles from "../../styles/lecturer/lecturerList.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { instance } from "../../util/axiosSetting";
import { SetCategory } from "../../util/category";

export default function Index() {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState(0);

  useEffect(() => {
    instance
      .get("/lecturer/list")
      .then((res) => {
        console.log(res.data);
        setList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (category !== 0) {
      instance
        .get(`/lecturer/list/${category}`)
        .then((res) => {
          setList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      instance
        .get("/lecturer/list")
        .then((res) => {
          console.log(res.data);
          setList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [category]);

  return (
    <div className={styles.lecturer}>
      <Header />
      <div className={styles.lecturerList}>
        <div className={styles.category}>
          <div className={styles.categoryButton} onClick={() => setCategory(0)}>
            <span>전체</span>
          </div>
          <div className={styles.categoryButton} onClick={() => setCategory(2)}>
            <span>소프트웨어 강사</span>
          </div>
          <div className={styles.categoryButton} onClick={() => setCategory(1)}>
            <span>레고 강사</span>
          </div>
          <div className={styles.categoryButton} onClick={() => setCategory(3)}>
            <span>메이커 강사</span>
          </div>
          <div className={styles.categoryButton} onClick={() => setCategory(4)}>
            <span>기타</span>
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.grid}>
            {list.map((value) => {
              const category = SetCategory(value.category);
              return (
                <LecturerInfo
                  img={value.k_img_url}
                  name={value.name}
                  category={category}
                  id={value.id}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

import {useState} from "react";
import styles from "../../styles/contents/contentIndex.module.css";
import All from "./all";
import Lego from "./lego";
import Software from "./software";
import Others from "./others";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styled from "styled-components";
export default function Index() {
    const [education, setEducation] = useState(1);
    return (
        <div className={styles.root}>
            <Header/>
            <div className={styles.white}>
                <h2 className={styles.intro}>콘텐츠 소개</h2>
                <p className={styles.content}>"더 나은 미래를, 보다 많은 학생에게"</p>
                <p className={styles.content2}>
                    모든 아이들이 누릴 수 있는 소프트웨어 교육
                </p>
                <div className={styles.menu}>
                    <Button onClick={() => setEducation(1)} num={education} idx={1}>
                        전체
                    </Button>
                    <Button onClick={() => setEducation(2)} num={education} idx={2}>
                        레고교육
                    </Button>
                    <Button onClick={() => setEducation(3)} num={education} idx={3}>
                        소프트웨어교육
                    </Button>
                    <Button onClick={() => setEducation(4)} num={education} idx={4}>
                        기타교육들
                    </Button>
                </div>
                {education === 1 && <All/>}
                {education === 2 && <Lego/>}
                {education === 3 && <Software/>}
                {education === 4 && <Others/>}
                <Footer/>
            </div>
        </div>
    );
}

const Button = styled.span `
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
  background-color: ${(props)=> (props.num === props.idx ? "#ffa41d" : "white")};
  &:hover{
    background-color: #ffa41d;
  }
`
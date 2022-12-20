import styles from '../../styles/main/intro.module.css';
import Image from "next/image";
import { AiOutlineRight } from 'react-icons/ai';
import IntroImage from '../../public/images/codingmom.png'
import { useRouter } from 'next/router';

export default function Intro(){

  const router = useRouter();

    return (
      <div className={styles.intro}>
        <div className={styles.introText}>
          <p className={styles.text}>당신의 아이들을 위해</p>
          <p className={styles.text}>모인 협동조합</p>
        </div>
        <div className={styles.imgSize}>
          <span className={styles.introImg}>
            <Image src={IntroImage} alt={"icon"} layout="fill" quality={100} />
          </span>
          <div className={styles.remarks}>
            <p className={styles.remarksText}>
              코딩하는 엄마들이 모여 만든 코딩맘스쿨 협동조합.
              <br/>
              당신의 자녀들을 우리의 자녀처럼 가르치겠습니다.
            </p>
            <p className={styles.info} onClick={()=> router.push("/intro")}>
              자세히 보기 <AiOutlineRight />
            </p>
          </div>
        </div>
      </div>
    );
}
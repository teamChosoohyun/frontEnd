import styles from "../../styles/login/login.module.css";
import Link from "next/link";
export default function loginpage() {
    return (
        <div className={styles.loginmain}>
            <div className={styles.logins}>
                <Link href="/">
                    <img src={"/images/logong.png"} alt={"icons"} className={styles.logong} />
                </Link>
                <img src={"/images/logback.png"} alt={"icons"} className={styles.logback} />
            </div>
            <Link href="/">
                <button className={styles.kakao}>
                    <img src={"/images/kakao.png"} alt={"icons"} className={styles.kakaoicon} />
                    <text className={styles.start}>카카오로 시작하기</text>
                </button>
            </Link>
        </div>
    )
}
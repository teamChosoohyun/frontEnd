import Link from "next/link";
import styles from "../../styles/header/header.module.css";
import classNames from "classnames";
import Image from "next/image";

export default function Header() {
    return (
        <div className={styles.header}>
            <Link href="/">
                <Image src="/images/logo2.png" alt={"icon"} width={120} height={40} className={styles.linke}></Image>
            </Link>
            <div className={classNames(styles.nav, styles.text)}>
                <Link href="/intro"><span>코딩맘 소개</span></Link>
                <Link href="/lecturer"><span>강사 소개</span></Link>
                <Link href="/contents"><span>콘텐츠 소개</span></Link>
                <Link href="/material"><span>교구 소개</span></Link>
            </div>
            <div className={classNames(styles.auth, styles.text)}>
                <Link href="/"><span>로그인</span></Link>
                <Link href="/login/loginpage"><span>회원가입</span></Link>
            </div>
        </div>
    )
}

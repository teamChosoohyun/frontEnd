import Link from "next/link";
import styles from '../../styles/header/mainHeader.module.css'
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import {useRef, useState} from "react";
import Image from "next/image";

export default function MainHeader()
{
    const [header, setHeader] = useState(true);
    const headerRef = useRef();
    let lastPos = 0;

    useScrollPosition(({ currPos })=>{
        const scrollY = Math.abs(currPos.y);
        console.log(scrollY)
        console.log(scrollY)
        if(scrollY < 870){
            headerRef.current.classList.remove(styles.whiteBack)
        }
        if(scrollY > lastPos){
            headerRef.current.classList.add(styles.invisible);
        }
        else if(scrollY === 0 || scrollY < lastPos) {
            headerRef.current.classList.remove(styles.invisible)
            if(scrollY > 870){
                headerRef.current.classList.add(styles.whiteBack)
            }
        }
        lastPos = scrollY;
    }, [header])

    return(
        <div className={styles.header} ref={headerRef}>
            <span className={styles.headerImg}>
                <Image src="/images/image5.png" alt={"icon"} width={80} height={80} ></Image>
            </span>
            <div className={styles.nav}>
                <Link href="/intro"><span>코딩맘 소개</span></Link>
                <Link href="/lecturer"><span>강사 소개</span></Link>
                <Link href="/contents"><span>콘텐츠 소개</span></Link>
                <Link href="/material"><span>교구 소개</span></Link>
            </div>
            <div className={styles.auth}>
                <Link href="/login/loginPage"><span>로그인</span></Link>
                <Link href="/login/loginpage"><span>회원가입</span></Link>
            </div>
        </div>
    )
}

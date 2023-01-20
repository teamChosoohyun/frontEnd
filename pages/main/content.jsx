import {AiOutlineArrowRight} from 'react-icons/ai'
import styles from '../../styles/main/content.module.css';
import Image from "next/image";
import {useRouter} from 'next/router';

export default function Content() {

    const router = useRouter();

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Contents</h1>
            <div className={styles.flex}>
                <div className={styles.lego}>
                    <div className={styles.legoDiv}>
                        <span className={styles.legoFirst}>L</span>
                        <span className={styles.legoText}>EGO</span>
                    </div>
                    <span className={styles.legoImg}>
                        <Image
                            src={"/images/lego.png"}
                            alt={"icon"}
                            layout={"responsive"}
                            width={800}
                            height={700}/>
                    </span>
                    <AiOutlineArrowRight
                        className={styles.legoArrow}
                        onClick={() => router.push("/contents")}/>
                </div>
                <div className={styles.vertical}>
                    <div className={styles.software}>
                        <div className={styles.softwareDiv}>
                            <span className={styles.softwareFirst}>S</span>
                            <span className={styles.softwareText}>OFTWARE</span>
                        </div>
                        <span className={styles.softwareImg}>
                            <Image
                                src={"/images/software.png"}
                                alt={"icon"}
                                layout={"responsive"}
                                width={900}
                                height={400}/>
                        </span>
                        <AiOutlineArrowRight
                            className={styles.softwareArrow}
                            onClick={() => router.push("/contents")}/>
                    </div>
                    <div className={styles.others}>
                        <div className={styles.othersDiv}>
                            <span className={styles.othersFirst}>O</span>
                            <span className={styles.othersText}>THERS</span>
                        </div>
                        <span className={styles.othersImg}>
                            <Image
                                src={"/images/other.png"}
                                alt={"icon"}
                                layout={"responsive"}
                                width={900}
                                height={400}/>
                        </span>
                        <AiOutlineArrowRight
                            className={styles.othersArrow}
                            onClick={() => router.push("/contents")}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
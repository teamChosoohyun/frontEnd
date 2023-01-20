import styles from "../../styles/lecturer/lecturerInfo.module.css";
import Link from "next/link";
import Image from "next/image";

export default function LecturerInfo({ img, name, category, id }) {
  return (
    <Link className={styles.info} href={`/lecturer/${id}`}>
      <a className={styles.link}>
        <Image src={img} alt={"icon"} width={300} height={300} />
        <p className={styles.name}>{name}</p>
        <p className={styles.category}>{category}</p>
      </a>
    </Link>
  );
}

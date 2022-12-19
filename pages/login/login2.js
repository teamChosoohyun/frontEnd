import styles from "../../styles/login/login2.module.css";
import styled from 'styled-components';
import { useRouter } from "next/router";
import $ from 'jquery';
import React, { useState, useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';

export default function Login2() {
    const [users, setUsers] = useState("");
    function handlelecture() {
        setUsers("lec");
        $('#wow').css('opacity', '1');
        $('#wow').css('pointer-events', 'auto');
    }
    function handleout () {
            setUsers("out");
            $('#wow').css('opacity', '0.2',);
            $('#wow').css('pointer-events', 'none');
    }
    const router = useRouter();
    const encodeFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    }
    const [imageSrc, setImageSrc] = useState('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFxcXFxUXGBcXFRcXFxcXFxcXGBcYHSggGB0lHR0XITEiJSkrLi4uHR8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAQsAvQMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAIF/8QAIxABAQEAAQIGAwEAAAAAAAAAAAER8AJBMXGBkaHBIWHRsf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDqLFVASR0GYYlAWLEsBYqtIM4cRoCRYpUCxYagFRtEBYoiAWJAqcBgCEYdAYUgVi1loFKloBU0VQEcSoDEjAEOIAarBh0FILDEAVhwUFWt9QpAZpS0EsOq0AahoI4DoBU9IA6FVANSwAoqsQKRGoAUgWCpAaJh1AIlToAiICoNIDEUAOoYCRwAQpSAR1AIlqBKkAliQKxrpZhl8wBSsAWrSgEhg1SgsRqAJYQBBAIgEbAqCWEaBkCtIDUiAakZjUBlVWKAUCASVA0I6CEIAyrBD0wBasVNAVVHQCiOAhUgSiiAmfthvQZwhUEeqBAod/YQJdlCANQBYrUgKwRAopEgIxHQEMiQCKKIDiVinOwCxEaBqkB0EMRAVUgEkgIxGAhVqBGDUCSIIYpVQWLEYAa6QICUqQJWlUBCLECRwQCsVGgZARoGxBARp0AVYFAMVCBaRpgA6KYAMqEoLEtIJDUCMgQJIgFiIIRagRoVAhHQBBoBVYcAYYsGgcCAEpAFYqQSBoCmhAoRUCNC0FUVoCQioEkdAJUwAcZrUgCpUgqhUCS1YClURgAhAYqgBQ0858gIaEBQWgiLeyBEKAmpBh6QZw9IMgIVICgtAoKAYIjQEVMAKmMmwFTIIZQBvylQUXOfA1AsUihAUwaZPMEEgSiMARYQCxHQCVS0FqR0BhygwEKkClKAKGc57g6AlIICENdNBlYkBFRAaj+BAUUSBQ2ikFixIAtNEBQ4gBQ06CGqrARVFBGDSApznsMO/kEggRgsQFYNIBVICDV0+IBVEBq0qAyYVQVBqgBHVAFak8/Rk6Ah09U56DfD1AQwi+F9QSSARI0FFUJ353AqG89wAKU/n2Co0xXxAKk9M/z7gMwqKgqqp352gn2C0wNdN/AP/9k=');
    const handleChangeFile = (e) => {
        encodeFile(e.target.files[0]);
    }
    return (
        <div className={styles.loginmain}>
            <div className={styles.logins}>
                <div className={styles.filebox}>
                    <img src={"/images/logong.png"} alt={"icons"} className={styles.logong} />
                </div>
                <div className={styles.line}></div>
                <input type="text" placeholder="이름을 입력해 주세요" className={styles.name} />
                <p className={styles.p1}><b>회원 종류를 선택해주세요</b></p>
                <div className={styles.users}>
                    <label className={styles.labels1}><input type="radio" name="users" value="lecturer" onClick={handlelecture} /><b>강사님</b></label>
                    <label className={styles.labels2}><input type="radio" name="users" value="out" onClick={handleout} /><b>외부인</b></label>
                </div>
                <div id="wow">
                    <p className={styles.p2}><b>강의 유형을 선택해 주세요(중복선택 가능)</b></p>
                    <div className={styles.lectures}>
                        <label className={styles.lab1}><input type="radio" name="part" value="lego" /><b>레고</b></label>
                        <label className={styles.lab2}><input type="radio" name="part" value="sw" /><b>소프트웨어</b></label>
                        <label className={styles.lab2}><input type="radio" name="part" value="maker" /><b>메이커</b></label>
                        <label className={styles.lab2}><input type="radio" name="part" value="etc" /><b>기타</b></label>
                    </div>
                </div>
                <div className={styles.buttonbox}>
                    <button className={styles.gosign} onClick={() => {
                        router.push("/")
                    }}><text><b>회원가입하기</b></text></button>
                </div>
            </div>
        </div>
    )
}
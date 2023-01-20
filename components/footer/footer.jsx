import styled from 'styled-components'
import styles from '../../styles/footer/footer.module.css'

export default function Footer() {
    return (
        <FooterContainer>
            <p className={styles.title}>CODINGMOM</p>
            <div className={styles.contact}>
                <span className={styles.call}>문의 583-0609</span>
                <span className={styles.email}>codingmom@daum.net</span>
            </div>
            <p className={styles.address}>부산광역시 금정구 금정로 63-1, 2층 (장전동) ⓒ 2022 CODINGMOM, co-op</p>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer `
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
`